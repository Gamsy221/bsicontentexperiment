/* ─────────────────────────────────────────────────────────────
   AI Content Experiment — app.js
   ─────────────────────────────────────────────────────────────
   SETUP INSTRUCTIONS:
   Replace every PLACEHOLDER_* value below with real embed URLs.

   Videos : Use the "embed" URL from your video host (Vimeo, Azure Blob, etc.)
   PDFs   : Use a direct URL to the PDF file

   Survey questions are defined in SURVEY_QUESTIONS below.
   Replace placeholder question text with your actual questions before launch.
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

// ── Survey question definitions ───────────────────────────────
// Question types:
//   'radio'    — Single select pills. Requires: text, options[]
//   'matrix'   — Multiple rows of 5-point scales. Requires: text, rows[], low, high
//   'likert'   — Single 5-point scale. Requires: text, low, high
//   'checkbox' — Multi-select pills. Requires: text, options[]. Optional: showIf {questionId, values[]}
//   'textarea' — Open text. Requires: text. Optional: placeholder, required (default true)
//   'note'     — Static reveal card (not a question). text may be a string or {A,B,C} object for group-specific text.
// Per-question options:
//   groups: ['A','C'] — render only for those groups (omit to show for all)
const SURVEY_QUESTIONS = {

  anim: {
    title: 'Animated Concept Video',
    intro: 'Please fill this out right after viewing the content, while your impressions are fresh. Your honest feedback helps us understand what makes learning content effective and trustworthy — there are no right or wrong answers.',
    questions: [
      {
        id: 'anim_q1',
        type: 'radio',
        text: 'According to the content you just watched, what is the main benefit of assigning participants a specific task in a breakout room?',
        options: [
          'It allows the meeting organizer to monitor all groups at the same time',
          'The messages move to your main inbox',
          'It reduces the number of breakout rooms needed',
          'It helps keep breakout room discussions focused and productive',
        ],
      },
      {
        id: 'anim_trust',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about trust and credibility.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'anim_trust_work',     text: 'I would trust this content for use in my work.' },
          { id: 'anim_trust_accurate', text: 'This content feels accurate and trustworthy.' },
        ],
      },
      {
        id: 'anim_engage',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about engagement and intent.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'anim_engage_continue',   text: 'I would want to continue learning from content like this.' },
          { id: 'anim_engage_recommend',  text: 'I would recommend this content to a colleague.' },
        ],
      },
      {
        id: 'anim_clarity',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about clarity and quality.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'anim_clarity_clear',   text: 'This content is clear and easy to follow.' },
          { id: 'anim_clarity_quality', text: 'The overall quality of this content meets my expectations for workplace learning.' },
        ],
      },
      {
        id: 'anim_q5',
        type: 'radio',
        text: 'Which best describes this content?',
        options: ['Ready to use as-is', 'Usable with minor edits', 'Not usable without major changes'],
      },
      {
        id: 'anim_q6',
        type: 'checkbox',
        text: 'What would need improvement? (Select all that apply)',
        showIf: { questionId: 'anim_q5', values: ['Usable with minor edits', 'Not usable without major changes'] },
        options: [
          'Accuracy or correctness',
          'Clarity of explanation',
          'Structure or organization',
          'Tone or professionalism',
          'Level of detail (too much / too little)',
          'Pacing or timing',
          'Audio or voice quality',
          'Other',
        ],
      },
      {
        id: 'anim_q7',
        type: 'textarea',
        text: 'What most influenced your decision about whether this content was ready to use?',
        required: false,
      },
      {
        id: 'anim_q8',
        type: 'textarea',
        text: 'If you could change one thing about how this content was presented, what would it be?',
        required: false,
      },
    ],
  },

  pdf: {
    title: 'Use Case Guide',
    intro: 'Please fill this out right after viewing the content, while your impressions are fresh. Your honest feedback helps us understand what makes learning content effective and trustworthy — there are no right or wrong answers.',
    questions: [
      {
        id: 'pdf_q1',
        type: 'radio',
        text: 'According to the content you just reviewed, what happens when you delete a search folder in Outlook?',
        options: [
          'All messages inside the folder are permanently deleted',
          'The messages move to your main inbox',
          'The messages are unaffected — only the folder view is removed',
          'The folder is archived but not deleted',
        ],
      },
      {
        id: 'pdf_trust',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about trust and credibility.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'pdf_trust_work',     text: 'I would trust this content for use in my work.' },
          { id: 'pdf_trust_accurate', text: 'This content feels accurate and trustworthy.' },
        ],
      },
      {
        id: 'pdf_engage',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about engagement and intent.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'pdf_engage_continue',  text: 'I would want to continue learning from content like this.' },
          { id: 'pdf_engage_recommend', text: 'I would recommend this content to a colleague.' },
        ],
      },
      {
        id: 'pdf_clarity',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about clarity and quality.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'pdf_clarity_clear',   text: 'This content is clear and easy to follow.' },
          { id: 'pdf_clarity_quality', text: 'The overall quality of this content meets my expectations for workplace learning.' },
        ],
      },
      {
        id: 'pdf_q5',
        type: 'radio',
        text: 'Which best describes this content?',
        options: ['Ready to use as-is', 'Usable with minor edits', 'Not usable without major changes'],
      },
      {
        id: 'pdf_q6',
        type: 'checkbox',
        text: 'What would need improvement? (Select all that apply)',
        showIf: { questionId: 'pdf_q5', values: ['Usable with minor edits', 'Not usable without major changes'] },
        options: [
          'Accuracy or correctness',
          'Clarity of explanation',
          'Structure or organization',
          'Tone or professionalism',
          'Level of detail (too much / too little)',
          'Visual design or readability',
          'Other',
        ],
      },
      {
        id: 'pdf_q7',
        type: 'textarea',
        text: 'What most influenced your decision about whether this content was ready to use?',
        required: false,
      },
      {
        id: 'pdf_q8',
        type: 'textarea',
        text: 'If you could change one thing about how this content was presented, what would it be?',
        required: false,
      },
    ],
  },

  ilv: {
    title: 'Explainer Video',
    intro: 'Please fill this out right after viewing the content, while your impressions are fresh. Your honest feedback helps us understand what makes learning content effective and trustworthy — there are no right or wrong answers.',
    questions: [
      {
        id: 'ilv_q1',
        type: 'radio',
        text: 'According to the content you just watched, why is it important to review new information multiple times over time rather than all at once?',
        options: [
          'It reduces the total amount of time spent learning',
          'It allows you to skip reviewing content you already know',
          'Spreading review sessions over time helps you actually retain the information',
          'Reviewing content multiple times in one session has the same effect',
        ],
      },
      {
        id: 'ilv_trust',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about trust and credibility.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'ilv_trust_work',     text: 'I would trust this content for use in my work.' },
          { id: 'ilv_trust_accurate', text: 'This content feels accurate and trustworthy.' },
        ],
      },
      {
        id: 'ilv_engage',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about engagement and intent.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'ilv_engage_continue',  text: 'I would want to continue learning from content like this.' },
          { id: 'ilv_engage_recommend', text: 'I would recommend this content to a colleague.' },
        ],
      },
      {
        id: 'ilv_clarity',
        type: 'matrix',
        text: 'Please indicate your agreement with the following statements about clarity and quality.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'ilv_clarity_clear',   text: 'This content is clear and easy to follow.' },
          { id: 'ilv_clarity_quality', text: 'The overall quality of this content meets my expectations for workplace learning.' },
        ],
      },
      {
        id: 'ilv_q5',
        type: 'radio',
        text: 'Which best describes this content?',
        options: ['Ready to use as-is', 'Usable with minor edits', 'Not usable without major changes'],
      },
      {
        id: 'ilv_q6',
        type: 'checkbox',
        text: 'What would need improvement? (Select all that apply)',
        showIf: { questionId: 'ilv_q5', values: ['Usable with minor edits', 'Not usable without major changes'] },
        options: [
          'Accuracy or correctness',
          'Clarity of explanation',
          'Structure or organization',
          'Tone or professionalism',
          'Level of detail (too much / too little)',
          'Pacing or timing',
          'Audio or voice quality',
          'Presenter presence or realism',
          'Other',
        ],
      },
      {
        id: 'ilv_q7',
        type: 'textarea',
        text: 'What most influenced your decision about whether this content was ready to use?',
        required: false,
      },
      {
        id: 'ilv_q8',
        type: 'textarea',
        text: 'If you could change one thing about how this content was presented, what would it be?',
        required: false,
      },
      {
        id: 'ilv_q9',
        type: 'radio',
        text: 'What do you think best describes the presenter you just watched?',
        options: ['A human presenter', 'An AI-generated presenter', 'Not sure'],
      },
      // Reveal note — text varies by group (A/C = AI presenter, B = human presenter)
      {
        id: 'ilv_reveal',
        gated: true,
        type: 'note',
        text: {
          A: 'The presenter in this video was generated using AI.',
          B: 'The presenter in this video was a real person.',
          C: 'The presenter in this video was generated using AI.',
        },
      },
      {
        id: 'ilv_q10',
        gated: true,
        type: 'likert',
        text: 'I would still trust this content for use in my work.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
      },
      {
        id: 'ilv_q11',
        gated: true,
        type: 'likert',
        text: 'This content still feels accurate and trustworthy.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
      },
      {
        id: 'ilv_q12',
        gated: true,
        type: 'textarea',
        text: 'How, if at all, does knowing the presenter was AI-generated change your impression of the content?',
        required: false,
        groups: ['A', 'C'], // only shown for groups that saw an AI-generated presenter
      },
    ],
  },

  final: {
    title: 'Wrap Up Survey',
    intro: 'Thank you for making it this far! A few final questions about you and your experience with workplace learning content.',
    questions: [
      {
        id: 'final_q1',
        type: 'radio',
        text: 'Which best describes your role on the BrainStorm platform?',
        options: [
          'Admin — I manage and set up learning content for my organization',
          'Learner — I use the platform to complete training and learning content',
          'Other',
        ],
      },
      {
        id: 'final_q2',
        type: 'radio',
        text: 'How frequently do you engage with workplace learning content?',
        options: ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Never'],
      },
      {
        id: 'final_q3',
        type: 'radio',
        text: 'How familiar are you with AI-generated content (text, voice, or video)?',
        options: ['Extremely familiar', 'Very familiar', 'Somewhat familiar', 'Slightly familiar', 'Not familiar at all'],
      },
      {
        id: 'final_attitude',
        type: 'matrix',
        text: 'Please indicate your level of agreement with the following statements.',
        low: 'Strongly Disagree',
        high: 'Strongly Agree',
        rows: [
          { id: 'final_attitude_comfort',  text: "I would be comfortable if my company's training content used AI-generated presenters." },
          { id: 'final_attitude_disclose', text: 'I would prefer that companies disclose when content features AI-generated presenters.' },
        ],
      },
    ],
  },
};

// ── Group definitions (Latin square) ─────────────────────────
// Each group sees each production method (ai/hybrid/human) exactly once,
// distributed across the three content types (ilv, anim, pdf).
const GROUPS = [
  // Group A: AI Animated → Human PDF → Hybrid ILV
  [
    { type: 'asset',  assetType: 'video', src: () => ASSETS.anim.ai,      title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', surveyType: 'anim',                                 title: 'Animation Survey' },
    { type: 'asset',  assetType: 'pdf',   src: () => ASSETS.pdf.human,    title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', surveyType: 'pdf',                                  title: 'Guide Survey' },
    { type: 'asset',  assetType: 'video', src: () => ASSETS.ilv.hybrid,  title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', surveyType: 'ilv',                                  title: 'Instructor-led Video Survey' },
    { type: 'survey', surveyType: 'final',                                title: 'Final Survey', isFinal: true },
  ],
  // Group B: Hybrid Animated → AI PDF → Human ILV
  [
    { type: 'asset',  assetType: 'video', src: () => ASSETS.anim.hybrid,  title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', surveyType: 'anim',                                 title: 'Animation Survey' },
    { type: 'asset',  assetType: 'pdf',   src: () => ASSETS.pdf.ai,       title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', surveyType: 'pdf',                                  title: 'Guide Survey' },
    { type: 'asset',  assetType: 'video', src: () => ASSETS.ilv.human,   title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', surveyType: 'ilv',                                  title: 'Instructor-led Video Survey' },
    { type: 'survey', surveyType: 'final',                                title: 'Final Survey', isFinal: true },
  ],
  // Group C: Human Animated → Hybrid PDF → AI ILV
  [
    { type: 'asset',  assetType: 'video', src: () => ASSETS.anim.human,   title: 'Animated Conceptual Video', label: 'Animated' },
    { type: 'survey', surveyType: 'anim',                                 title: 'Animation Survey' },
    { type: 'asset',  assetType: 'pdf',   src: () => ASSETS.pdf.hybrid,   title: 'Use Case Guide',            label: 'Guide' },
    { type: 'survey', surveyType: 'pdf',                                  title: 'Guide Survey' },
    { type: 'asset',  assetType: 'video', src: () => ASSETS.ilv.ai,      title: 'Instructor-led Video',      label: 'Explainer' },
    { type: 'survey', surveyType: 'ilv',                                  title: 'Instructor-led Video Survey' },
    { type: 'survey', surveyType: 'final',                                title: 'Final Survey', isFinal: true },
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

const PROCESS_SUMMARIES = {
  ilv: {
    ai: [
      'Started with basic content notes outlining the key learning points.',
      'Content notes were automatically fed to an AI agent to convert to a script.',
      'The script and a single presenter image were then used with AI to generate the finished video.'
    ],
    hybrid: [
      'A writer developed and refined the script first.',
      'That approved script and an image were then used with AI to generate the video.',
      'A small manual timing adjustment was made before export.'
    ],
    human: [
      'A human writer drafted the script and refined it through editing.',
      'The presenter was recorded in a studio setting.',
      'The footage was then edited and finished by hand for the final video.'
    ]
  },
  pdf: {
    ai: [
      'A prompt and custom Skill were used with AI to generate the guide.',
      'Supporting visuals were then inserted to replace placeholders.',
      'AI was used to check accessibility for e-readers, then exported.'
    ],
    hybrid: [
      'A prompt and custom Skill were used with AI to generate the guide.',
      'Supporting visuals were then inserted to replace placeholders.',
      'A human editor revised the content before it was exported.'
    ],
    human: [
      'The guide was outlined and written manually around the target use case.',
      'The pages were built by hand in a presentation-style document.',
      'The content was then edited and proofed manually before export.'
    ]
  },
  anim: {
    ai: [
      'A prompt and custom Skill were used with AI to generate the script and storyboard for the concept.',
      'That storyboard and additional custom Skills were then turned into a first-pass animated video with AI.',
      'The draft was then refined through additional revision passes using AI and exported.'
    ],
    hybrid: [
      'The dialogue was written by a human writer.',
      'An initial storyboard was generated with AI and then manually revised to better match the intended vision.',
      'The animation was built using the revised storyboard and custom Skills in AI and then polished through a mix of AI assisted and manual timing and visual adjustments.'
    ],
    human: [
      'A human wrote and edited the script and on-screen visual storyboard.',
      'The visual motion design and animation were interpreted and created by hand by a professional video editor.'
    ]
  }
};

// ── State ──────────────────────────────────────────────────────
let currentStep = 0;  // 0 = welcome, 1–7 = content steps, 8 = debrief, 9 = thank you
let groupIndex  = 0;
let sessionId   = '';

const TOTAL_CONTENT_STEPS = 7; // indices 1–7 in the full sequence
const DEBRIEF_STEP        = 8;
const THANKYOU_STEP       = 9;
const TOTAL_STEPS         = 10;

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Assign or restore anonymous session ID
  sessionId = sessionStorage.getItem('sessionId') || '';
  if (!sessionId) {
    sessionId = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : Date.now().toString(36) + Math.random().toString(36).slice(2);
    sessionStorage.setItem('sessionId', sessionId);
  }

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

  updateNav(navRow, step);
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
  const backBtn     = navRow.querySelector('.btn-back');
  const continueBtn = navRow.querySelector('.btn-continue');

  if (step === 0) {
    backBtn.classList.remove('visible');
    continueBtn.style.display = '';
    continueBtn.textContent = 'Begin';
    continueBtn.disabled = true;
  } else if (step >= 1 && step < DEBRIEF_STEP) {
    const stepData   = GROUPS[groupIndex][step - 1];
    const isSurvey   = stepData.type === 'survey';
    const surveyDone = isSurvey && sessionStorage.getItem(`survey_done_${step}`) === '1';

    backBtn.classList.add('visible');
    continueBtn.style.display = '';
    continueBtn.disabled = isSurvey && !surveyDone;
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
          5–10 minutes.
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
  const surveyDef = SURVEY_QUESTIONS[stepData.surveyType];
  const alreadyDone = sessionStorage.getItem(`survey_done_${currentStep}`) === '1';

  if (alreadyDone) {
    container.innerHTML = `
      <div class="screen screen--survey active">
        <div class="card survey-confirmed-card">
          ${checkIcon()}
          <h3>Response Recorded</h3>
          <p>Your response for this section has already been recorded. Click <strong>Continue</strong> to proceed.</p>
        </div>
      </div>`;
    return;
  }

  const group = ['A', 'B', 'C'][groupIndex];
  const preQuestions   = surveyDef.questions.filter(q => !q.gated);
  const gatedQuestions = surveyDef.questions.filter(q =>  q.gated);
  const preHtml   = preQuestions.map(q => renderQuestion(q, group)).join('');
  const gatedHtml = gatedQuestions.length
    ? `<div class="survey-gated-section" id="survey-gated">${gatedQuestions.map(q => renderQuestion(q, group)).join('')}</div>`
    : '';
  const questionsHtml = preHtml + gatedHtml;

  container.innerHTML = `
    <div class="screen screen--survey active">
      <div class="card">
        <div class="card-label">${stepData.isFinal ? 'Final Survey' : 'Quick Survey'}</div>
        <h3>${escHtml(surveyDef.title)}</h3>
        <p style="margin-top:8px; color:#555;">${escHtml(surveyDef.intro)}</p>
      </div>
      <form class="card survey-form" id="survey-form" novalidate>
        ${questionsHtml}
        <div class="survey-submit-row">
          <button type="submit" class="btn btn-primary survey-submit-btn" disabled>Submit Survey</button>
          <span class="survey-submit-note">Answer all questions above to submit.</span>
        </div>
      </form>
    </div>`;

  initFormValidation(currentStep, stepData.surveyType, surveyDef.questions, group);
}

function renderQuestion(q, group) {
  // Skip questions restricted to other groups
  if (q.groups && !q.groups.includes(group)) return '';

  if (q.type === 'note') {
    const text = typeof q.text === 'object' ? q.text[group] : q.text;
    return `
      <div class="survey-note-card" data-qid="${escAttr(q.id)}">
        <p class="survey-note-text">${escHtml(text)}</p>
      </div>`;
  }

  if (q.type === 'likert') {
    const options = [1, 2, 3, 4, 5].map(n => `
      <label class="likert-option">
        <input type="radio" name="${escAttr(q.id)}" value="${n}">
        <span class="likert-btn">${n}</span>
      </label>`).join('');

    return `
      <div class="survey-question" data-qid="${escAttr(q.id)}">
        <p class="question-text">${escHtml(q.text)}<span class="required-mark">*</span></p>
        <div class="likert-row">
          <span class="likert-label">${escHtml(q.low)}</span>
          <div class="likert-options">${options}</div>
          <span class="likert-label likert-label--high">${escHtml(q.high)}</span>
        </div>
      </div>`;
  }

  if (q.type === 'matrix') {
    const rows = q.rows.map(row => `
      <div class="matrix-row">
        <p class="matrix-row-text">${escHtml(row.text)}</p>
        <div class="matrix-row-scale">
          ${[1,2,3,4,5].map(n => `
          <label class="matrix-cell">
            <input type="radio" name="${escAttr(row.id)}" value="${n}">
            <span class="matrix-btn">${n}</span>
          </label>`).join('')}
        </div>
      </div>`).join('');

    return `
      <div class="survey-question matrix-question" data-qid="${escAttr(q.id)}">
        <p class="question-text">${escHtml(q.text)}<span class="required-mark">*</span></p>
        <div class="matrix-wrap">
          ${rows}
          <div class="matrix-footer">
            <div class="matrix-footer-spacer"></div>
            <div class="matrix-footer-labels">
              <span class="matrix-extreme">${escHtml(q.low)}</span>
              <span class="matrix-extreme matrix-extreme--high">${escHtml(q.high)}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  if (q.type === 'radio') {
    const options = q.options.map(opt => `
      <label class="radio-option">
        <input type="radio" name="${escAttr(q.id)}" value="${escAttr(opt)}">
        <span>${escHtml(opt)}</span>
      </label>`).join('');

    return `
      <div class="survey-question" data-qid="${escAttr(q.id)}">
        <p class="question-text">${escHtml(q.text)}<span class="required-mark">*</span></p>
        <div class="radio-group">${options}</div>
      </div>`;
  }

  if (q.type === 'checkbox') {
    const hidden = q.showIf ? 'style="display:none"' : '';
    const showIfAttr = q.showIf
      ? `data-show-if="${escAttr(q.showIf.questionId)}" data-show-values="${escAttr(q.showIf.values.join('|'))}"`
      : '';
    const options = q.options.map(opt => {
      const label = `
      <label class="checkbox-option">
        <input type="checkbox" name="${escAttr(q.id)}" value="${escAttr(opt)}">
        <span>${escHtml(opt)}</span>
      </label>`;
      if (opt !== 'Other') return label;
      return `
      <div class="checkbox-other-wrap">${label}
        <input type="text" name="${escAttr(q.id)}_other" class="other-text-input" placeholder="Please specify…" style="display:none">
      </div>`;
    }).join('');

    return `
      <div class="survey-question" data-qid="${escAttr(q.id)}" ${showIfAttr} ${hidden}>
        <p class="question-text">${escHtml(q.text)}</p>
        <span class="multi-hint-badge">Select all that apply</span>
        <div class="checkbox-group">${options}</div>
      </div>`;
  }

  if (q.type === 'textarea') {
    return `
      <div class="survey-question" data-qid="${escAttr(q.id)}">
        <p class="question-text">${escHtml(q.text)}</p>
        <textarea name="${escAttr(q.id)}" rows="4"
          placeholder="${escAttr(q.placeholder || '')}"
          class="survey-textarea"></textarea>
      </div>`;
  }

  return '';
}

function initFormValidation(step, surveyType, questions, group) {
  const form = document.getElementById('survey-form');
  if (!form) return;

  const submitBtn  = form.querySelector('.survey-submit-btn');
  const submitNote = form.querySelector('.survey-submit-note');

  // Split required IDs into pre-gate and post-gate buckets
  const preGateIds  = [];
  const postGateIds = [];
  for (const q of questions) {
    if (q.groups && !q.groups.includes(group)) continue;
    if (q.type === 'note' || q.type === 'checkbox' || q.type === 'textarea') continue;
    const bucket = q.gated ? postGateIds : preGateIds;
    if (q.type === 'matrix') {
      q.rows.forEach(row => bucket.push(row.id));
    } else {
      bucket.push(q.id);
    }
  }
  const requiredIds = [...preGateIds, ...postGateIds];

  // Wire up showIf conditional questions (checkboxes with showIf)
  const conditionalQuestions = questions.filter(q => q.type === 'checkbox' && q.showIf);
  conditionalQuestions.forEach(q => {
    const triggerEl = form.querySelector(`[name="${q.showIf.questionId}"]`);
    if (!triggerEl) return;
    const triggerGroup = triggerEl.closest('.survey-question');
    if (!triggerGroup) return;

    triggerGroup.addEventListener('change', () => {
      const selected = form.querySelector(`[name="${q.showIf.questionId}"]:checked`);
      const show = selected && q.showIf.values.includes(selected.value);
      const conditionalEl = form.querySelector(`[data-qid="${q.id}"]`);
      if (conditionalEl) conditionalEl.style.display = show ? '' : 'none';
      onFormChange();
    });
  });

  // Show/hide "Other" free-text input when its checkbox is toggled
  form.querySelectorAll('input[type="checkbox"][value="Other"]').forEach(cb => {
    const wrap = cb.closest('.checkbox-other-wrap');
    if (!wrap) return;
    const textInput = wrap.querySelector('.other-text-input');
    if (!textInput) return;
    cb.addEventListener('change', () => {
      textInput.style.display = cb.checked ? '' : 'none';
      if (!cb.checked) textInput.value = '';
    });
  });

  function checkGate() {
    const gatedSection = form.querySelector('#survey-gated');
    if (!gatedSection || gatedSection.classList.contains('survey-gated-section--open')) return;
    const preOk = preGateIds.every(id => form.querySelector(`[name="${id}"]:checked`) !== null);
    if (preOk) {
      gatedSection.classList.add('survey-gated-section--open');
      // Lock all pre-gate inputs so earlier answers can't be changed after reveal
      form.querySelectorAll('.survey-question input, .survey-question textarea').forEach(el => {
        if (!el.closest('#survey-gated')) {
          el.disabled = true;
          el.closest('.survey-question')?.classList.add('survey-question--locked');
        }
      });
      setTimeout(() => gatedSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
  }

  function checkComplete() {
    // All required radio/likert/matrix rows answered
    const baseOk = requiredIds.every(id =>
      form.querySelector(`[name="${id}"]:checked`) !== null
    );

    // Visible conditional checkboxes must have at least one selection
    const condOk = conditionalQuestions.every(q => {
      const el = form.querySelector(`[data-qid="${q.id}"]`);
      if (!el || el.style.display === 'none') return true;
      return form.querySelector(`[name="${q.id}"]:checked`) !== null;
    });

    submitBtn.disabled = !(baseOk && condOk);
    submitNote.style.display = (baseOk && condOk) ? 'none' : '';
  }

  function onFormChange() {
    checkGate();
    checkComplete();
  }

  form.addEventListener('change', onFormChange);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    // Collect responses — checkboxes gathered as arrays
    const responses = {};
    new FormData(form).forEach((value, key) => {
      if (key in responses) {
        responses[key] = [].concat(responses[key], value);
      } else {
        responses[key] = value;
      }
    });

    await submitSurvey(surveyType, responses);

    sessionStorage.setItem(`survey_done_${step}`, '1');

    document.getElementById('screen-area').innerHTML = `
      <div class="screen screen--survey active">
        <div class="card survey-confirmed-card">
          ${checkIcon()}
          <h3>Response Recorded</h3>
          <p>Thank you! Your response has been saved. Click <strong>Continue</strong> to proceed.</p>
        </div>
      </div>`;

    updateNav(document.getElementById('nav-row'), currentStep);
  });
}

async function submitSurvey(surveyType, responses) {
  const group = ['A', 'B', 'C'][groupIndex];
  try {
    const res = await fetch('/api/submit-survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        group,
        surveyType,
        responses,
        timestamp: new Date().toISOString(),
      }),
    });
    return res.ok;
  } catch (err) {
    // Don't block the user if the API is unreachable (e.g. local dev without Azure)
    console.warn('Survey submission failed — response not stored.', err);
    return false;
  }
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
          <h4>Animated Concept Video</h4>
          <p>The animated conceptual video you watched was created using the method below.</p>
          <span class="badge ${d.anim.badge}">${d.anim.label}</span>
          ${renderProcessDisclosure('anim', d.anim.method)}
        </div>
        <div class="debrief-item">
          <h4>Use Case Guide</h4>
          <p>The use case guide you reviewed was created using the method below.</p>
          <span class="badge ${d.pdf.badge}">${d.pdf.label}</span>
          ${renderProcessDisclosure('pdf', d.pdf.method)}
        </div>
        <div class="debrief-item">
          <h4>Explainer Video</h4>
          <p>The explainer video you watched was created using the method below.</p>
          <span class="badge ${d.ilv.badge}">${d.ilv.label}</span>
          ${renderProcessDisclosure('ilv', d.ilv.method)}
        </div>
      </div>

      <div class="card debrief-reflection">
        <h3>Why This Matters</h3>
        <p>
          AI-generated content is getting better quickly, but "good enough" is not the same as
          genuinely valuable. For learning experiences especially, we want to understand where
          people feel content is clear, credible, engaging, and worth their time, and where it
          starts to feel thin, generic, or less trustworthy.
        </p>
        <p>
          That line matters because AI can help teams move faster, explore more ideas, and produce
          content at a scale that would otherwise be difficult. But speed only matters if the end
          result still feels useful to the people it is meant to support. Our goal is not simply to
          prove that AI can make content. It is to find the point where AI-created or AI-assisted
          content still delivers real value to the learner.
        </p>
        <p>
          Your feedback helps us see that more clearly. By reacting to different formats without
          being told how they were made upfront, you helped us compare perceived quality against the
          production method behind the scenes. That gives us a much better picture of where AI is
          already effective, where human craft still makes the biggest difference, and how we should
          design future content experiences more thoughtfully.
        </p>
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

function renderProcessDisclosure(assetType, method) {
  const steps = PROCESS_SUMMARIES[assetType][method];

  return `
    <details class="debrief-details">
      <summary>See production steps used</summary>
      <ul>
        ${steps.map((step) => `<li>${step}</li>`).join('')}
      </ul>
    </details>`;
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

// ── Icons ──────────────────────────────────────────────────────
function placeholderIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>`;
}

function checkIcon() {
  return `<div class="survey-confirmed-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  </div>`;
}
