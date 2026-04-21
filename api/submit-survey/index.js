const { TableClient } = require('@azure/data-tables');

const TABLE_NAME = 'surveyResponses';

module.exports = async function (context, req) {
  const body = req.body;

  if (!body || !body.surveyType || !body.group || !body.responses) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing required fields: surveyType, group, responses' }),
    };
    return;
  }

  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

  if (!connectionString) {
    // Local dev fallback — log the response and return success so the UI keeps working
    context.log('[DEV] No AZURE_STORAGE_CONNECTION_STRING set. Logging submission locally:');
    context.log(JSON.stringify(body, null, 2));
    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, dev: true }),
    };
    return;
  }

  try {
    const client = TableClient.fromConnectionString(connectionString, TABLE_NAME);
    await client.createTableIfNotExists();

    const rowKey = `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    await client.createEntity({
      partitionKey: `${body.group}_${body.surveyType}`,
      rowKey,
      sessionId:   body.sessionId  || 'unknown',
      group:       body.group,
      surveyType:  body.surveyType,
      timestamp:   body.timestamp  || new Date().toISOString(),
      responses:   JSON.stringify(body.responses),
    });

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    context.log.error('Failed to write to Azure Table Storage:', err.message);
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Storage error' }),
    };
  }
};
