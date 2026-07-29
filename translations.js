// translations.js — UI copy for Midori, in English / Arabic / Japanese
const TRANSLATIONS = {
  en: {
    dir: "ltr",
    lang: "en",
    nav: { home: "Home", chat: "Talk to Midori" },
    hero: {
      eyebrow: "A quiet corner of the tea house",
      title: "Midori",
      titleJp: "緑",
      tagline: "Your Matcha Assistant",
      intro:
        "Welcome. I'm Midori. I can answer common questions about matcha — its preparation, health benefits, storage, and beginner tips.",
      sub: "Choose one of the quick questions below, or type your own.",
      cta: "Begin the conversation",
      scroll: "Scroll to chat"
    },
    chat: {
      headerName: "Midori",
      headerStatus: "Here to help, always calm",
      placeholder: "Ask Midori about matcha…",
      send: "Send",
      quickTitle: "Or start with one of these",
      typing: "Midori is thinking…",
      welcome:
        "Welcome, I'm glad you're here. Ask me anything about matcha — I'm listening."
    },
    footer: {
      note: "Midori is a rule-based assistant. No AI, no servers — just careful answers about matcha.",
    },
    quick: [
      { icon: "🍵", key: "what_is_matcha", label: "What is Matcha?" },
      { icon: "🌱", key: "beginner", label: "I'm a beginner" },
      { icon: "💚", key: "healthy", label: "Is Matcha healthy?" },
      { icon: "☕", key: "caffeine", label: "Does Matcha contain caffeine?" },
      { icon: "🥛", key: "milk", label: "Matcha with milk?" },
      { icon: "🍃", key: "bitter", label: "Why is Matcha bitter?" },
      { icon: "❄️", key: "storage", label: "How should I store Matcha?" },
      { icon: "✨", key: "ceremonial", label: "Ceremonial vs Culinary" },
      { icon: "🫖", key: "prepare", label: "How do I prepare Matcha?" },
      { icon: "⚡", key: "energy", label: "Does Matcha give energy?" }
    ]
  },

  ar: {
    dir: "rtl",
    lang: "ar",
    nav: { home: "الرئيسية", chat: "تحدث مع ميدوري" },
    hero: {
      eyebrow: "ركن هادئ في بيت الشاي",
      title: "ميدوري",
      titleJp: "緑",
      tagline: "مساعدتك في عالم الماتشا",
      intro:
        "أهلًا بك. أنا ميدوري. يمكنني الإجابة عن أكثر الأسئلة شيوعًا حول الماتشا — طريقة التحضير، فوائدها الصحية، طرق الحفظ، ونصائح للمبتدئين.",
      sub: "اختر أحد الأسئلة السريعة أدناه، أو اكتب سؤالك الخاص.",
      cta: "ابدئي المحادثة",
      scroll: "انتقل إلى المحادثة"
    },
    chat: {
      headerName: "ميدوري",
      headerStatus: "هنا للمساعدة، بهدوء دائمًا",
      placeholder: "اسأل ميدوري عن الماتشا…",
      send: "إرسال",
      quickTitle: "أو ابدأ بأحد هذه الأسئلة",
      typing: "ميدوري تفكر…",
      welcome: "أهلًا بك، يسعدني وجودك هنا. اسألني أي شيء عن الماتشا — أنا أستمع."
    },
    footer: {
      note: "ميدوري مساعدة قائمة على قواعد محددة. بلا ذكاء اصطناعي، وبلا خوادم — فقط إجابات موثوقة حول الماتشا.",
    },
    quick: [
      { icon: "🍵", key: "what_is_matcha", label: "ما هي الماتشا؟" },
      { icon: "🌱", key: "beginner", label: "أنا مبتدئ" },
      { icon: "💚", key: "healthy", label: "هل الماتشا صحية؟" },
      { icon: "☕", key: "caffeine", label: "هل تحتوي الماتشا على كافيين؟" },
      { icon: "🥛", key: "milk", label: "الماتشا مع الحليب؟" },
      { icon: "🍃", key: "bitter", label: "لماذا طعم الماتشا مر؟" },
      { icon: "❄️", key: "storage", label: "كيف أحفظ الماتشا؟" },
      { icon: "✨", key: "ceremonial", label: "الماتشا الطقسية مقابل العادية" },
      { icon: "🫖", key: "prepare", label: "كيف أحضّر الماتشا؟" },
      { icon: "⚡", key: "energy", label: "هل تمنح الماتشا طاقة؟" }
    ]
  },

  ja: {
    dir: "ltr",
    lang: "ja",
    nav: { home: "ホーム", chat: "ミドリと話す" },
    hero: {
      eyebrow: "静かな茶室の片隅で",
      title: "Midori",
      titleJp: "緑",
      tagline: "あなたの抹茶アシスタント",
      intro:
        "ようこそ。私はミドリです。抹茶についてのよくある質問にお答えします — 点て方、健康効果、保存方法、初心者向けのコツなど。",
      sub: "下のクイック質問から選ぶか、自由に入力してください。",
      cta: "会話をはじめる",
      scroll: "チャットへ進む"
    },
    chat: {
      headerName: "ミドリ",
      headerStatus: "いつも穏やかにお手伝いします",
      placeholder: "抹茶について聞いてみてください…",
      send: "送信",
      quickTitle: "こちらから始めることもできます",
      typing: "ミドリが考えています…",
      welcome: "ようこそ、来てくれて嬉しいです。抹茶について何でも聞いてください。"
    },
    footer: {
      note: "ミドリはルールベースのアシスタントです。AIもサーバーも使わず、抹茶についての丁寧な回答をお届けします。",
    },
    quick: [
      { icon: "🍵", key: "what_is_matcha", label: "抹茶とは？" },
      { icon: "🌱", key: "beginner", label: "初心者です" },
      { icon: "💚", key: "healthy", label: "抹茶は体にいいですか？" },
      { icon: "☕", key: "caffeine", label: "カフェインは入っていますか？" },
      { icon: "🥛", key: "milk", label: "牛乳で作ってもいい？" },
      { icon: "🍃", key: "bitter", label: "なぜ抹茶は苦いの？" },
      { icon: "❄️", key: "storage", label: "保存方法は？" },
      { icon: "✨", key: "ceremonial", label: "点前用と料理用の違い" },
      { icon: "🫖", key: "prepare", label: "点て方を教えて" },
      { icon: "⚡", key: "energy", label: "抹茶で元気になる？" }
    ]
  }
};
