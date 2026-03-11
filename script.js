(() => {
  // ── Content data ──
  const CONTENT = {
    about: {
      title: 'ABOUT JUSTIN',
      number: '#001',
      types: ['PSYCHIC', 'NORMAL'],
      body: `
        <div class="detail-section-title">ORIGIN STORY</div>
        <p>I've followed in my sister's footsteps my entire life. We went to the same high school, the exact same university and program (we even lived together), and I'm hoping to break into the tech industry just like her!</p>
        <p>Born & raised on the West Coast of Canada in Vancouver, BC but moved across the country for university. I'll never get used to the frigid -30°C/-22°F East Coast winters but I'll always be grateful for the lifelong friends and lifetime memories I have made in my 5 years here!</p>

        <div class="detail-section-title">TRAINING GROUNDS</div>
        <p>Senior Dual-Degree Student studying Business Administration & Computer Science at <a href="https://www.ivey.uwo.ca/" target="_blank">Ivey Business School, Western University</a>.</p>

        <div class="detail-section-title">ABILITIES</div>
        <div class="detail-stat-grid">
          <div class="detail-stat">
            <span class="detail-stat-label">BOOKWORM</span>
            <span class="detail-stat-value">📚</span>
            <p style="font-size:0.42rem;margin-top:4px"><a href="https://www.goodreads.com/user/show/106184763-justin" target="_blank">179 books</a> since COVID. Why We Sleep, Shoe Dog, Dark Matter, People We Meet On Vacation.</p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">SWIFT RUN</span>
            <span class="detail-stat-value">🏃</span>
            <p style="font-size:0.42rem;margin-top:4px">10K to half-marathons in Seattle, Vancouver, Toronto. 10K PR: <a href="https://strava.app.link/tAqwl5cHOMb" target="_blank">45:46</a></p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">SPORTS FAN</span>
            <span class="detail-stat-value">🏒</span>
            <p style="font-size:0.42rem;margin-top:4px">Die-hard Canucks fan since age 6. Raptors fan since before 2019.</p>
          </div>
        </div>

        <div class="detail-section-title">CURRENTLY</div>
        <ul>
          <li>Product Manager @ <a href="https://www.datadoghq.com/" target="_blank">Datadog</a></li>
          <li>CS + Business @ <a href="https://www.ivey.uwo.ca/" target="_blank">Ivey Business School</a></li>
          <li>Training for the <a href="https://canadarunningseries.com/vancouver-half-marathon/" target="_blank">TCS Half-Marathon</a></li>
        </ul>
      `
    },

    experience: {
      title: 'BATTLE HISTORY',
      number: '#002',
      types: ['STEEL', 'FIGHTING'],
      body: `
        <div class="detail-section-title">ACTIVE PARTY</div>
        <p><strong>Datadog</strong> — Product Manager (Current)</p>
        <p><strong>1Password</strong> — Product Manager</p>

        <div class="detail-section-title">HALL OF FAME</div>
        <p><strong>Tesla</strong> — Technical Program Manager</p>
        <ul>
          <li>Managed and shipped 20+ vehicle software releases to 6M+ customers worldwide</li>
          <li>Led ideation & implementation of new features for internal tools</li>
          <li>Engineered a Python-based Splunk dashboard for release tracking</li>
          <li>Rode every vehicle in the fleet (except Robotaxi)</li>
        </ul>

        <p><strong>Wealthsimple</strong> — Product & Operations Manager</p>
        <ul>
          <li>Streamlined support ticket resolution via automated workflows</li>
          <li>Built automated weekly performance tracking system</li>
          <li>Developed SQL & Preset dashboards for data-driven decisions</li>
          <li>Got really good at ping-pong and Super Smash Bros</li>
        </ul>

        <p><strong>Anheuser-Busch</strong> — Data Engineer</p>
        <ul>
          <li>Led development of a Python-based data import tool from Excel & Word</li>
          <li>Built automated dashboards pulling live data from Excel and SAP</li>
        </ul>

        <p><strong>Psystem</strong> — Technical Product Manager</p>
        <ul>
          <li>Ideated, developed, and rolled out PsyHealth Mobile App from 0-1</li>
          <li>Now on the <a href="https://play.google.com/store/apps/details?id=ca.psyhealth.twa" target="_blank">Google Play Store</a></li>
        </ul>

        <div class="detail-section-title">GYM BADGES</div>
        <div class="detail-stat-grid">
          <div class="detail-stat">
            <span class="detail-stat-value">🌐</span>
            <span class="detail-stat-label">Web Team</span>
            <p style="font-size:0.42rem"><a href="https://www.hackwestern.com/" target="_blank">Hack Western 10</a></p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-value">🎓</span>
            <span class="detail-stat-label">VP Mentorship</span>
            <p style="font-size:0.42rem"><a href="https://www.iveytechclub.ca/" target="_blank">Ivey Tech Club</a></p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-value">🤝</span>
            <span class="detail-stat-label">VP Fellowship</span>
            <p style="font-size:0.42rem"><a href="https://www.linkedin.com/company/ivey-product-society/" target="_blank">Western Product Society</a></p>
          </div>
        </div>
      `
    },

    projects: {
      title: 'MOVE SET',
      number: '#003',
      types: ['ELECTRIC', 'PSYCHIC'],
      body: `
        <div class="detail-section-title">TECHNICAL MOVES (TMs)</div>

        <p><strong>TM01 — Hack Western Event Scheduler</strong></p>
        <p>Developed the front & back-end of the Hack Western 10 workshop scheduler.</p>
        <p><a href="https://www.figma.com/design/JNZ52KyUjY2JreplogrWd4/Hack-Western-10-Workshop-Scheduler?node-id=50-451" target="_blank">View on Figma →</a></p>

        <p style="margin-top:12px"><strong>TM02 — iMessage Portfolio</strong></p>
        <p>An AI-powered chat interface styled like iMessage. Chat with Justin's AI assistant!</p>
        <p><a href="https://justinyan.vercel.app/" target="_blank">Try it out →</a></p>

        <p style="margin-top:12px"><strong>TM03 — Strava Wrapped</strong></p>
        <p>Your Strava activity stats wrapped — a year in motion, beautifully visualized.</p>
        <p><a href="https://stravawrap.com/" target="_blank">Check it out →</a></p>

        <div class="detail-section-title">SIGNATURE MOVE (HM01)</div>
        <p><strong>BeReal Prompts</strong></p>
        <p>A comprehensive product proposal to increase engagement and deepen relationships on BeReal through daily prompts and posting streaks.</p>

        <div class="detail-stat-grid" style="margin-top:12px">
          <div class="detail-stat">
            <span class="detail-stat-label">PROBLEM</span>
            <p style="font-size:0.42rem;margin-top:2px">Users struggle to consistently engage with content, leading to decreased community engagement.</p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">SOLUTION</span>
            <p style="font-size:0.42rem;margin-top:2px">Daily prompts that create a common thread across posts, plus posting streaks for daily habits.</p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">IMPACT</span>
            <p style="font-size:0.42rem;margin-top:2px">Increased engagement quality & quantity. Higher content relatability. More variance in daily content.</p>
          </div>
        </div>
        <p><a href="https://www.figma.com/file/ggDHpq69FZWXnSaqTjM8YQ/BeReal?type=design&node-id=60%3A8" target="_blank">View Wireframes & Prototypes →</a></p>
      `
    },

    skills: {
      title: 'BASE STATS',
      number: '#004',
      types: ['FIRE', 'DRAGON'],
      body: `
        <div class="detail-section-title">STAT BREAKDOWN</div>
        ${makeStatBar('Product Mgmt', 92, '--type-steel')}
        ${makeStatBar('Leadership', 88, '--type-fire')}
        ${makeStatBar('UX Design', 85, '--type-psychic')}
        ${makeStatBar('Engineering', 78, '--type-electric')}
        ${makeStatBar('Data Science', 74, '--type-dragon')}
        ${makeStatBar('Speed (10K)', 70, '--type-fighting')}

        <div class="detail-section-title">TYPE EFFECTIVENESS</div>
        <div class="detail-stat-grid">
          <div class="detail-stat">
            <span class="detail-stat-label">STRONG VS</span>
            <p style="font-size:0.42rem;margin-top:2px">Product Strategy, UX Research, Cross-functional leadership, Data pipelines</p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">TOOLS</span>
            <p style="font-size:0.42rem;margin-top:2px">Python, SQL, Figma, Jira, Splunk, React, Preset</p>
          </div>
          <div class="detail-stat">
            <span class="detail-stat-label">TRAINING</span>
            <p style="font-size:0.42rem;margin-top:2px">0-1 product dev, Agile, User interviews, A/B testing</p>
          </div>
        </div>
      `
    },

    // Pokemon (experience) detail entries
    datadog: {
      title: 'DATADOG',
      number: '#006',
      types: ['STEEL'],
      body: `<p><strong>Product Manager</strong> — Current role</p><p>Currently in the active party!</p>`
    },
    '1password': {
      title: '1PASSWORD',
      number: '#005',
      types: ['STEEL'],
      body: `<p><strong>Product Manager</strong></p><p>Secured and shipped product experiences for password management.</p>`
    },
    tesla: {
      title: 'TESLA',
      number: '#004',
      types: ['ELECTRIC', 'STEEL'],
      body: `
        <p><strong>Technical Program Manager</strong></p>
        <ul>
          <li>Managed and shipped 20+ vehicle software releases to a customer base of over 6 million customers worldwide</li>
          <li>Led ideation, development, and implementation of new features for internal tools</li>
          <li>Engineered a Python-based Splunk dashboard to track delays in release sign-offs</li>
          <li>Rode every single vehicle in the fleet (except for Robotaxi)</li>
        </ul>
      `
    },
    wealthsimple: {
      title: 'WEALTHSIMPLE',
      number: '#003',
      types: ['STEEL', 'PSYCHIC', 'NORMAL'],
      body: `
        <p><strong>Product & Operations Manager</strong></p>
        <ul>
          <li>Streamlined customer support ticket resolution by implementing automated workflows</li>
          <li>Built an automated weekly tracking system to monitor performance</li>
          <li>Developed dashboards using SQL and Preset for data-driven decisions</li>
          <li>Got really good at ping-pong and Super Smash Bros</li>
        </ul>
      `
    },
    ab: {
      title: 'ANHEUSER-BUSCH',
      number: '#002',
      types: ['DRAGON', 'NORMAL'],
      body: `
        <p><strong>Data Engineer</strong></p>
        <ul>
          <li>Led the development of a Python-based tool to import data from Excel and Word</li>
          <li>Built automated dashboards pulling live data from Excel and SAP</li>
        </ul>
      `
    },
    psystem: {
      title: 'PSYSTEM',
      number: '#001',
      types: ['STEEL', 'PSYCHIC', 'ELECTRIC'],
      body: `
        <p><strong>Technical Product Manager</strong></p>
        <ul>
          <li>Ideated, developed, and rolled out PsyHealth Mobile App from 0-1</li>
          <li>Now officially listed on the <a href="https://play.google.com/store/apps/details?id=ca.psyhealth.twa" target="_blank">Google Play Store</a></li>
        </ul>
      `
    }
  };

  function makeStatBar(name, value, colorVar) {
    const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim() || '#f08030';
    return `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="font-size:0.45rem;min-width:80px;text-align:right;color:#787068;">${name}</span>
        <div class="detail-stat-bar-track" style="flex:1;">
          <div class="detail-stat-bar-fill" style="width:${value}%;background:var(${colorVar});"></div>
        </div>
        <span style="font-size:0.42rem;color:#908878;min-width:20px;">${value}</span>
      </div>
    `;
  }

  // ── Battle text sequences ──
  const BATTLE_TEXTS = {
    intro: [
      "A wild JUSTIN YAN appeared!",
      "JUSTIN YAN is a Computer Science & Business student specializing in UX and leading Engineering teams.",
      "What will VISITOR do?"
    ],
    fight: ["VISITOR opened the FIGHT menu!", "Choose a move to learn more..."],
    bag: ["VISITOR opened the BAG!", "Pick an item to reach out..."],
    pokemon: ["VISITOR checked the POKéMON roster!", "Select a role to learn more..."],
    run: [
      "Can't escape!",
      "JUSTIN YAN is too interesting to run from!",
      "...but seriously, check out FIGHT to explore!"
    ],
    moveUsed: (name) => [`VISITOR used ${name}!`, "It's super effective!"],
  };

  // ── DOM refs ──
  const textContent = document.getElementById('textContent');
  const textAdvance = document.getElementById('textAdvance');
  const mainMenu = document.getElementById('mainMenu');
  const fightMenu = document.getElementById('fightMenu');
  const bagMenu = document.getElementById('bagMenu');
  const pokemonMenu = document.getElementById('pokemonMenu');
  const detailOverlay = document.getElementById('detailOverlay');
  const detailCard = document.getElementById('detailCard');
  const detailClose = document.getElementById('detailClose');
  const detailTitle = document.getElementById('detailTitle');
  const detailNumber = document.getElementById('detailNumber');
  const detailTypes = document.getElementById('detailTypes');
  const detailBody = document.getElementById('detailBody');
  const opponentHp = document.getElementById('opponentHp');
  const opponentSprite = document.getElementById('opponentSprite');
  const ppCount = document.getElementById('ppCount');

  let textQueue = [];
  let isTyping = false;
  let currentCharIndex = 0;
  let currentText = '';
  let typeTimer = null;
  let pp = 15;
  let afterTextCallback = null;

  // ── Typewriter engine ──
  function typeText(text, callback) {
    isTyping = true;
    currentText = text;
    currentCharIndex = 0;
    textContent.textContent = '';
    textAdvance.style.display = 'none';

    function tick() {
      if (currentCharIndex < currentText.length) {
        textContent.textContent += currentText[currentCharIndex];
        currentCharIndex++;
        typeTimer = setTimeout(tick, 28);
      } else {
        isTyping = false;
        if (callback) callback();
      }
    }
    tick();
  }

  function skipType() {
    if (isTyping) {
      clearTimeout(typeTimer);
      textContent.textContent = currentText;
      isTyping = false;
      currentCharIndex = currentText.length;
    }
  }

  function playTextQueue(texts, onComplete) {
    textQueue = [...texts];
    afterTextCallback = onComplete || null;
    advanceQueue();
  }

  function advanceQueue() {
    if (textQueue.length === 0) {
      textAdvance.style.display = 'none';
      if (afterTextCallback) afterTextCallback();
      return;
    }
    const nextText = textQueue.shift();
    typeText(nextText, () => {
      if (textQueue.length > 0) {
        textAdvance.style.display = 'block';
      } else {
        textAdvance.style.display = 'none';
        if (afterTextCallback) afterTextCallback();
      }
    });
  }

  // Click to advance text
  document.getElementById('textBox').addEventListener('click', () => {
    if (isTyping) {
      skipType();
      if (textQueue.length > 0) {
        textAdvance.style.display = 'block';
      } else {
        textAdvance.style.display = 'none';
        if (afterTextCallback) afterTextCallback();
      }
    } else if (textQueue.length > 0) {
      advanceQueue();
    }
  });

  // ── Menu management ──
  function showMenu(menu) {
    [mainMenu, fightMenu, bagMenu, pokemonMenu].forEach(m => m.classList.add('hidden'));
    menu.classList.remove('hidden');
  }

  // Main menu buttons
  mainMenu.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'fight') {
        playTextQueue(BATTLE_TEXTS.fight, () => showMenu(fightMenu));
        showMenu(fightMenu);
      } else if (action === 'bag') {
        playTextQueue(BATTLE_TEXTS.bag);
        showMenu(bagMenu);
      } else if (action === 'pokemon') {
        playTextQueue(BATTLE_TEXTS.pokemon);
        showMenu(pokemonMenu);
      } else if (action === 'run') {
        playTextQueue(BATTLE_TEXTS.run, () => showMenu(mainMenu));
        triggerShake(opponentSprite);
      }
    });
  });

  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showMenu(mainMenu);
      playTextQueue(["What will VISITOR do?"]);
    });
  });

  // Fight moves
  fightMenu.querySelectorAll('.move-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const move = btn.dataset.move;
      const moveName = btn.querySelector('.move-name-text').textContent;
      pp = Math.max(0, pp - 1);
      ppCount.textContent = pp;

      triggerAttack();
      playTextQueue(BATTLE_TEXTS.moveUsed(moveName), () => {
        showDetail(move);
      });
    });
  });

  // Pokemon buttons
  pokemonMenu.querySelectorAll('.pkmn-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;
      const name = btn.querySelector('.pkmn-name').textContent;
      playTextQueue([`VISITOR checked ${name}...`], () => {
        showDetail(role);
      });
    });
  });

  // ── Detail overlay ──
  function showDetail(key) {
    const data = CONTENT[key];
    if (!data) return;

    detailTitle.textContent = data.title;
    detailNumber.textContent = data.number;
    detailTypes.innerHTML = data.types.map(t =>
      `<span class="move-type type-${t.toLowerCase()}">${t}</span>`
    ).join('');
    detailBody.innerHTML = data.body;

    detailOverlay.classList.remove('hidden');
  }

  detailClose.addEventListener('click', closeDetail);
  detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) closeDetail();
  });

  function closeDetail() {
    detailOverlay.classList.add('hidden');
    showMenu(mainMenu);
    playTextQueue(["What will VISITOR do?"]);
  }

  // ── Attack animation ──
  function triggerAttack() {
    opponentSprite.classList.add('attack-flash');
    opponentSprite.addEventListener('animationend', () => {
      opponentSprite.classList.remove('attack-flash');
    }, { once: true });

    const current = parseFloat(opponentHp.style.width);
    const next = Math.max(5, current - (3 + Math.random() * 5));
    opponentHp.style.width = next + '%';

    if (next < 25) {
      opponentHp.style.background = 'var(--hp-red)';
    } else if (next < 50) {
      opponentHp.style.background = 'var(--hp-yellow)';
    }
  }

  function triggerShake(el) {
    el.classList.add('shake');
    el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
  }

  // ── Keyboard support ──
  document.addEventListener('keydown', (e) => {
    if (!detailOverlay.classList.contains('hidden')) {
      if (e.key === 'Escape') closeDetail();
      return;
    }

    if (isTyping || textQueue.length > 0) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('textBox').click();
      }
      return;
    }
  });

  // ── Init: play intro sequence ──
  playTextQueue(BATTLE_TEXTS.intro);

})();
