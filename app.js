/* ─────────────────────────────────────────────────────────────
   AI Content Experiment — app.js
   ─────────────────────────────────────────────────────────────
   SETUP INSTRUCTIONS:
   Replace every PLACEHOLDER_* value below with real embed URLs.

   Videos  : Use the "embed" URL from your video host (Vimeo, YouTube, etc.)
   PDFs    : Use a direct URL to the PDF file (SharePoint, OneDrive, etc.)
   Surveys : Use the Microsoft Forms embed URL (Share → Embed → iframe src)
   ───────────────────────────────────────────────────────────── */

// ── Asset embed URLs ──────────────────────────────────────────
const ASSETS = {
  ilv: {
    ai:     '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183532584?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Test Your AI Literacy [G3]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    hybrid: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183531546?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Test Your AI Literacy [G1]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    human:  '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183531568?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Test Your AI Literacy [G2]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  anim: {
    ai:     '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183538010?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Benefits of Breakout Rooms [G1]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    hybrid: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183922738?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Benefits of Breakout Rooms [G2]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    human:  '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183538561?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Benefits of Breakout Rooms [G3]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  pdf: {
    ai:     'assets/Outlook Search Folders — Use Case - G2.pdf',
    hybrid: 'assets/Outlook Search Folders — Use Case - G3.pdf',
    human:  'assets/Outlook Search Folders — Use Case - G1.pdf',
  },
};

// ── Debrief video embed ───────────────────────────────────────
const DEBRIEF_VIDEO = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1183902285?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Content Experiment | Debrief Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

// ── Survey embed URLs ─────────────────────────────────────────
// Each group has its own per-content-type surveys to capture group membership.
// The final survey is shared across all groups.
const SURVEYS = {
  a: {
    ilv:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUN05ZUzBURjlKTEtDWkswTUFUNDdVSFhIOS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    anim:  '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUQVE3QUFBS05LRjhOM0hQTUVEVDJGRkpQRi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    pdf:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUOVY5NDBGTDhFRDZTRk5OWTlSTTVYWTgwSy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
  },
  b: {
    ilv:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUMkdIQkZZSTRUQUxPTDJTTEM0UDcwRE5GSi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    anim:  '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUQzZNWFc4RVdHSjNBREU3VU1FMUVMTUswSi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    pdf:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUM1VJV0JLWkNSMVRIUVZITlJGQTRGNFlROS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
  },
  c: {
    ilv:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUN0tGVjNMQVpFRzU1S1U2REEyRE5JV1VJUi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    anim:  '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUNkQ3UjNJWFBLOVJGQUcyM1FZNlJTM0Y1Ny4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
    pdf:   '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUQVhPQkJYTldTTkdZNk1EWDA1WlhDMEk0RS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
  },
  final: '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YqITMMW6kUOrNdQ89SrZBFL7UduEpq5AgK1S-NIQx6tUMzQ0NVBHMFBaNzRKMFRNOU5JSTJPQzdIMy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>',
};

// ── Group definitions (Latin square) ─────────────────────────
// Each group sees each production method (ai/hybrid/human) exactly once,
// distributed across the three content types (ilv, anim, pdf).
const GROUPS = [
  // Group A
  // Group A: Hybrid ILV → Human PDF → AI Animated
  [
    { type: 'asset', assetType: 'video', src: () => ASSETS.ilv.hybrid,  title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', src: () => SURVEYS.a.ilv,                          title: 'Instructor-led Video Survey' },
    { type: 'asset', assetType: 'pdf',   src: () => ASSETS.pdf.human,    title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', src: () => SURVEYS.a.pdf,                          title: 'Guide Survey' },
    { type: 'asset', assetType: 'video', src: () => ASSETS.anim.ai,      title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', src: () => SURVEYS.a.anim,                         title: 'Animation Survey' },
    { type: 'survey', src: () => SURVEYS.final,                          title: 'Final Survey',    isFinal: true },
  ],
  // Group B: Human ILV → AI PDF → Hybrid Animated
  [
    { type: 'asset', assetType: 'video', src: () => ASSETS.ilv.human,   title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', src: () => SURVEYS.b.ilv,                          title: 'Instructor-led Video Survey' },
    { type: 'asset', assetType: 'pdf',   src: () => ASSETS.pdf.ai,       title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', src: () => SURVEYS.b.pdf,                          title: 'Guide Survey' },
    { type: 'asset', assetType: 'video', src: () => ASSETS.anim.hybrid,  title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', src: () => SURVEYS.b.anim,                         title: 'Animation Survey' },
    { type: 'survey', src: () => SURVEYS.final,                          title: 'Final Survey',    isFinal: true },
  ],
  // Group C: AI ILV → Hybrid PDF → Human Animated
  [
    { type: 'asset', assetType: 'video', src: () => ASSETS.ilv.ai,      title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', src: () => SURVEYS.c.ilv,                          title: 'Instructor-led Video Survey' },
    { type: 'asset', assetType: 'pdf',   src: () => ASSETS.pdf.hybrid,   title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', src: () => SURVEYS.c.pdf,                          title: 'Guide Survey' },
    { type: 'asset', assetType: 'video', src: () => ASSETS.anim.human,   title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', src: () => SURVEYS.c.anim,                         title: 'Animation Survey' },
    { type: 'survey', src: () => SURVEYS.final,                          title: 'Final Survey',    isFinal: true },
  ],
];

// ── Debrief reveal data (keyed by group index then content type) ──
// Used on the debrief screen to reveal which method each asset used.
const DEBRIEF = [
  // Group A: Hybrid ILV, Human PDF, AI Animated
  {
    ilv:  { method: 'hybrid', badge: 'badge-hybrid', label: 'AI + Human (Hybrid)' },
    pdf:  { method: 'human',  badge: 'badge-human',  label: 'Fully Human-Created' },
    anim: { method: 'ai',     badge: 'badge-ai',     label: 'Fully AI-Generated' },
  },
  // Group B: Human ILV, AI PDF, Hybrid Animated
  {
    ilv:  { method: 'human',  badge: 'badge-human',  label: 'Fully Human-Created' },
    pdf:  { method: 'ai',     badge: 'badge-ai',     label: 'Fully AI-Generated' },
    anim: { method: 'hybrid', badge: 'badge-hybrid', label: 'AI + Human (Hybrid)' },
  },
  // Group C: AI ILV, Hybrid PDF, Human Animated
  {
    ilv:  { method: 'ai',     badge: 'badge-ai',     label: 'Fully AI-Generated' },
    pdf:  { method: 'hybrid', badge: 'badge-hybrid', label: 'AI + Human (Hybrid)' },
    anim: { method: 'human',  badge: 'badge-human',  label: 'Fully Human-Created' },
  },
];

// ── State ──────────────────────────────────────────────────────
let currentStep = 0;  // 0 = welcome, 1–7 = content steps, 8 = debrief, 9 = thank you
let groupIndex  = 0;

const TOTAL_CONTENT_STEPS = 7; // indices 1–7 in the full sequence
const DEBRIEF_STEP        = 8;
const THANKYOU_STEP       = 9;
const TOTAL_STEPS         = 10;

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Assign or restore group
  const stored = sessionStorage.getItem('experimentGroup');
  if (stored !== null) {
    groupIndex = parseInt(stored, 10);
  } else {
    groupIndex = Math.floor(Math.random() * 3);
    sessionStorage.setItem('experimentGroup', groupIndex);
  }

  renderStep(0);
});

// ── Navigation ─────────────────────────────────────────────────
function advance() {
  if (currentStep >= TOTAL_STEPS - 1) return;
  currentStep++;
  renderStep(currentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  if (currentStep <= 0 || currentStep >= DEBRIEF_STEP) return;
  currentStep--;
  renderStep(currentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Render dispatcher ──────────────────────────────────────────
function renderStep(step) {
  const main = document.getElementById('screen-area');
  const navRow = document.getElementById('nav-row');

  // Determine which screen type to show
  if (step === 0) {
    renderWelcome(main);
  } else if (step >= 1 && step <= TOTAL_CONTENT_STEPS) {
    const stepData = GROUPS[groupIndex][step - 1];
    if (stepData.type === 'asset') renderAsset(main, stepData);
    else renderSurvey(main, stepData);
  } else if (step === DEBRIEF_STEP) {
    renderDebrief(main);
  } else if (step === THANKYOU_STEP) {
    renderThankyou(main);
  }

  // Update navigation buttons
  updateNav(navRow, step);

  // Update progress
  updateProgress(step);
}

// ── Progress bar ───────────────────────────────────────────────
function updateProgress(step) {
  const bar   = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');

  if (step === 0) {
    bar.style.width = '0%';
    label.textContent = '';
    return;
  }

  const pct = Math.round((step / (TOTAL_STEPS - 1)) * 100);
  bar.style.width = pct + '%';

  if (step >= DEBRIEF_STEP) {
    label.textContent = '';
  } else {
    label.textContent = `Step ${step} of ${TOTAL_CONTENT_STEPS}`;
  }
}

// ── Nav button state ───────────────────────────────────────────
function updateNav(navRow, step) {
  const backBtn    = navRow.querySelector('.btn-back');
  const continueBtn = navRow.querySelector('.btn-continue');

  // Welcome: no back, show start
  // Content steps: show back + continue
  // Debrief & Thankyou: no back, show continue (thankyou hides continue)

  if (step === 0) {
    backBtn.classList.remove('visible');
    continueBtn.style.display = '';
    continueBtn.textContent = 'Begin';
    continueBtn.disabled = true;
  } else if (step >= 1 && step < DEBRIEF_STEP) {
    continueBtn.disabled = false;
    backBtn.classList.add('visible');
    continueBtn.style.display = '';
    continueBtn.textContent = step === TOTAL_CONTENT_STEPS ? 'See Results' : 'Continue';
  } else if (step === DEBRIEF_STEP) {
    backBtn.classList.remove('visible');
    continueBtn.style.display = '';
    continueBtn.disabled = false;
    continueBtn.textContent = 'Finish';
  } else {
    backBtn.classList.remove('visible');
    continueBtn.style.display = 'none';
  }
}

// ── Screen renderers ───────────────────────────────────────────

function renderWelcome(container) {
  container.innerHTML = `
    <div class="screen active">
      <div class="welcome-hero card">
        <h1>Content Experience Study</h1>
        <p>
          Thank you for participating. You'll be shown a short series of learning materials
          followed by a brief survey after each one. The whole experience takes about
          15–20 minutes.
        </p>
        <p style="color:rgba(246,244,237,.75); margin-top: 0;">
          Your participation is completely voluntary — you can stop at any time.
        </p>
        <p style="color:rgba(246,244,237,.75); margin-top: 0; font-size:13px; font-style:italic;">
          No personal information will be collected or stored. The only data collected will be
          your anonymous responses to the questions in this study, used for internal research
          purposes only.
        </p>
      </div>
      <div class="card" style="display:flex; flex-direction:column; align-items:center; gap:20px; padding: 32px;">
        <label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:15px; color:#333;">
          <input type="checkbox" id="consent-checkbox" style="width:18px; height:18px; cursor:pointer; accent-color:var(--alpine);">
          Got it, let's go!
        </label>
      </div>
    </div>`;

  document.getElementById('consent-checkbox').addEventListener('change', function() {
    document.querySelector('.btn-continue').disabled = !this.checked;
  });
}

function renderAsset(container, stepData) {
  const isVideo = stepData.assetType === 'video';
  const src = stepData.src();
  const isPlaceholder = src.startsWith('PLACEHOLDER');

  const isRawEmbed = src.trimStart().startsWith('<');

  const embedContent = isPlaceholder
    ? `<div class="embed-placeholder">
         ${placeholderIcon()}
         <span>${isVideo ? 'Video embed' : 'PDF embed'} — URL not yet configured</span>
       </div>`
    : isRawEmbed
      ? src
      : (isVideo
          ? `<iframe src="${escAttr(src)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${escAttr(stepData.title)}"></iframe>`
          : `<iframe src="${escAttr(src)}" title="${escAttr(stepData.title)}"></iframe>`);

  container.innerHTML = `
    <div class="screen active">
      <div class="card">
        <div class="card-label">${escHtml(stepData.label || stepData.title)}</div>
        <h3>${escHtml(stepData.title)}</h3>
        <p style="margin-top:8px; color:#555;">
          ${isVideo
            ? 'Please watch the video below in its entirety before continuing.'
            : 'Please review the document below before continuing. Use the scroll bar inside to read through it.'}
        </p>
      </div>
      <div class="embed-wrap ${isVideo ? 'video' : 'pdf'}">
        ${embedContent}
        ${isVideo ? '<div class="vimeo-logo-block"></div>' : ''}
      </div>
    </div>`;
}

function renderSurvey(container, stepData) {
  const src = stepData.src();
  const isPlaceholder = src.startsWith('PLACEHOLDER');

  const isRawEmbed = src.trimStart().startsWith('<');

  const embedContent = isPlaceholder
    ? `<div class="embed-placeholder">
         ${formIcon()}
         <span>Survey embed — URL not yet configured</span>
       </div>`
    : isRawEmbed
      ? src
      : `<iframe src="${escAttr(src)}" title="${escAttr(stepData.title)}" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>`;

  container.innerHTML = `
    <div class="screen screen--survey active">
      <div class="card">
        <div class="card-label">${stepData.isFinal ? 'Final Survey' : 'Quick Survey'}</div>
        <p style="margin-top:8px; color:#555;">
          ${stepData.isFinal
            ? 'Please complete this final survey about your overall experience before we reveal the study details.'
            : 'Please take a moment to share your thoughts on what you just reviewed. Complete all questions before continuing.'}
        </p>
      </div>
      <div class="embed-wrap form">
        ${embedContent}
      </div>
    </div>`;
}

function renderDebrief(container) {
  const d = DEBRIEF[groupIndex];

  container.innerHTML = `
    <div class="screen active">
      <div class="card">
        <div class="card-label">Study Debrief</div>
        <h2>Thank You For Participating!</h2>
        <p style="margin-top:12px;">
          This study explored how people perceive content created in different ways.
          Please watch our this video for a brief explanation of our intentions with this study,
          and check out the details below for what you actually saw in each part of the study!
        </p>
      </div>

      <div class="embed-wrap video">
        ${DEBRIEF_VIDEO.startsWith('PLACEHOLDER')
          ? `<div class="embed-placeholder">${placeholderIcon()}<span>Debrief video — URL not yet configured</span></div>`
          : DEBRIEF_VIDEO}
        <div class="vimeo-logo-block"></div>
      </div>


      <div class="card" style="text-align:center;">
        <h3>Here's What You Saw</h3>
      </div>


      <div class="debrief-grid">
        <div class="debrief-item">
          <h4>Explainer Video</h4>
          <p>The explainer video you watched was created using the method below.</p>
          <span class="badge ${d.ilv.badge}">${d.ilv.label}</span>
        </div>
        <div class="debrief-item">
          <h4>Use Case Guide</h4>
          <p>The use case guide you reviewed was created using the method below.</p>
          <span class="badge ${d.pdf.badge}">${d.pdf.label}</span>
        </div>
        <div class="debrief-item">
          <h4>Animated Concept Video</h4>
          <p>The animated conceptual video you watched was created using the method below.</p>
          <span class="badge ${d.anim.badge}">${d.anim.label}</span>
        </div>
      </div>

      <div class="card" style="background: #f8f6f0; border: 1px solid rgba(35,64,59,.1);">
        <p style="font-size:14px; color:#555;">
          Your responses have been recorded. This research helps us understand how AI-assisted
          content creation affects learner experience, trust, and perceived value. We appreciate
          your honest feedback.
        </p>
      </div>
    </div>`;
}

function renderThankyou(container) {
  container.innerHTML = `
    <div class="screen active">
      <div class="thankyou-hero card">
        <h2>All Done!</h2>
        <p>
          Your participation means a lot to us. You may now close this tab.
          If you have any questions about this study, please reach out to the research team.
        </p>
      </div>
    </div>`;
}

// ── Utility: safe HTML escaping ────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

// ── Placeholder icons ──────────────────────────────────────────
function placeholderIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>`;
}

function formIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>`;
}
