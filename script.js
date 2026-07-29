(function(){
  "use strict";

  let currentLang = "en";

  const chatBody = document.getElementById("chatBody");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const quickChips = document.getElementById("quickChips");

  /* ---------------------------------------------------------
     NORMALIZATION — strip case, punctuation, extra spaces
     --------------------------------------------------------- */
  function normalize(text){
    if(!text) return "";
    let t = text.toLowerCase();
    // Arabic diacritics & tatweel
    t = t.replace(/[\u064B-\u0652\u0670\u0640]/g, "");
    // Normalize Arabic letter variants
    t = t.replace(/[إأآا]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
    // Strip common punctuation: latin, Arabic (،؛؟!"'…) and Japanese (。、！？「」『』・)
    t = t.replace(/[.,!?;:"'’‘“”—\-،؛؟…「」『』・。、~]/g, " ");
    // Collapse whitespace
    t = t.replace(/\s+/g, " ").trim();
    return t;
  }

  /* ---------------------------------------------------------
     INTENT MATCHING
     --------------------------------------------------------- */
  function findResponse(rawInput){
    const input = normalize(rawInput);
    if(!input) return DEFAULT_RESPONSE[currentLang];

    let best = null;
    let bestScore = 0;

    MATCHA_INTENTS.forEach(intent => {
      const keywords = intent.keywords[currentLang] || [];
      let score = 0;
      keywords.forEach(kw => {
        const nk = normalize(kw);
        if(nk && input.includes(nk)){
          // longer / multi-word keyword matches are weighted higher
          score += nk.split(" ").length;
        }
      });
      if(score > bestScore){
        bestScore = score;
        best = intent;
      }
    });

    return best ? best.response[currentLang] : DEFAULT_RESPONSE[currentLang];
  }

  /* ---------------------------------------------------------
     RENDERING
     --------------------------------------------------------- */
  function appendMessage(text, sender){
    const row = document.createElement("div");
    row.className = "msg msg--" + sender;
    const bubble = document.createElement("div");
    bubble.className = "msg__bubble";
    bubble.textContent = text;
    row.appendChild(bubble);
    chatBody.appendChild(row);
    scrollToBottom();
  }

  function showTyping(){
    const row = document.createElement("div");
    row.className = "msg msg--bot";
    row.id = "typingRow";
    row.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
    chatBody.appendChild(row);
    scrollToBottom();
  }

  function hideTyping(){
    const row = document.getElementById("typingRow");
    if(row) row.remove();
  }

  function scrollToBottom(){
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleUserMessage(text){
    if(!text || !text.trim()) return;
    appendMessage(text.trim(), "user");
    showTyping();
    const delay = 550 + Math.random() * 500;
    setTimeout(() => {
      hideTyping();
      appendMessage(findResponse(text), "bot");
    }, delay);
  }

  /* ---------------------------------------------------------
     QUICK CHIPS
     --------------------------------------------------------- */
  function renderChips(){
    quickChips.innerHTML = "";
    const chips = TRANSLATIONS[currentLang].quick;
    chips.forEach(chip => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.textContent = `${chip.icon} ${chip.label}`;
      btn.addEventListener("click", () => handleUserMessage(chip.label));
      quickChips.appendChild(btn);
    });
  }

  /* ---------------------------------------------------------
     LANGUAGE SWITCHING
     --------------------------------------------------------- */
  function applyTranslations(){
    const t = TRANSLATIONS[currentLang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = t;
      path.forEach(p => { val = val ? val[p] : null; });
      if(val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const path = el.getAttribute("data-i18n-placeholder").split(".");
      let val = t;
      path.forEach(p => { val = val ? val[p] : null; });
      if(val) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-switch__btn").forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderChips();
  }

  function setLanguage(lang){
    if(!TRANSLATIONS[lang] || lang === currentLang){
      if(!TRANSLATIONS[lang]) return;
    }
    currentLang = lang;
    applyTranslations();
    // Reset conversation with a fresh welcome message in the new language
    chatBody.innerHTML = "";
    appendMessage(TRANSLATIONS[currentLang].chat.welcome, "bot");
  }

  /* ---------------------------------------------------------
     EVENTS
     --------------------------------------------------------- */
  document.querySelectorAll(".lang-switch__btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = chatInput.value;
    chatInput.value = "";
    handleUserMessage(value);
  });

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  applyTranslations();
  appendMessage(TRANSLATIONS[currentLang].chat.welcome, "bot");
})();
