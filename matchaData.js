// matchaData.js — the rule-based brain of Midori. No AI, just intents & keywords.
const MATCHA_INTENTS = [
  {
    id: "who_are_you",
    keywords: {
      en: ["who are you", "your name", "what are you", "introduce yourself"],
      ar: ["من انت", "ما اسمك", "من أنتِ", "عرفي نفسك", "من هي ميدوري"],
      ja: ["あなたは誰", "名前は", "自己紹介", "ミドリとは"]
    },
    response: {
      en: "I'm Midori 緑 — a small, calm assistant built to talk about one thing only: matcha. Think of me as the quiet host of this tea house, here to answer your questions carefully.",
      ar: "أنا ميدوري 緑 — مساعدة هادئة صُممت للحديث عن شيء واحد فقط: الماتشا. اعتبريني مضيفة هادئة في بيت الشاي هذا، هنا للإجابة عن أسئلتك بعناية.",
      ja: "私はミドリ 緑 — 抹茶についてだけお話しする、静かなアシスタントです。この茶室の案内役だと思ってください。丁寧にお答えします。"
    }
  },
  {
    id: "what_can_you_do",
    keywords: {
      en: ["what can you do", "help me", "capabilities", "what do you know", "how can you help"],
      ar: ["ماذا تفعلين", "بماذا يمكنك مساعدتي", "ماذا تعرفين", "قدراتك"],
      ja: ["何ができる", "何を知っている", "手伝って", "できること"]
    },
    response: {
      en: "I can help with matcha preparation, health benefits, caffeine content, storage tips, the difference between ceremonial and culinary grades, and gentle advice for beginners. Just ask.",
      ar: "يمكنني مساعدتك في طريقة تحضير الماتشا، فوائدها الصحية، محتواها من الكافيين، نصائح الحفظ، والفرق بين الدرجة الطقسية والعادية، ونصائح لطيفة للمبتدئين. فقط اسأليني.",
      ja: "抹茶の点て方、健康効果、カフェイン量、保存のコツ、点前用と料理用の違い、初心者へのアドバイスなどをお伝えできます。何でも聞いてください。"
    }
  },
  {
    id: "what_is_matcha",
    keywords: {
      en: ["what is matcha", "define matcha", "matcha meaning", "explain matcha"],
      ar: ["ما هي الماتشا", "ما الماتشا", "عرفي الماتشا", "ما معنى ماتشا"],
      ja: ["抹茶とは", "抹茶って何", "抹茶の説明", "抹茶について教えて"]
    },
    response: {
      en: "Matcha is a finely stone-ground powder made from shade-grown green tea leaves. Unlike steeped tea, you consume the whole leaf whisked into water, which gives it a fuller flavor and a gentle, sustained lift.",
      ar: "الماتشا هي مسحوق ناعم مطحون بالحجر من أوراق الشاي الأخضر المزروعة في الظل. وعلى عكس الشاي المنقوع، فإنك تتناولين الورقة كاملة ممزوجة بالماء، مما يمنحها نكهة أغنى وطاقة هادئة ومستمرة.",
      ja: "抹茶は、日陰で育てた緑茶の葉を石臼で細かく挽いた粉末です。煎じるお茶と違い、葉そのものを丸ごとお湯や水に点てて飲むため、より深い味わいと穏やかで持続する活力が得られます。"
    }
  },
  {
    id: "how_to_prepare",
    keywords: {
      en: ["how to prepare", "how do i make", "how to make matcha", "whisk matcha", "brew matcha", "recipe"],
      ar: ["كيف احضر", "كيف اصنع الماتشا", "طريقة تحضير", "كيف اخفق الماتشا", "وصفة"],
      ja: ["点て方", "作り方", "淹れ方", "レシピ", "泡立て"]
    },
    response: {
      en: "Sift 1–2 teaspoons of matcha into a bowl to remove clumps, add a splash of water just off the boil (around 80°C), then whisk briskly in a W motion with a bamboo whisk until a fine foam forms. Add more water to taste.",
      ar: "انخلي ملعقة إلى ملعقتين صغيرتين من الماتشا في وعاء للتخلص من التكتلات، أضيفي القليل من الماء بعد الغليان بقليل (حوالي 80 درجة مئوية)، ثم اخفقيها بسرعة بحركة على شكل حرف W باستخدام مضرب الخيزران حتى تتكوّن رغوة ناعمة. أضيفي المزيد من الماء حسب الرغبة.",
      ja: "抹茶を1〜2さじ茶こしでふるい、ダマを取り除きます。80度前後のお湯を少量加え、茶筅で「W」を描くように素早く点て、きめ細かい泡を立てます。お好みでお湯を足してください。"
    }
  },
  {
    id: "healthy_benefits",
    keywords: {
      en: ["is matcha healthy", "matcha benefits", "good for you", "healthy", "antioxidants", "nutrition"],
      ar: ["هل الماتشا صحية", "فوائد الماتشا", "مضادات الأكسدة", "فوائد صحية"],
      ja: ["体にいい", "抹茶 効果", "健康", "抗酸化", "栄養"]
    },
    response: {
      en: "Yes — matcha is rich in antioxidants called catechins (especially EGCG), supports metabolism, and contains L-theanine, an amino acid known for calm, focused energy. It's best enjoyed as part of a balanced routine.",
      ar: "نعم — الماتشا غنية بمضادات الأكسدة المعروفة باسم الكاتيكينات (خصوصًا EGCG)، وتدعم عملية الأيض، وتحتوي على مادة L-theanine، وهي حمض أميني معروف بمنحه طاقة هادئة ومركزة. يُفضل الاستمتاع بها كجزء من نمط حياة متوازن.",
      ja: "はい、抹茶にはカテキン（特にEGCG）と呼ばれる抗酸化物質が豊富で、代謝をサポートします。また、穏やかな集中力をもたらすアミノ酸「L-テアニン」も含まれています。バランスの良い生活の一部としてお楽しみください。"
    }
  },
  {
    id: "caffeine",
    keywords: {
      en: ["caffeine", "does matcha have caffeine", "how much caffeine"],
      ar: ["كافيين", "هل تحتوي الماتشا على كافيين", "كمية الكافيين"],
      ja: ["カフェイン", "カフェインは入っていますか", "カフェイン量"]
    },
    response: {
      en: "Yes, matcha naturally contains caffeine — roughly 30–70mg per serving, a bit more than a cup of steeped green tea. Thanks to L-theanine, though, the energy tends to feel steadier, without the sharp crash.",
      ar: "نعم، تحتوي الماتشا بشكل طبيعي على الكافيين — حوالي 30 إلى 70 ملغم لكل حصة، وهي كمية أكبر قليلًا من كوب الشاي الأخضر المنقوع. لكن بفضل مادة L-theanine، تميل الطاقة إلى أن تكون أكثر ثباتًا دون هبوط مفاجئ.",
      ja: "はい、抹茶には自然にカフェインが含まれています。1杯あたり約30〜70mgで、煎茶よりやや多めです。ただしL-テアニンのおかげで、急激な低下のない穏やかな持続感が得られます。"
    }
  },
  {
    id: "milk_or_water",
    keywords: {
      en: ["matcha with milk", "matcha latte", "milk or water", "matcha and milk"],
      ar: ["الماتشا مع الحليب", "ماتشا لاتيه", "حليب او ماء"],
      ja: ["牛乳で作ってもいい", "抹茶ラテ", "ミルク", "牛乳"]
    },
    response: {
      en: "Both are lovely. Traditional matcha is whisked with water alone, letting the flavor shine. For a softer, creamier cup, whisk a concentrated matcha with steamed milk — the classic matcha latte.",
      ar: "كلاهما رائع. تُحضّر الماتشا التقليدية بالماء وحده، مما يبرز نكهتها. وللحصول على كوب أكثر نعومة وقوامًا كريميًا، اخفقي ماتشا مركزة مع حليب مبخّر — وهذا هو ماتشا لاتيه الكلاسيكي.",
      ja: "どちらも素敵です。伝統的な抹茶は水またはお湯だけで点て、味わいを引き立てます。よりまろやかに楽しみたいときは、濃いめの抹茶をスチームミルクと合わせる定番の抹茶ラテがおすすめです。"
    }
  },
  {
    id: "storage",
    keywords: {
      en: ["store matcha", "storage", "keep matcha fresh", "shelf life", "how to store"],
      ar: ["كيف احفظ الماتشا", "تخزين", "مدة الصلاحية", "حفظ الماتشا طازجة"],
      ja: ["保存方法", "保存", "賞味期限", "新鮮に保つ"]
    },
    response: {
      en: "Keep matcha airtight, away from light, heat, and moisture — ideally in the refrigerator. Once opened, try to use it within four to six weeks for the brightest flavor and color.",
      ar: "احفظي الماتشا في وعاء محكم الإغلاق، بعيدًا عن الضوء والحرارة والرطوبة — ويُفضّل في الثلاجة. وبعد فتحها، حاولي استخدامها خلال أربعة إلى ستة أسابيع للحصول على أفضل نكهة ولون.",
      ja: "抹茶は密閉容器に入れ、光・熱・湿気を避けて保存してください。冷蔵庫での保管が理想的です。開封後は4〜6週間以内に使い切ると、鮮やかな色と味わいを楽しめます。"
    }
  },
  {
    id: "why_bitter",
    keywords: {
      en: ["bitter", "why is matcha bitter", "bitterness", "too bitter"],
      ar: ["مر", "لماذا الماتشا مرة", "مرارة", "طعم مر"],
      ja: ["苦い", "なぜ苦い", "苦味"]
    },
    response: {
      en: "A little bitterness is natural, but if it feels overwhelming, try water that's cooler than boiling (around 75–80°C), a higher grade of matcha, or slightly less powder — bitterness often signals water that's too hot.",
      ar: "القليل من المرارة أمر طبيعي، ولكن إذا شعرتِ أنها مبالغ فيها، جرّبي ماءً أبرد من الغليان (حوالي 75 إلى 80 درجة مئوية)، أو درجة أعلى من الماتشا، أو كمية أقل قليلًا من المسحوق — فالمرارة غالبًا ما تدل على أن الماء كان ساخنًا جدًا.",
      ja: "少しの苦味は自然なものですが、強すぎると感じる場合は、お湯の温度を75〜80度くらいに下げる、より高品質な抹茶を使う、または粉の量を少し減らしてみてください。苦味はお湯が熱すぎるサインであることが多いです。"
    }
  },
  {
    id: "ceremonial_vs_culinary",
    keywords: {
      en: ["ceremonial", "culinary", "grade", "ceremonial vs culinary", "which grade"],
      ar: ["الطقسية", "العادية", "درجة الماتشا", "الفرق بين الدرجات"],
      ja: ["点前用", "料理用", "グレード", "違い"]
    },
    response: {
      en: "Ceremonial grade is made from the youngest leaves, ground finest, and meant to be whisked with water alone — smooth and delicate. Culinary grade is slightly more robust, ideal for lattes, baking, and cooking.",
      ar: "الدرجة الطقسية تُصنع من أصغر الأوراق، وتُطحن بشكل أنعم، وتُقصد للخفق مع الماء وحده — بنكهة ناعمة ورقيقة. أما الدرجة العادية فهي أقوى قليلًا، ومثالية للاتيه والخبز والطهي.",
      ja: "点前用（セレモニアルグレード）は最も若い葉を最も細かく挽いたもので、水だけで点てる繊細な味わいが特徴です。料理用（カリナリーグレード）はやや力強く、ラテやお菓子作り、料理に適しています。"
    }
  },
  {
    id: "best_for_beginners",
    keywords: {
      en: ["beginner", "new to matcha", "just starting", "first time", "im a beginner"],
      ar: ["مبتدئ", "جديد على الماتشا", "اول مرة", "بداية"],
      ja: ["初心者", "初めて", "始めたばかり"]
    },
    response: {
      en: "Welcome — start gently. Choose a mild ceremonial or premium grade, try a matcha latte with milk first if pure matcha feels strong, and use slightly cooler water to ease into the flavor.",
      ar: "أهلًا بكِ — ابدئي بلطف. اختاري درجة طقسية خفيفة أو درجة ممتازة، وجرّبي ماتشا لاتيه بالحليب أولًا إذا شعرتِ أن الماتشا النقية قوية، واستخدمي ماءً أبرد قليلًا لتعتاد ذائقتك على النكهة تدريجيًا.",
      ja: "ようこそ — まずは優しく始めましょう。マイルドな点前用や上質なグレードを選び、純粋な抹茶が濃く感じたら牛乳を加えたラテから試してみてください。少しぬるめのお湯を使うと味に慣れやすくなります。"
    }
  },
  {
    id: "best_time",
    keywords: {
      en: ["best time to drink", "when to drink matcha", "morning or afternoon"],
      ar: ["افضل وقت لشرب الماتشا", "متى اشرب الماتشا", "الصباح ام المساء"],
      ja: ["飲むタイミング", "いつ飲む", "朝 抹茶"]
    },
    response: {
      en: "Morning or early afternoon tends to work best, so its gentle caffeine doesn't interfere with sleep. Many people enjoy it right after breakfast, as a calm, focused start to the day.",
      ar: "يُفضّل شربها في الصباح أو بداية بعد الظهر، حتى لا يؤثر كافيينها اللطيف على النوم. يستمتع كثيرون بشربها بعد الإفطار مباشرة، كبداية هادئة ومركّزة لليوم.",
      ja: "朝または午後の早い時間がおすすめです。穏やかなカフェインが睡眠に影響しにくくなります。朝食後に飲んで、落ち着いた集中力のある一日を始める方も多いです。"
    }
  },
  {
    id: "daily_drinking",
    keywords: {
      en: ["every day", "daily", "how often", "can i drink matcha daily"],
      ar: ["كل يوم", "يوميا", "كم مرة", "شرب الماتشا يوميا"],
      ja: ["毎日", "毎日飲んでも", "頻度"]
    },
    response: {
      en: "For most people, one to two cups a day is a comfortable amount, enjoyed as part of a varied diet. As with any caffeinated drink, it's worth listening to how your body responds.",
      ar: "بالنسبة لمعظم الناس، يُعد تناول كوب إلى كوبين يوميًا كمية مريحة، ضمن نظام غذائي متنوع. وكما هو الحال مع أي مشروب يحتوي على الكافيين، من المفيد الانتباه لاستجابة جسمك.",
      ja: "多くの方にとって、1日1〜2杯が心地よい量です。バランスの良い食生活の一部としてお楽しみください。カフェインを含む飲み物と同様、体の反応に耳を傾けることも大切です。"
    }
  },
  {
    id: "focus_energy",
    keywords: {
      en: ["focus", "energy", "concentration", "give energy", "help me focus"],
      ar: ["تركيز", "طاقة", "تمنح طاقة", "تساعد على التركيز"],
      ja: ["集中", "元気になる", "エネルギー", "集中力"]
    },
    response: {
      en: "Yes — the pairing of caffeine and L-theanine in matcha is often described as offering calm, focused energy, without the jitteriness of coffee. Many use it as a quiet companion for deep work.",
      ar: "نعم — يُوصف مزيج الكافيين ومادة L-theanine في الماتشا غالبًا بأنه يمنح طاقة هادئة ومركزة، دون العصبية المصاحبة للقهوة. يستخدمها كثيرون كرفيق هادئ أثناء العمل العميق.",
      ja: "はい、抹茶に含まれるカフェインとL-テアニンの組み合わせは、コーヒーのような神経過敏さを伴わない、穏やかで集中した活力をもたらすと言われています。深い集中作業のお供にする方も多いです。"
    }
  },
  {
    id: "desserts",
    keywords: {
      en: ["dessert", "baking", "matcha cake", "cooking with matcha", "recipes with matcha"],
      ar: ["حلويات", "خبز", "كيك ماتشا", "الطبخ بالماتشا"],
      ja: ["デザート", "お菓子", "抹茶ケーキ", "料理"]
    },
    response: {
      en: "Absolutely — matcha is wonderful in cakes, cookies, ice cream, and even chocolate. Culinary grade works best here, since its slightly bolder flavor holds up beautifully against sugar and cream.",
      ar: "بالتأكيد — الماتشا رائعة في الكيك والبسكويت والآيس كريم وحتى الشوكولاتة. تعمل الدرجة العادية بشكل أفضل هنا، لأن نكهتها الأقوى قليلًا تتماسك بشكل جميل أمام السكر والقشدة.",
      ja: "もちろんです — 抹茶はケーキ、クッキー、アイスクリーム、チョコレートにもよく合います。料理用グレードのやや力強い風味は、砂糖やクリームとの相性が抜群です。"
    }
  },
  {
    id: "thank_you",
    keywords: {
      en: ["thank you", "thanks", "appreciate it", "thank u"],
      ar: ["شكرا", "شكرًا", "ممتنة", "يعطيك العافية"],
      ja: ["ありがとう", "感謝", "サンキュー"]
    },
    response: {
      en: "You're very welcome. It's my pleasure to talk about matcha with you — come back anytime you're curious.",
      ar: "على الرحب والسعة. تسعدني دائمًا فرصة الحديث عن الماتشا معك — عودي في أي وقت يراودك فيه الفضول.",
      ja: "どういたしまして。抹茶についてお話しできて嬉しいです。またいつでも聞いてくださいね。"
    }
  },
  {
    id: "goodbye",
    keywords: {
      en: ["bye", "goodbye", "see you", "farewell"],
      ar: ["مع السلامة", "وداعا", "الى اللقاء", "باي"],
      ja: ["さようなら", "またね", "バイバイ"]
    },
    response: {
      en: "Goodbye for now — may your next cup be a calm one. 🍵",
      ar: "إلى اللقاء الآن — أتمنى أن يكون كوبك القادم هادئًا. 🍵",
      ja: "また今度お会いしましょう。次の一杯が穏やかな時間になりますように。🍵"
    }
  }
];

// Default / out-of-scope response, shown when no intent matches
const DEFAULT_RESPONSE = {
  en: "I'm sorry, I only answer Matcha-related questions.",
  ar: "عذرًا، أنا متخصصة في الماتشا فقط 🍵",
  ja: "申し訳ありません。私は抹茶に関する質問のみお答えできます。"
};
