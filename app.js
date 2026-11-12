'use strict';

/* ==========================================================================
   Your Data, Your Call: prototype
   --------------------------------------------------------------------------
   EDIT THE CONTENT HERE. Everything the site says lives in the objects below:
     SITE      - last-reviewed date shown on the page
     DEMO      - the tappable permission prompt in the hero
     TOPICS    - the three lessons
     ACTIONS   - the steps that can appear in a visitor's starter plan
     GLOSSARY  - the word list
   The code further down turns this content into the page. You shouldn't need
   to change it to update wording.
   ========================================================================== */

const SITE = {
  reviewed: 'November 10, 2026'
};

const DEMO = {
  while: 'The app can see where you are whenever it is open. That is a sensible default for maps and weather, and you can change it later in Settings.',
  once: 'The app gets one look at your location and has to ask again next time. This suits apps you rarely use.',
  deny: 'The app still works for most things, and you can type in a city instead. You can change your mind later in Settings. There is no single right answer: it depends on what the app does and how much you trust it.'
};

const TOPICS = [
  {
    id: 'phone',
    title: 'Data tracking on your phone',
    summary: 'Apps and the phone itself can collect where you go, what you do and what you are interested in.',
    happening: [
      'Many apps collect location, contacts and usage details, sometimes more than they need in order to work.',
      'Your phone has an advertising ID. It is a label advertisers can use to link your activity across different apps.',
      'Collected data can be shared with other companies, including advertising partners and data brokers.'
    ],
    matters: 'Details that seem harmless on their own, like where you spend your nights or which places you visit, can add up to a detailed picture of your life. You rarely see who ends up with it.',
    tradeoff: 'Switching off location or tracking can make some apps less convenient. Maps, weather and delivery apps need location to work. A good middle path is to allow location only while you are using the app.'
  },
  {
    id: 'ai',
    title: 'Privacy with AI tools',
    summary: 'Chatbots and AI features take in what you type, upload or say. What happens next depends on the tool and your settings.',
    happening: [
      'Depending on the provider and your settings, conversations may be stored, reviewed by people, or used to improve the product.',
      'AI features are appearing inside email, documents, browsers and phone assistants, and some are switched on by default.',
      'Policies differ between providers and change over time, so each tool\'s own privacy information is the source to trust.'
    ],
    matters: 'A chat can feel like a private conversation. If you paste in a medical letter, a contract or someone else\'s details, you may be sharing more than you intend, and you may not be able to fully take it back.',
    tradeoff: 'AI tools can be genuinely useful for drafting, learning and organizing. The goal is not to avoid them. It is to choose what you share and to know where the controls are.'
  },
  {
    id: 'social',
    title: 'Tracking on social media',
    summary: 'Platforms learn from what you like, watch and search, and often from what you do on other sites too.',
    happening: [
      'Platforms record what you like, watch, pause on and search for while you use them.',
      'Many also receive information about your activity elsewhere, through tools such as tracking pixels placed on other websites and apps.',
      'This information is used to personalize your feed and your ads, and to build a profile of your interests.'
    ],
    matters: 'Those profiles shape what you see, including ads and recommendations, and they can reveal things you never posted, such as health worries, money troubles or beliefs.',
    tradeoff: 'Less personalization often means less relevant content, and some settings reduce tracking without stopping it. You can also share less by using a platform less, or by logging out when you are done.'
  }
];

/* Each action can appear in a plan.
   topic:    'phone' | 'ai' | 'social'
   platform: 'ios' | 'android' | 'any'
   minutes:  rough time to do it
   priority: lower numbers come first within a topic */
const ACTIONS = [
  // Phone
  {
    id: 'phone-ios-tracking', topic: 'phone', platform: 'ios', minutes: 3, priority: 1,
    title: 'Stop apps from asking to track you across other apps',
    how: 'Open Settings, then Privacy & Security, then Tracking. Turn off "Allow Apps to Request to Track". Apps will no longer be able to ask, and are told you have declined. You can also leave it on and switch off individual apps in the list.',
    why: 'Tracking across apps is how advertisers connect what you do in one app with what you do in another.'
  },
  {
    id: 'phone-android-adid', topic: 'phone', platform: 'android', minutes: 3, priority: 1,
    title: 'Delete your advertising ID',
    how: 'Open Settings and search for "ads". It is often under Privacy. Choose the option to delete your advertising ID, or to opt out of ads personalization. The wording varies by phone brand and Android version.',
    why: 'The advertising ID is a label advertisers use to recognize your phone across apps. Deleting it makes that harder.'
  },
  {
    id: 'phone-location', topic: 'phone', platform: 'any', minutes: 5, priority: 2,
    title: 'Set location to "only while using" (or never) for most apps',
    how: 'Open Settings, then Privacy or Location, and look at the list of apps that can see your location. For anything that is not a map, ride, delivery or weather app, choose "While using the app" or "Never".',
    why: 'An app with "always" access can note where you go even when you are not using it.'
  },
  {
    id: 'phone-precise', topic: 'phone', platform: 'any', minutes: 4, priority: 3,
    title: 'Share approximate location when exact is not needed',
    how: 'In the same location settings, many phones let you turn off "Precise Location" (iPhone) or choose "Approximate" (Android) for an app. Weather and news apps rarely need your exact spot.',
    why: 'An exact location can reveal your home, your workplace and your routines.'
  },
  {
    id: 'phone-permissions', topic: 'phone', platform: 'any', minutes: 7, priority: 4,
    title: 'Check which apps can see your photos, contacts, microphone and camera',
    how: 'In Settings, open Privacy (or Permissions). Look at each category in turn and see which apps have access. Remove access from any app that does not clearly need it.',
    why: 'Apps sometimes ask for more than they need. Fewer permissions means less that can be leaked or shared.'
  },
  {
    id: 'phone-delete', topic: 'phone', platform: 'any', minutes: 5, priority: 5,
    title: 'Remove apps you no longer use',
    how: 'Scroll through your apps and delete the ones you have not opened in months. Deleting an app stops it collecting new data. To ask a company to delete what it already holds, look in the app\'s account settings or on the company\'s privacy page.',
    why: 'Every app you keep is one more company with access to some of your information.'
  },

  // AI
  {
    id: 'ai-rule', topic: 'ai', platform: 'any', minutes: 2, priority: 1,
    title: 'Decide what you will not type into an AI tool',
    how: 'A simple rule: do not enter passwords, ID numbers, bank details, full medical records, or private information about other people. If you are unsure, leave identifying details out or swap them for placeholders like [NAME].',
    why: 'What you type may be stored and, depending on the provider and your settings, may be reviewed or used to improve the service.'
  },
  {
    id: 'ai-controls', topic: 'ai', platform: 'any', minutes: 10, priority: 2,
    title: 'Find the data controls in the AI tools you use',
    how: 'Open each tool\'s Settings or Privacy page. Look for options about chat history, whether your conversations are used to improve the service, and how to delete them. Not every tool offers every option, and the wording varies.',
    why: 'Defaults differ between providers. Knowing what you can change puts you in charge instead of leaving it to the default.'
  },
  {
    id: 'ai-temporary', topic: 'ai', platform: 'any', minutes: 2, priority: 3,
    title: 'Use temporary or private chat modes when they are offered',
    how: 'Some tools have a temporary-chat or incognito-style mode. Read how the provider describes it. It usually limits what is saved or used, but may not erase everything.',
    why: 'It is a good fit for one-off questions you do not want attached to your history.'
  },
  {
    id: 'ai-uploads', topic: 'ai', platform: 'any', minutes: 5, priority: 4,
    title: 'Clean up files before you upload them',
    how: 'Before sharing a document, photo or recording, remove names, addresses, account numbers and anything about other people. Photos can also carry hidden details such as where they were taken.',
    why: 'Uploads often contain more personal information than the part you meant to share.'
  },
  {
    id: 'ai-builtin', topic: 'ai', platform: 'any', minutes: 8, priority: 5,
    title: 'Check the AI features built into your other apps',
    how: 'Look in the settings of your email, documents, browser and phone assistant for AI features. See what each one can read, such as your messages or files, and switch off what you do not want.',
    why: 'AI features inside apps you already use can reach your email, files and calendar, not just what you type into a chat.'
  },

  // Social media
  {
    id: 'social-ads', topic: 'social', platform: 'any', minutes: 8, priority: 1,
    title: 'Turn down ad personalization',
    how: 'In each platform\'s settings, look for "Ads", "Ad preferences" or "Personalization". Switch off options that use data from partners or from other websites and apps, where they are offered.',
    why: 'These settings control how much of your activity is used to target ads. Turning them down limits profiling, but the platform may still collect data.'
  },
  {
    id: 'social-offplatform', topic: 'social', platform: 'any', minutes: 5, priority: 2,
    title: 'Review activity from other sites and apps',
    how: 'Look for a setting with a name like "Off-platform activity" or "Activity from other websites and apps". See what has been linked to you, clear it if you can, and switch off future linking.',
    why: 'Companies can receive information about what you do outside their platform, through tools placed on other websites and apps.'
  },
  {
    id: 'social-audience', topic: 'social', platform: 'any', minutes: 6, priority: 3,
    title: 'Check who can see your posts and find you',
    how: 'In Privacy settings, set posts and profile details to the narrowest audience you are comfortable with. Also review who can look you up by your email address or phone number.',
    why: 'Public details can be copied, searched and combined with other information.'
  },
  {
    id: 'social-connected', topic: 'social', platform: 'any', minutes: 8, priority: 4,
    title: 'Remove connected apps and "Log in with..." links',
    how: 'Look for "Connected apps", "Apps and websites" or "Security" in your account settings. Remove any service you no longer use.',
    why: 'Each connection can keep access to some of your profile information.'
  },
  {
    id: 'social-contacts', topic: 'social', platform: 'any', minutes: 3, priority: 5,
    title: 'Turn off contact syncing',
    how: 'In the app\'s settings, or in your phone\'s permissions for the app, switch off uploading your contacts.',
    why: 'Uploading contacts shares information about people who never agreed to it.'
  },
  {
    id: 'social-browser', topic: 'social', platform: 'any', minutes: 5, priority: 6,
    title: 'Switch on tracking protection in your browser',
    how: 'Open your browser\'s privacy settings and turn on its tracking protection, sometimes called "cross-site tracking" protection. Most major browsers include one.',
    why: 'This makes it harder for websites and ad companies to follow you from page to page.'
  }
];

const GLOSSARY = [
  { term: 'Advertising ID', def: 'A random label your phone gives advertisers so they can recognize your device across apps without using your name.' },
  { term: 'Data broker', def: 'A company that collects personal information from many sources and sells or shares it with others.' },
  { term: 'Permission', def: 'A setting that lets an app use something on your device, such as your location, camera or contacts.' },
  { term: 'Tracking pixel', def: 'A tiny, invisible element on a web page or in an email that tells a company you visited or opened it.' },
  { term: 'Training (AI)', def: 'Using examples of text, images or conversations to teach an AI system. Some providers let you opt out of having your chats used this way.' }
];

/* ==========================================================================
   Plan logic (no page code here, so it can be tested on its own)
   ========================================================================== */

const MAX_STEPS = 6;

function buildPlan(answers, actions) {
  actions = actions || ACTIONS;
  const platforms = new Set(['any'].concat(answers.platforms || []));
  const budget = answers.minutes || 20;

  // One list per chosen topic, filtered to the visitor's devices, best first.
  const lists = (answers.topics || []).map(function (topic) {
    return actions
      .filter(function (a) { return a.topic === topic && platforms.has(a.platform); })
      .sort(function (a, b) { return a.priority - b.priority; });
  });

  // Take one step from each topic in turn, so the plan stays balanced.
  const plan = [];
  let used = 0;
  const longest = Math.max.apply(null, [0].concat(lists.map(function (l) { return l.length; })));
  for (let i = 0; i < longest; i++) {
    for (const list of lists) {
      const next = list[i];
      if (next && plan.length < MAX_STEPS && used + next.minutes <= budget) {
        plan.push(next);
        used += next.minutes;
      }
    }
  }

  // Never return an empty plan if there were matching steps.
  if (plan.length === 0) {
    const all = [].concat.apply([], lists).sort(function (a, b) { return a.minutes - b.minutes; });
    if (all.length) plan.push(all[0]);
  }
  return plan;
}

function totalMinutes(plan) {
  return plan.reduce(function (sum, a) { return sum + a.minutes; }, 0);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { buildPlan: buildPlan, totalMinutes: totalMinutes, ACTIONS: ACTIONS, TOPICS: TOPICS };
}

/* ==========================================================================
   Page code
   ========================================================================== */

if (typeof document !== 'undefined') {
  (function () {
    const STORAGE_KEY = 'your-data-your-call-v1';

    function el(tag, attrs) {
      const node = document.createElement(tag);
      const a = attrs || {};
      Object.keys(a).forEach(function (key) {
        const value = a[key];
        if (value === false || value == null) return;
        if (key === 'class') node.className = value;
        else if (key === 'text') node.textContent = value;
        else if (key.indexOf('on') === 0) node.addEventListener(key.slice(2), value);
        else if (value === true) node.setAttribute(key, '');
        else node.setAttribute(key, value);
      });
      for (let i = 2; i < arguments.length; i++) {
        const kids = [].concat(arguments[i]);
        kids.forEach(function (child) {
          if (child == null || child === false) return;
          node.append(child.nodeType ? child : document.createTextNode(child));
        });
      }
      return node;
    }

    /* Saved progress lives only in this browser. */
    function loadState() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch (e) { return null; }
    }
    function saveState(state) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable: the plan still works this visit */ }
    }
    function clearState() {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* nothing to clear */ }
    }

    /* Hero: the tappable permission prompt */
    function setupDemo() {
      const buttons = document.querySelectorAll('.device-btn');
      const outcome = document.getElementById('demo-outcome');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
          outcome.textContent = DEMO[btn.dataset.choice];
        });
      });
    }

    /* Topic lessons */
    function renderTopics() {
      const list = document.getElementById('topic-list');
      TOPICS.forEach(function (t) {
        const card = el('article', { class: 'lesson', 'data-topic': t.id },
          el('h3', { text: t.title }),
          el('p', { class: 'lesson-summary', text: t.summary }),
          el('details', null,
            el('summary', { text: 'Read the lesson' }),
            el('div', { class: 'lesson-body' },
              el('h4', { text: 'What is happening' }),
              el('ul', null, t.happening.map(function (line) { return el('li', { text: line }); })),
              el('h4', { text: 'Why it matters' }),
              el('p', { text: t.matters }),
              el('h4', { text: 'The trade-off' }),
              el('p', { text: t.tradeoff })
            )
          ),
          el('div', { class: 'lesson-foot' },
            el('a', { class: 'btn btn-quiet btn-small', href: '#plan', onclick: function () { addTopicToQuiz(t.id); } }, 'Add this topic to my plan'),
            el('p', { class: 'reviewed', text: 'Last reviewed ' + SITE.reviewed })
          )
        );
        list.append(card);
      });
    }

    function addTopicToQuiz(topicId) {
      const box = document.querySelector('input[name="topic"][value="' + topicId + '"]');
      if (box) box.checked = true;
    }

    function renderGlossary() {
      const dl = document.getElementById('glossary-list');
      GLOSSARY.forEach(function (g) {
        dl.append(el('div', null, el('dt', { text: g.term }), el('dd', { text: g.def })));
      });
    }

    /* Quiz */
    function readForm(form) {
      const data = new FormData(form);
      return {
        platforms: data.getAll('platform'),
        topics: data.getAll('topic'),
        minutes: Number(data.get('minutes')) || 20
      };
    }

    function fillForm(form, answers) {
      form.querySelectorAll('input[name="platform"]').forEach(function (i) { i.checked = answers.platforms.indexOf(i.value) !== -1; });
      form.querySelectorAll('input[name="topic"]').forEach(function (i) { i.checked = answers.topics.indexOf(i.value) !== -1; });
      form.querySelectorAll('input[name="minutes"]').forEach(function (i) { i.checked = Number(i.value) === answers.minutes; });
    }

    /* Plan */
    function renderPlan(state, focusResult) {
      const box = document.getElementById('plan-result');
      box.replaceChildren();

      const plan = buildPlan(state.answers);
      if (plan.length === 0) {
        box.append(el('p', { class: 'notice', text: 'There are no steps for that combination yet. Try choosing another topic.' }));
        return;
      }

      const done = new Set(state.done || []);
      const progress = el('progress', { max: String(plan.length), value: String(done.size) });
      const progressText = el('span');

      function updateProgress() {
        progress.value = done.size;
        progressText.textContent = done.size + ' of ' + plan.length + ' done';
        document.querySelectorAll('#plan-result .step').forEach(function (li) {
          li.classList.toggle('is-done', done.has(li.dataset.id));
        });
      }

      const steps = el('ol', { class: 'steps' }, plan.map(function (a) {
        const checkbox = el('input', { type: 'checkbox', id: 'step-' + a.id });
        checkbox.checked = done.has(a.id);
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) done.add(a.id); else done.delete(a.id);
          state.done = Array.from(done);
          saveState(state);
          updateProgress();
        });
        return el('li', { class: 'step', 'data-topic': a.topic, 'data-id': a.id },
          el('label', { class: 'step-check', for: 'step-' + a.id },
            checkbox,
            el('span', { class: 'step-title' }, a.title, el('span', { class: 'step-time', text: 'About ' + a.minutes + ' minutes' }))
          ),
          el('details', null,
            el('summary', { text: 'How to do it' }),
            el('p', { text: a.how }),
            el('p', null, el('strong', { text: 'Why it helps: ' }), a.why)
          )
        );
      }));

      const wantsPhone = state.answers.topics.indexOf('phone') !== -1;
      const hasPhoneType = state.answers.platforms.indexOf('ios') !== -1 || state.answers.platforms.indexOf('android') !== -1;
      const hint = wantsPhone && !hasPhoneType
        ? el('p', { class: 'plan-hint', text: 'You did not pick a phone type, so the steps for iPhone and Android are left out. Choose one above and make your plan again to add them.' })
        : null;

      box.append(
        el('div', { class: 'plan-head' }, el('h3', { text: 'Your starter plan' })),
        el('p', { class: 'plan-meta', text: plan.length + ' steps, about ' + totalMinutes(plan) + ' minutes in all. Tick each one off as you go.' }),
        hint,
        el('div', { class: 'progress-row' }, progress, progressText),
        steps,
        el('div', { class: 'plan-actions' },
          el('button', { type: 'button', class: 'btn btn-quiet btn-small', onclick: function () { window.print(); } }, 'Print or save as PDF'),
          el('button', { type: 'button', class: 'btn btn-quiet btn-small', onclick: startOver }, 'Start over')
        ),
        el('p', { class: 'plan-saved', text: 'Your answers and progress are saved only in this browser, on this device. "Start over" erases them.' })
      );

      updateProgress();
      if (focusResult) {
        box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        box.focus({ preventScroll: true });
      }
    }

    function startOver() {
      clearState();
      const form = document.getElementById('quiz');
      form.reset();
      document.getElementById('plan-result').replaceChildren();
      document.getElementById('form-error').hidden = true;
      document.getElementById('quiz-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setupQuiz() {
      const form = document.getElementById('quiz');
      const error = document.getElementById('form-error');

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = readForm(form);
        if (answers.topics.length === 0) {
          error.hidden = false;
          const firstTopic = form.querySelector('input[name="topic"]');
          if (firstTopic) firstTopic.focus();
          return;
        }
        error.hidden = true;
        const state = { answers: answers, done: [] };
        saveState(state);
        renderPlan(state, true);
      });

      form.addEventListener('change', function () { error.hidden = true; });

      const saved = loadState();
      if (saved && saved.answers && saved.answers.topics && saved.answers.topics.length) {
        fillForm(form, saved.answers);
        renderPlan(saved, false);
      }
    }

    function init() {
      document.getElementById('reviewed-date').textContent = SITE.reviewed;
      setupDemo();
      renderTopics();
      renderGlossary();
      setupQuiz();
      window.addEventListener('beforeprint', function () {
        document.querySelectorAll('#plan-result details').forEach(function (d) { d.open = true; });
      });
    }

    init();
  })();
}
