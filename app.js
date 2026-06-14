// ============================================================
// APP ENTRY POINT & STATE MANAGEMENT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTheme();
  initStages();
  initSlots();
  initCompulsionLoop();
  initCases();
  initSimulator();
  initQuiz();
  initArchitect();
  initGlossary();
});

// Toast notification trigger helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-wrap");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "⚠️";
  
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add("show"), 50);
  
  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============================================================
// TAB NAVIGATION & MOBILE MENU
// ============================================================
function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-item button");
  const tabContents = document.querySelectorAll(".tab-content");
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      
      // Update nav buttons active states
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
      btn.parentElement.classList.add("active");
      
      // Update content panes
      tabContents.forEach(tab => {
        tab.classList.remove("active");
        if (tab.id === `tab-${targetTab}`) {
          tab.classList.add("active");
        }
      });

      // Special resize event for canvas in simulator
      if (targetTab === "simulator") {
        setTimeout(resizeCanvas, 50);
      }

      // Close mobile menu on click
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    });
  });

  // Mobile menu button toggle
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// ============================================================
// THEME SWITCHER LOGIC
// ============================================================
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
    
    showToast(`Switched to ${newTheme} mode`, "success");
    
    // Refresh canvas colors on theme change if visible
    if (document.getElementById("tab-simulator").classList.contains("active")) {
      drawChart();
    }
  });
}

function updateThemeIcon(theme) {
  const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>`;
  document.getElementById("theme-toggle").innerHTML = theme === "dark" ? sunIcon : moonIcon;
}

// ============================================================
// STAGE ACCORDION EXPANDERS
// ============================================================
function initStages() {
  const headers = document.querySelectorAll(".stage-header");
  
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const card = header.parentElement;
      const body = card.querySelector(".stage-body");
      const isOpen = card.classList.contains("open");
      
      // Close other stages (optional, but clean)
      document.querySelectorAll(".stage-card").forEach(c => {
        if (c !== card && c.classList.contains("open")) {
          c.classList.remove("open");
          c.querySelector(".stage-body").style.maxHeight = "0";
        }
      });
      
      if (isOpen) {
        card.classList.remove("open");
        body.style.maxHeight = "0";
      } else {
        card.classList.add("open");
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
  });
  
  // Expand first stage by default
  const firstCard = document.querySelector(".stage-card");
  if (firstCard) {
    firstCard.classList.add("open");
    const body = firstCard.querySelector(".stage-body");
    body.style.maxHeight = `${body.scrollHeight}px`;
  }
}

// ============================================================
// SLOT CLICK INTERACTIVE LIST
// ============================================================
const SLOTS_DATA = {
  connection: {
    icon: "👥",
    title: "Connection (Связь)",
    need: "To feel seen, valued, and integrated with a community of love.",
    counterfeit: "Scrolling social feeds, chasing vanity indexes, text message threads.",
    exit: "Vulnerability in community, shared meals, prayer, confession in person."
  },
  rest: {
    icon: "🕯️",
    title: "Rest (Отдых)",
    need: "To restore reserves, unload stress, disconnect from demands.",
    counterfeit: "Doomscrolling, endless gaming, binge eating.",
    exit: "Sabbath resting, walks in nature, silence, sleeping, receiving rest as gift."
  },
  intimacy: {
    icon: "💞",
    title: "Intimacy (Близость)",
    need: "To love and be loved unconditionally, sharing hidden spaces without fear.",
    counterfeit: "Pornography, codependency, parasocial validation.",
    exit: "Truth disclosure, abiding in unconditional grace, covenant friendships."
  },
  meaning: {
    icon: "🧭",
    title: "Meaning (Смысл)",
    need: "To align actions with a lasting purpose that outlives you.",
    counterfeit: "Workaholism, productivity streaks, material collection.",
    exit: "Self-giving service, creation care, resting in received justification."
  },
  mastery: {
    icon: "🛠️",
    title: "Mastery (Мастерство)",
    need: "To cultivate skills, express agency, and complete work.",
    counterfeit: "Duolingo/app streaks, virtual achievements, video game ranks.",
    exit: "Real craftsmanship, manual labor, slow-skills cultivation."
  },
  transcendence: {
    icon: "🌌",
    title: "Transcendence (Трансцендентность)",
    need: "To touch the eternal, praise the beautiful, worship the ultimate.",
    counterfeit: "Substance consumption, political tribalism, screen addiction.",
    exit: "Contemplative prayer, choral/worship singing, structured liturgy, stargazing."
  }
};

function initSlots() {
  const slotItems = document.querySelectorAll(".slot-item");
  const displayTitle = document.getElementById("slot-display-title");
  const displayNeed = document.getElementById("slot-display-need");
  const displayCounterfeit = document.getElementById("slot-display-counterfeit");
  const displayExit = document.getElementById("slot-display-exit");

  slotItems.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.slot;
      const data = SLOTS_DATA[key];

      slotItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Update detail display card
      displayTitle.innerHTML = `${data.icon} ${data.title}`;
      displayNeed.innerText = data.need;
      displayCounterfeit.innerText = data.counterfeit;
      displayExit.innerText = data.exit;
    });
  });

  // Activate first slot by default
  const firstSlot = document.querySelector(".slot-item");
  if (firstSlot) firstSlot.click();
}

// ============================================================
// COMPULSION LOOP INTERACTIVE TOGGLE
// ============================================================
const LOOP_EXPLANATIONS = {
  force: "<strong>By Force:</strong> You attempt to break the loop by out-muscling the impulse with sheer willpower. But the underlying need remains completely dry. The friction generates shame, which acts as a secondary cue, accelerating the next spin.",
  grace: "<strong>By Grace:</strong> Instead of fighting the loop directly, you redirect the underlying core need directly to the fountain (re-sourcing). The loop loses its tension, and the cycle disintegrates."
};

function initCompulsionLoop() {
  const toggleBtnForce = document.getElementById("loop-btn-force");
  const toggleBtnGrace = document.getElementById("loop-btn-grace");
  const container = document.getElementById("loop-toggle-wrap");
  const explain = document.getElementById("loop-explanation");
  
  // SVG arrow indicators
  const forceArrow = document.getElementById("loop-svg-force-arrow");
  const forceLbl = document.getElementById("loop-svg-force-lbl");
  const graceArrow = document.getElementById("loop-svg-grace-arrow");
  const graceLbl = document.getElementById("loop-svg-grace-lbl");
  const loopRing = document.getElementById("loop-svg-ring");

  function setMode(mode) {
    const isGrace = mode === "grace";
    
    toggleBtnForce.classList.toggle("active", !isGrace);
    toggleBtnGrace.classList.toggle("active", isGrace);
    container.classList.toggle("grace", isGrace);
    explain.innerHTML = isGrace ? LOOP_EXPLANATIONS.grace : LOOP_EXPLANATIONS.force;

    // Toggle SVG displays
    if (isGrace) {
      graceArrow.style.opacity = "0.95";
      graceLbl.style.opacity = "1";
      forceArrow.style.opacity = "0.18";
      forceLbl.style.opacity = "0.25";
      graceArrow.classList.add("gflow");
      loopRing.setAttribute("stroke", "#2f8a80");
    } else {
      graceArrow.style.opacity = "0";
      graceLbl.style.opacity = "0";
      forceArrow.style.opacity = "0.9";
      forceLbl.style.opacity = "1";
      graceArrow.classList.remove("gflow");
      loopRing.setAttribute("stroke", "#5b4a64");
    }
  }

  toggleBtnForce.addEventListener("click", () => setMode("force"));
  toggleBtnGrace.addEventListener("click", () => setMode("grace"));
  
  setMode("force");
}

// ============================================================
// CASE STUDIES EXPANDERS & FILTERING
// ============================================================
const CASES_DATA = [
  { ref: "JOHN 4:1-26", title: "The Woman at the Well", pill: "Relational", category: "new", content: "She tries to quench a deep relational thirst with five successive husbands. Jesus offers a spring (*pēgē*) of living water that wells up from within, completely decoupling her validation from human relationships." },
  { ref: "ROMANS 7:14-24", title: "The Wretched Man", pill: "Willpower", category: "new", content: "The classic split-willpower loop. The 'I' wishes to obey the law, but the members follow a separate script. The loop breaks when condemnation is legally removed in Romans 8:1." },
  { ref: "LUKE 15:11-32", title: "The Prodigal Son", pill: "Escapism", category: "new", content: "Escaping identity constraints by scattering his inheritance (*asōtōs*) in the far country. The cistern dried up in a famine, leading to pig-pen remorse." },
  { ref: "LUKE 15:11-32", title: "The Elder Brother", pill: "Performance", category: "new", content: "Digging a moral cistern of flawless compliance ('I served you like a slave'). Striving builds transactional resentment, locking him outside the father's feast." },
  { ref: "LUKE 18:9-14", title: "Pharisee & Tax Collector", pill: "Comparison", category: "new", content: "The Pharisee measures his security by social ranking. The tax collector appeals to atonement (*hilasthēti*) and goes home justified (*dedikaiōmenos*) without comparisons." },
  { ref: "NUMBERS 11:4-6", title: "Israel Craving Egypt", pill: "Relapse", category: "old", content: "Under stress in the wilderness, they romanticize their slavery because of the onions and garlic. Relapse occurs because familiar bondage feels safer than the trust required by daily Manna." },
  { ref: "JOHN 15:1-11", title: "Abiding in the Vine", pill: "Moral", category: "new", content: "Jesus commands the branch to stay connected (*menō*) to the true vine. moral growth (fruit) is an organic consequence of receiving life sap, not mechanical straining." }
];

function initCases() {
  const grid = document.getElementById("cases-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderCases(category) {
    grid.innerHTML = "";
    
    CASES_DATA.forEach((c, index) => {
      if (category !== "all" && c.category !== category) return;
      
      const card = document.createElement("div");
      card.className = "case-card";
      card.innerHTML = `
        <button class="case-card-header">
          <div class="case-info">
            <span class="case-ref">${c.ref}</span>
            <span class="case-title">${c.title}</span>
            <span class="case-pill">${c.pill}</span>
          </div>
          <svg class="stage-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <div class="stage-body">
          <div class="case-body-inner">
            <p>${c.content}</p>
          </div>
        </div>
      `;

      const header = card.querySelector(".case-card-header");
      const body = card.querySelector(".stage-body");
      
      header.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        
        document.querySelectorAll(".case-card").forEach(x => {
          if (x !== card && x.classList.contains("open")) {
            x.classList.remove("open");
            x.querySelector(".stage-body").style.maxHeight = "0";
          }
        });

        if (isOpen) {
          card.classList.remove("open");
          body.style.maxHeight = "0";
        } else {
          card.classList.add("open");
          body.style.maxHeight = `${body.scrollHeight}px`;
        }
      });

      grid.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCases(btn.dataset.category);
    });
  });

  renderCases("all");
}

// ============================================================
// TAB 4: SANDBOX SIMULATOR PHYSICS ENGINE
// ============================================================
let simInterval = null;
let W = 100; // Willpower
let S = 10;  // Stress
let SH = 0;  // Shame
let activeParadigm = 'works';
let isRunning = false;

// Physics coefficients
let k_leak = 0.8;
let F_shame = 1.5;
let g_grace = 1.5;

// Live canvas chart settings
let canvas = null;
let ctx = null;
let dataPoints = [];
const maxDataPoints = 40;

function initSimulator() {
  canvas = document.getElementById("sim-chart");
  if (canvas) ctx = canvas.getContext("2d");

  // Hook up event listeners for inputs
  document.getElementById("param-leak").addEventListener("input", syncSimParameters);
  document.getElementById("param-shame").addEventListener("input", syncSimParameters);
  document.getElementById("param-grace").addEventListener("input", syncSimParameters);

  // Hook up event listeners for simulation controls
  document.getElementById("sim-btn-start").addEventListener("click", startSimulation);
  document.getElementById("sim-btn-pause").addEventListener("click", pauseSimulation);
  document.getElementById("sim-btn-reset").addEventListener("click", resetSimulation);

  // Hook up event listeners for paradigms
  document.getElementById("sim-par-works").addEventListener("click", () => setSimParadigm("works"));
  document.getElementById("sim-par-grace").addEventListener("click", () => setSimParadigm("grace"));

  // Event injectors
  document.getElementById("evt-slack").addEventListener("click", () => injectEvent("slack"));
  document.getElementById("evt-metric").addEventListener("click", () => injectEvent("metric"));
  document.getElementById("evt-linkedin").addEventListener("click", () => injectEvent("linkedin"));
  document.getElementById("evt-grounding").addEventListener("click", () => injectEvent("grounding"));

  syncSimParameters();
  resetSimulation();
}

function syncSimParameters() {
  k_leak = parseFloat(document.getElementById("param-leak").value);
  F_shame = parseFloat(document.getElementById("param-shame").value);
  g_grace = parseFloat(document.getElementById("param-grace").value);

  document.getElementById("lbl-leak").innerText = k_leak.toFixed(1);
  document.getElementById("lbl-shame").innerText = F_shame.toFixed(1);
  document.getElementById("lbl-grace").innerText = g_grace.toFixed(1);

  // Adjust SVGs drip rate
  const drip = document.getElementById("cistern-drip-flow");
  if (drip) {
    const duration = Math.max(0.3, 1.8 - (k_leak * 0.7));
    drip.style.animationDuration = `${duration}s`;
  }
}

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.parentNode.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  drawChart();
}

window.addEventListener("resize", resizeCanvas);

function logTerminal(msg, color = "text-stone-400") {
  const terminal = document.getElementById("sim-terminal-logs");
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const logLine = document.createElement("div");
  logLine.className = `mono ${color}`;
  logLine.style.fontSize = "0.72rem";
  logLine.innerHTML = `<span style="color: var(--ink-faint)">[${time}]</span> ${msg}`;
  terminal.appendChild(logLine);
  terminal.scrollTop = terminal.scrollHeight;
}

function setSimParadigm(paradigm) {
  activeParadigm = paradigm;
  const btnWorks = document.getElementById("sim-par-works");
  const btnGrace = document.getElementById("sim-par-grace");
  const tglWrap = document.getElementById("sim-tgl-wrap");
  const desc = document.getElementById("sim-paradigm-desc");

  // SVG cistern handles
  const fill = document.getElementById("cistern-svg-water-fill");
  const drip = document.getElementById("cistern-drip-flow");
  const lbl = document.getElementById("cistern-svg-label");

  if (paradigm === "works") {
    btnWorks.classList.add("active");
    btnGrace.classList.remove("active");
    tglWrap.classList.remove("grace");
    desc.innerHTML = "<strong>Works:</strong> Identity is leaky and transaction-based. Willpower is continuously depleted to prove self-worth.";
    
    if (fill) fill.setAttribute("fill", "#F3651C");
    if (drip) drip.style.display = "block";
    if (lbl) {
      lbl.innerText = "LEAKY";
      lbl.setAttribute("fill", "#F3651C");
    }

    logTerminal("⚠️ Loaded Works loop. Baseline leakage initialized.", "text-amber-500");
  } else {
    btnGrace.classList.add("active");
    btnWorks.classList.remove("active");
    tglWrap.classList.add("grace");
    desc.innerHTML = "<strong>Grace:</strong> Identity is secure and gifted. Striving ceases; water level is sealed; reserves naturally recover.";

    if (fill) fill.setAttribute("fill", "#10B981");
    if (drip) drip.style.display = "none";
    if (lbl) {
      lbl.innerText = "SEALED";
      lbl.setAttribute("fill", "#10B981");
    }

    logTerminal("🛡️ Loaded Grace state. Cistern sealed. Striving disabled.", "text-emerald-500");
  }
  updateSimUI();
}

function startSimulation() {
  if (isRunning) return;
  isRunning = true;
  document.getElementById("sim-btn-start").disabled = true;
  document.getElementById("sim-btn-pause").disabled = false;
  
  logTerminal("🚀 Simulation run-loop started.", "text-stone-200");

  simInterval = setInterval(() => {
    if (activeParadigm === "works") {
      // Striving depletion math
      let loss = 0.45 + (S * 0.05 * k_leak);
      W = Math.max(0, W - loss);
      S = Math.min(100, S + 0.25 * k_leak);

      // Willpower breakdown triggers shame feedback loops
      if (W < 30) {
        SH = Math.min(100, SH + 1.2 * F_shame);
        S = Math.min(100, S + 0.9 * F_shame); // Shame raises stress levels
        if (Math.random() < 0.15) {
          logTerminal("💥 Willpower failure! Self-condemnation feedback loop running.", "text-fuchsia-400");
        }
      }
    } else {
      // Grace recovery curves
      W = Math.min(100, W + 1.5 * g_grace);
      S = Math.max(0, S - 1.6 * g_grace);
      SH = Math.max(0, SH - 2.2 * g_grace);
    }

    dataPoints.push({ w: W, s: S, sh: SH });
    if (dataPoints.length > maxDataPoints) {
      dataPoints.shift();
    }

    drawChart();
    updateSimUI();
  }, 500);
}

function pauseSimulation() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(simInterval);
  document.getElementById("sim-btn-start").disabled = false;
  document.getElementById("sim-btn-pause").disabled = true;
  logTerminal("⏸️ Simulation paused.", "text-stone-500");
}

function resetSimulation() {
  pauseSimulation();
  W = 100;
  S = 10;
  SH = 0;
  dataPoints = [];
  setSimParadigm("works");
  document.getElementById("sim-terminal-logs").innerHTML = `<div class="mono text-stone-500" style="font-size:0.72rem;"><span style="color:var(--ink-faint)">[System]</span> Resting state. Run simulation.</div>`;
  updateSimUI();
  drawChart();
}

function injectEvent(evt) {
  if (!isRunning) {
    showToast("Start simulation to inject events", "error");
    return;
  }

  if (evt === "slack") {
    if (activeParadigm === "works") {
      S = Math.min(100, S + 18);
      W = Math.max(0, W - 12);
      logTerminal("💬 Late Slack message! Stress level rises. (+18 Stress, -12 Willpower)", "text-red-400");
    } else {
      S = Math.min(100, S + 4);
      logTerminal("🛡️ Work message dismissed without status anxiety. (+4 Minor stress resolved)", "text-emerald-400");
    }
  } else if (evt === "metric") {
    if (activeParadigm === "works") {
      SH = Math.min(100, SH + 25);
      W = Math.max(0, W - 15);
      S = Math.min(100, S + 10);
      logTerminal("🏃‍♂️ Watch Ring / Streak Missed! Striving failure. (+25 Shame, +10 Stress, -15 Willpower)", "text-fuchsia-400");
    } else {
      logTerminal("🛡️ Activity targets missed, but secure worth remains unthreatened.", "text-emerald-400");
    }
  } else if (evt === "linkedin") {
    if (activeParadigm === "works") {
      S = Math.min(100, S + 12);
      SH = Math.min(100, SH + 15);
      logTerminal("🔍 Scrolled LinkedIn peer promotions. Comparison triggered. (+12 Stress, +15 Shame)", "text-amber-500");
    } else {
      logTerminal("🛡️ Scrolled feed. Glad for friends without feeling deficit.", "text-emerald-400");
    }
  } else if (evt === "grounding") {
    S = Math.max(0, S - 30);
    SH = Math.max(0, SH - 25);
    W = Math.min(100, W + 20);
    logTerminal("🌱 Meditation on secure adoption and grace. System cooled. (-30 Stress, -25 Shame, +20 Willpower)", "text-emerald-400");
  }
  updateSimUI();
}

function updateSimUI() {
  document.getElementById("sim-val-willpower").innerText = Math.round(W);
  document.getElementById("sim-val-stress").innerText = Math.round(S);
  document.getElementById("sim-val-shame").innerText = Math.round(SH);

  document.getElementById("sim-bar-willpower").style.width = `${W}%`;
  document.getElementById("sim-bar-stress").style.width = `${S}%`;
  document.getElementById("sim-bar-shame").style.width = `${SH}%`;
}

function drawChart() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (dataPoints.length === 0) return;

  const dx = canvas.width / (maxDataPoints - 1);
  const dy = canvas.height / 100;

  // Grid reference lines
  const theme = document.documentElement.getAttribute("data-theme");
  ctx.strokeStyle = theme === "dark" ? "rgba(242, 235, 220, 0.04)" : "rgba(33, 25, 19, 0.04)";
  ctx.lineWidth = 1;
  for (let i = 25; i <= 75; i += 25) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - i * dy);
    ctx.lineTo(canvas.width, canvas.height - i * dy);
    ctx.stroke();
  }

  // Plot curves
  function drawLine(key, color, dashed = false) {
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = color;
    if (dashed) ctx.setLineDash([4, 4]);
    else ctx.setLineDash([]);

    dataPoints.forEach((pt, idx) => {
      const val = pt[key];
      const x = idx * dx;
      const y = canvas.height - val * dy;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  drawLine("w", activeParadigm === "works" ? "#F3651C" : "#10B981");
  drawLine("s", "#EF4444", true);
  drawLine("sh", "#D946EF");
}

// ============================================================
// TAB 5: APP DIAGNOSTIC QUIZ
// ============================================================
function initQuiz() {
  const checkboxes = document.querySelectorAll(".quiz-check-input");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", calculateQuizScore);
  });
  calculateQuizScore();
}

function calculateQuizScore() {
  const checkboxes = document.querySelectorAll(".quiz-check-input");
  let score = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) score += 20;
  });

  const num = document.getElementById("quiz-val-score");
  const verdict = document.getElementById("quiz-txt-verdict");
  const explain = document.getElementById("quiz-txt-explain");

  num.innerText = `${score}%`;

  if (score === 0) {
    num.style.color = "var(--ink-dim)";
    verdict.innerText = "Innocent Utility";
    verdict.style.color = "var(--ink-dim)";
    explain.innerText = "This app behaves as a basic functional tool. No toxic triggers detected. Safe for identity.";
  } else if (score <= 40) {
    num.style.color = "var(--grace)";
    verdict.innerText = "Low-Stress Utility";
    verdict.style.color = "var(--grace)";
    explain.innerText = "Minor progress markers are active. Low risk of compulsion, but may trigger stress if personal reserves are depleted.";
  } else if (score <= 60) {
    num.style.color = "var(--gold)";
    verdict.innerText = "Willpower Taxing Engine";
    verdict.style.color = "var(--gold)";
    explain.innerText = "The app utilizes loss aversion or streaks. Willpower is actively consumed to maintain targets under fatigue.";
  } else if (score <= 80) {
    num.style.color = "var(--accent)";
    verdict.innerText = "High-Threat Worth Contingency";
    verdict.style.color = "var(--accent)";
    explain.innerText = "Strict daily target penalties and public competitive leaderboards. Basic self-worth is systematically made contingent on metrics.";
  } else {
    num.style.color = "var(--stress)";
    verdict.innerText = "Predatory Striving Core";
    verdict.style.color = "var(--stress)";
    explain.innerText = "Highly toxic. Design patterns are calibrated to build a digital broken cistern, exploiting shame loops to force engagement.";
  }
}

// ============================================================
// TAB 6: PERSONAL ARCHITECT WORKBOOK
// ============================================================
const ARCHITECT_PRESETS = {
  peter: {
    cistern: "Placing ultimate status in personal devotion and moral bravery ('though all fall away, I won't').",
    counterfeit: "Proving courage under pressure to strangers to safeguard my heroic reputation.",
    habit: "Cue: Arrest/exposure threat ➔ Action: Denial of Christ with oaths ➔ Reward: Immediate relief from somatic threat.",
    shame: "'You failed the Savior. You are a coward and a complete fraud.'",
    grace: "Declaration: My secure acceptance is established by the King's death, not my court record. Relational recovery replaces straining resolve."
  },
  solomon: {
    cistern: "Seeking worth and defense against mortality through massive construction, pleasure assets, and wealth collection.",
    counterfeit: "More projects, gardens, palaces, gold indexes to patch existential deficit.",
    habit: "Cue: Existential dread / boredom ➔ Action: Building a massive new palace or garden ➔ Reward: Temporary control-high.",
    shame: "'Behold, all is vanity and striving after wind. I am still completely empty.'",
    grace: "Declaration: Satisfaction is a received gift from God. My value is not a total sum of palaces. I am free to sit in peace."
  },
  martha: {
    cistern: "Seeking relational validation by offering flawless performance and service.",
    counterfeit: "Over-managing domestic detail, cooking, cleanups to prove I am indispensable.",
    habit: "Cue: Relational obscurity / feeling ignored ➔ Action: Taking on chores, snapping at family ➔ Reward: Discharging tension.",
    shame: "'You are troubled about too many things. You have failed to sit at the feet of the Lord.'",
    grace: "Declaration: Only one thing is necessary. Worth is given prior to dinner being served. Limits are loved features."
  }
};

const RISK_WORDS = ["must", "always", "never", "fail", "lazy", "perfect", "worthless", "need to", "try harder", "discipline"];

function initArchitect() {
  const fields = ["cistern", "counterfeit", "habit", "shame", "grace"];
  
  // Attach listeners for linguistic checks
  fields.forEach(f => {
    const el = document.getElementById(`arch-in-${f}`);
    if (el) {
      el.addEventListener("input", () => {
        checkFieldLinguisticRisk(f);
        updateBlueprint();
      });
    }
  });

  // Attach button triggers
  document.getElementById("arch-preset-peter").addEventListener("click", () => loadArchitectPreset("peter"));
  document.getElementById("arch-preset-solomon").addEventListener("click", () => loadArchitectPreset("solomon"));
  document.getElementById("arch-preset-martha").addEventListener("click", () => loadArchitectPreset("martha"));
  
  document.getElementById("arch-btn-copy").addEventListener("click", copyBlueprintToClipboard);
  document.getElementById("arch-btn-reset").addEventListener("click", resetArchitect);
  
  updateBlueprint();
}

function checkFieldLinguisticRisk(field) {
  const val = document.getElementById(`arch-in-${field}`).value.toLowerCase();
  const warning = document.getElementById(`risk-warn-${field}`);
  
  let found = [];
  RISK_WORDS.forEach(word => {
    if (val.includes(word)) found.push(`"${word}"`);
  });

  if (found.length > 0) {
    warning.classList.remove("hidden");
    if (field === "grace") {
      warning.innerText = "Striving indicators in grace anchor";
      warning.className = "workbook-risk-badge grace-alert";
    } else {
      warning.innerText = `Striving indicators: ${found.join(", ")}`;
      warning.className = "workbook-risk-badge striving";
    }
  } else {
    warning.classList.add("hidden");
  }
}

function loadArchitectPreset(key) {
  const data = ARCHITECT_PRESETS[key];
  const fields = ["cistern", "counterfeit", "habit", "shame", "grace"];

  fields.forEach(f => {
    document.getElementById(`arch-in-${f}`).value = data[f];
    checkFieldLinguisticRisk(f);
  });

  updateBlueprint();
  showToast(`Loaded preset for ${key.toUpperCase()}`, "success");
}

function updateBlueprint() {
  const fields = ["cistern", "counterfeit", "habit", "shame", "grace"];
  fields.forEach(f => {
    const val = document.getElementById(`arch-in-${f}`).value.trim();
    const display = document.getElementById(`bp-txt-${f}`);
    
    if (display) {
      if (val) {
        display.innerText = val;
      } else {
        display.innerText = `Define your ${f}...`;
      }
    }
  });
}

function resetArchitect() {
  const fields = ["cistern", "counterfeit", "habit", "shame", "grace"];
  fields.forEach(f => {
    document.getElementById(`arch-in-${f}`).value = "";
    document.getElementById(`risk-warn-${f}`).classList.add("hidden");
  });
  updateBlueprint();
  showToast("Workbook cleared", "info");
}

function copyBlueprintToClipboard() {
  const cis = document.getElementById("bp-txt-cistern").innerText;
  const cnt = document.getElementById("bp-txt-counterfeit").innerText;
  const hab = document.getElementById("bp-txt-habit").innerText;
  const shm = document.getElementById("bp-txt-shame").innerText;
  const grc = document.getElementById("bp-txt-grace").innerText;

  const blueprintText = `📋 MY DE-ESCALATION COORDINATES\n\n` +
                        `1. MY BROKEN CISTERN:\n   ${cis}\n\n` +
                        `2. MY COUNTERFEIT NEED:\n   ${cnt}\n\n` +
                        `3. MY Compulsion LOOP SEQUENCE:\n   ${hab}\n\n` +
                        `4. MY SELF-CONDEMNATION VOICE:\n   ${shm}\n\n` +
                        `5. MY GRACE ANCHOR:\n   ${grc}\n\n` +
                        `Constructed with The Loop Breaker.`;

  navigator.clipboard.writeText(blueprintText)
    .then(() => showToast("Blueprint copied to clipboard!", "success"))
    .catch(() => showToast("Failed to copy clipboard", "error"));
}

// ============================================================
// TAB 7: BILINGUAL SCRIPTURAL GLOSSARY LOGIC
// ============================================================
let glossaryLang = "en"; // "en", "ru", or "bilingual"
let activeGlossaryTag = "all";

function initGlossary() {
  const searchInput = document.getElementById("glossary-search");
  const langToggle = document.getElementById("glossary-lang");
  const tagButtons = document.querySelectorAll(".glossary-tag-btn");

  searchInput.addEventListener("input", renderGlossary);
  langToggle.addEventListener("click", toggleGlossaryLanguage);
  
  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGlossaryTag = btn.dataset.tag;
      renderGlossary();
    });
  });

  renderGlossary();
}

function toggleGlossaryLanguage() {
  const langLabel = document.getElementById("glossary-lang-lbl");
  if (glossaryLang === "en") {
    glossaryLang = "ru";
    langLabel.innerText = "🇷🇺 RU";
    showToast("Switched glossary to Russian", "info");
  } else if (glossaryLang === "ru") {
    glossaryLang = "bilingual";
    langLabel.innerText = "🌐 BILINGUAL";
    showToast("Switched glossary to side-by-side view", "info");
  } else {
    glossaryLang = "en";
    langLabel.innerText = "🇬🇧 EN";
    showToast("Switched glossary to English", "info");
  }
  renderGlossary();
}

function renderGlossary() {
  const container = document.getElementById("glossary-grid");
  const query = document.getElementById("glossary-search").value.toLowerCase().trim();
  
  container.innerHTML = "";

  GLOSSARY_DATA.forEach(item => {
    // Filter by tag
    if (activeGlossaryTag !== "all" && !item.tags.includes(activeGlossaryTag)) return;

    // Filter by search query (match English or Russian terms/definitions)
    const matchesQuery = 
      item.en.term.toLowerCase().includes(query) ||
      item.ru.term.toLowerCase().includes(query) ||
      item.en.synonyms.some(s => s.toLowerCase().includes(query)) ||
      item.ru.synonyms.some(s => s.toLowerCase().includes(query)) ||
      item.en.definition.toLowerCase().includes(query) ||
      item.ru.definition.toLowerCase().includes(query);

    if (query && !matchesQuery) return;

    const card = document.createElement("div");
    card.className = "glossary-card";

    // Setup visual components based on glossaryLang state
    let headerHTML = "";
    let bodyHTML = "";

    if (glossaryLang === "en") {
      headerHTML = `
        <div class="glossary-term-group">
          <h3>${item.en.term}</h3>
          <span class="glossary-translation">${item.ru.term}</span>
        </div>
      `;
      bodyHTML = `
        <div class="glossary-synonyms"><strong>Synonyms:</strong> ${item.en.synonyms.join(", ")}</div>
        <div class="glossary-body-section">
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Definition</span>
            <span class="glossary-section-val">${item.en.definition}</span>
          </div>
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Theological Context</span>
            <span class="glossary-section-val">${item.en.theology}</span>
          </div>
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Psychological Mapping</span>
            <span class="glossary-section-val psych">${item.en.psychology}</span>
          </div>
        </div>
      `;
    } else if (glossaryLang === "ru") {
      headerHTML = `
        <div class="glossary-term-group">
          <h3>${item.ru.term}</h3>
          <span class="glossary-translation">${item.en.term}</span>
        </div>
      `;
      bodyHTML = `
        <div class="glossary-synonyms"><strong>Синонимы:</strong> ${item.ru.synonyms.join(", ")}</div>
        <div class="glossary-body-section">
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Определение</span>
            <span class="glossary-section-val">${item.ru.definition}</span>
          </div>
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Теологический контекст</span>
            <span class="glossary-section-val">${item.ru.theology}</span>
          </div>
          <div class="glossary-section-block">
            <span class="glossary-section-lbl">Психологический механизм</span>
            <span class="glossary-section-val psych">${item.ru.psychology}</span>
          </div>
        </div>
      `;
    } else {
      // BILINGUAL SIDE-BY-SIDE
      headerHTML = `
        <div class="glossary-term-group" style="width: 100%;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1.15rem;">🇬🇧 ${item.en.term}</h3>
            <h3 style="font-size: 1.15rem; text-align: right;">🇷🇺 ${item.ru.term}</h3>
          </div>
        </div>
      `;
      bodyHTML = `
        <div class="glossary-body-section" style="gap: 1.2rem;">
          <div class="glossary-section-block" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <span class="glossary-section-lbl">Definition</span>
              <span class="glossary-section-val" style="font-size:0.8rem; display:block;">${item.en.definition}</span>
            </div>
            <div>
              <span class="glossary-section-lbl">Определение</span>
              <span class="glossary-section-val" style="font-size:0.8rem; display:block;">${item.ru.definition}</span>
            </div>
          </div>
          
          <div class="glossary-section-block" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <span class="glossary-section-lbl">Theological Context</span>
              <span class="glossary-section-val" style="font-size:0.8rem; display:block;">${item.en.theology}</span>
            </div>
            <div>
              <span class="glossary-section-lbl">Теологический контекст</span>
              <span class="glossary-section-val" style="font-size:0.8rem; display:block;">${item.ru.theology}</span>
            </div>
          </div>

          <div class="glossary-section-block" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <span class="glossary-section-lbl">Psychological Mapping</span>
              <span class="glossary-section-val psych" style="font-size:0.8rem; display:block;">${item.en.psychology}</span>
            </div>
            <div>
              <span class="glossary-section-lbl">Психологический механизм</span>
              <span class="glossary-section-val psych" style="font-size:0.8rem; display:block;">${item.ru.psychology}</span>
            </div>
          </div>
        </div>
      `;
    }

    // Render tags pill
    let tagsHTML = `<div style="display:flex; gap:0.3rem; margin-top:auto; padding-top:1rem; border-top:1px dashed var(--border);">`;
    item.tags.forEach(t => {
      tagsHTML += `<span class="glossary-tag-btn active" style="padding: 1px 7px; font-size: 0.58rem; cursor:default;">${t}</span>`;
    });
    tagsHTML += `</div>`;

    card.innerHTML = `
      <div class="glossary-card-header">
        ${headerHTML}
      </div>
      ${bodyHTML}
      ${tagsHTML}
    `;

    container.appendChild(card);
  });

  if (container.children.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--ink-faint); font-family: var(--mono); font-size: 0.88rem;">
        ✕ No matches found for "${query}"
      </div>
    `;
  }
}
