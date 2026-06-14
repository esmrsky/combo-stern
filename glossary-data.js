// ============================================================
// BILINGUAL GLOSSARY DATABASE
// ============================================================
const GLOSSARY_DATA = [
  {
    "id": "broken_cistern",
    "en": {
      "term": "Broken Cistern",
      "synonyms": ["Leaky pit", "Self-reliance", "Stagnant well", "Man-made source"],
      "definition": "A man-made rainwater cavity hewed out of porous limestone that has cracked, rendering it unable to hold water. Metaphorically, it represents seeking ultimate security, worth, and validation from finite, unstable human structures rather than the self-existent Source.",
      "theology": "Originates in Jeremiah 2:13, where God accuses Israel of committing two evils: forsaking Him, the fountain of living waters, and carving out broken cisterns (*borot nišbārîm*) that leak dry.",
      "psychology": "A self-defeating coping mechanism where a legitimate need is routed to a proxy behavior. Since the proxy cannot satisfy the core deficit, the emotional tank leaks, driving compulsive repetition."
    },
    "ru": {
      "term": "Разбитый водоем",
      "synonyms": ["Разбитый колодец", "Треснувший резервуар", "Собственные усилия", "Опора на себя"],
      "definition": "Высеченный человеком в пористом известняке резервуар для сбора дождевой воды, который дал трещины и потерял герметичность. Метафорически означает попытку обрести базовую безопасность и ценность в конечных ресурсах вместо бесконечного Источника.",
      "theology": "Восходит к Иеремии 2:13, где Бог обвиняет Израиль в двух заветах: они оставили Его, Источник живой воды, и высекли себе треснувшие водоемы (*борот нишбарим*), неспособные удерживать влагу.",
      "psychology": "Обреченный на провал копинг-механизм, при котором реальная потребность направляется на суррогатное поведение. Поскольку суррогат не утоляет дефицит, эмоциональный резервуар быстро пустеет, вызывая навязчивое повторение."
    },
    "tags": ["Theological", "Scripture", "Psychological"]
  },
  {
    "id": "living_water",
    "en": {
      "term": "Living Water",
      "synonyms": ["Artesian spring", "Unearned grace", "Infinite source", "Abundant stream"],
      "definition": "Self-sustaining, actively flowing aerated water from a natural artesian spring. In Hebrew idioms, it stands in direct contrast to stagnant cistern water, representing a source of life that requires no human labor to construct.",
      "theology": "Jeremiah's *meqôr mayim ḥayyîm* (spring of living waters) and Jesus's promise in John 4:14 of an internal *pēgē* (spring) welling up to eternal life, completely independent of human works.",
      "psychology": "An integrated emotional state where self-worth is received as a secure, unconditional gift. This eliminates the frantic compulsion to draw validation from external performance metrics."
    },
    "ru": {
      "term": "Живая вода",
      "synonyms": ["Природный источник", "Родник", "Дарованная благодать", "Бесконечный ресурс"],
      "definition": "Самоизливающаяся, чистая проточная вода из природного источника. В древнееврейской идиоматике противопоставляется стоячей воде из резервуара и символизирует источник жизни, не требующий человеческого труда для его создания.",
      "theology": "Иеремиевское выражение *мекор маим хайим* (источник живой воды) и обещание Христа в Иоанна 4:14 о внутреннем источнике (*пеге*), бьющем в жизнь вечную без усилий со стороны человека.",
      "psychology": "Интегрированное эмоциональное состояние, когда самооценка принимается как безусловный дар. Это устраняет паническую потребность черпать подтверждение своей ценности из внешних показателей."
    },
    "tags": ["Theological", "Scripture", "Psychological"]
  },
  {
    "id": "works",
    "en": {
      "term": "Works",
      "synonyms": ["Performance treadmill", "Self-justification", "Striving engine", "Law-based living"],
      "definition": "The structural system wherein human effort is deployed to generate worth, earn standing, and secure status. Worth is treated as the volatile prize at the end of the behavior rather than the starting point.",
      "theology": "Paul's concept of 'works of the law' (*erga nomou*), an external code that demands performance but supplies no internal power, provoking fleshly rebellion (Romans 7) and transactional religion.",
      "psychology": "Striving behavior fueled by an underlying worth-deficit. When performance metrics are tied to basic safety, willpower is constantly depleted to maintain status."
    },
    "ru": {
      "term": "Дела закона",
      "synonyms": ["Достиженчество", "Самооправдание", "Попытка заслужить", "Законничество"],
      "definition": "Структурная система, при которой усилия человека направлены на то, чтобы заслужить ценность, статус и право на принятие. Ценность здесь — колеблющийся приз в конце пути, а не исходная точка.",
      "theology": "Апостольское понятие «дел закона» (*эрга ному*): внешнего кодекса, который требует исполнения, но не дает внутренних сил, провоцируя бунт плоти (Римлянам 7) и контрактную религию.",
      "psychology": "Поведение достижения, подпитываемое дефицитом самоценности. Когда показатели успеваемости связаны с базовой безопасностью, воля постоянно истощается для удержания статуса."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "grace",
    "en": {
      "term": "Grace",
      "synonyms": ["Received standing", "Unconditional acceptance", "Secure adoption", "Free gift"],
      "definition": "A state of secure status and unconditional value given as a free gift. Worth is established prior to any performance, turning good behaviors from a transaction to earn status into an overflow of gratitude.",
      "theology": "The Greek *charis*—unmerited favor. In Pauline theology, it shifts the sequence: 'no condemnation' (Rom 8:1) and secure adoption (*huiothesia*) precede and empower moral behavior.",
      "psychology": "The psychological release point where the self is completely decoupled from performance ranking, allowing nervous system recovery, cognitive clarity, and organic satisfaction."
    },
    "ru": {
      "term": "Благодать",
      "synonyms": ["Принятый статус", "Безусловное принятие", "Усыновление", "Бесплатный дар"],
      "definition": "Состояние безопасности и безусловной ценности, дарованное даром. Ценность утверждается до каких-либо действий, превращая доброе поведение из сделки по покупке статуса в переливающийся избыток благодарности.",
      "theology": "Греческое слово *харис* — незаслуженная милость. В теологии Павла меняется последовательность: «нет осуждения» (Рим 8:1) и усыновление (*хуйотезия*) предшествуют и дают силу доброму поведению.",
      "psychology": "Точка психологического освобождения, когда Я полностью отделено от рейтинга достижений, что обеспечивает восстановление нервной системы, когнитивную ясность и глубокое удовлетворение."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "shame",
    "en": {
      "term": "Shame",
      "synonyms": ["Self-condemnation", "Identity deficit", "Wretchedness", "Hide-and-seek response"],
      "definition": "The painful emotional state arising from the belief that one is fundamentally defective, rejected, or unworthy of love. In the compulsion loop, shame acts as the volatile fuel that accelerates the next relapse.",
      "theology": "The immediate post-Fall response in Eden (Genesis 3)—hiding, covering with leaves, and fear. Also Paul's *katakrima* (penal servitude/condemnation) which binds the soul to self-hatred.",
      "psychology": "A high-stress feedback loop. When willpower fails to sustain the counterfeit cistern, the ego attacks itself. The resulting emotional distress triggers a craving for immediate numbing/escape, resetting the loop."
    },
    "ru": {
      "term": "Стыд",
      "synonyms": ["Самоосуждение", "Чувство ущербности", "Самообвинение", "Реакция сокрытия"],
      "definition": "Болезненное эмоциональное состояние, возникающее из убеждения в своей фундаментальной неполноценности, отверженности или недостоинстве. В цикле навязчивого поведения стыд служит топливом для рецива.",
      "theology": "Первая реакция после грехопадения в Эдеме (Бытие 3) — попытка спрятаться, прикрыться листьями и страх. Также понятие *катакрима* (осуждение/уголовное рабство) у Павла, приковывающее душу к самоненависти.",
      "psychology": "Высокострессовая обратная связь. Когда воля не справляется с поддержанием ложного источника, эго атакует само себя. Возникающий душевный дискомфорт требует немедленного обезболивания, замыкая цикл."
    },
    "tags": ["Psychological", "Theological", "Scripture"]
  },
  {
    "id": "willpower",
    "en": {
      "term": "Willpower",
      "synonyms": ["Ego depletion", "White-knuckling", "Moral resolve", "Self-effort"],
      "definition": "The conscious, effortful capacity to regulate behavior, resist impulses, and force compliance. When treated as the ultimate source of moral victory, it behaves like a leaky cistern that inevitably runs dry under stress.",
      "theology": "The condition of *talaipōros* (Romans 7:24)—worn down by calloused labor. Striving to please the external standard of the Law using only the resources of the flesh (*sarx*).",
      "psychology": "An energy-depleting executive control system. Relying solely on willpower to suppress cravings is a closed-system struggle of 'the self out-muscling the self,' which fails under fatigue or elevated stress."
    },
    "ru": {
      "term": "Сила воли",
      "synonyms": ["Волевое подавление", "Сжатие зубов", "Моральная решимость", "Самоконтроль"],
      "definition": "Сознательная, требующая усилий способность регулировать поведение, сопротивляться импульсам и принуждать себя к действиям. При использовании в качестве главного источника изменений быстро истощается под нагрузкой.",
      "theology": "Состояние *талаипорос* (Римлянам 7:24) — изнуренный, покрытый мозолями раб. Стремление соответствовать внешнему стандарту Закона, опираясь исключительно на ресурсы плоти (*саркс*).",
      "psychology": "Истощаемая система исполнительного контроля. Попытка подавить тягу одной силой воли — это закрытая борьба «Я против самого себя», которая ломается при переутомлении или росте стресса."
    },
    "tags": ["Psychological", "Theological"]
  },
  {
    "id": "counterfeit",
    "en": {
      "term": "Counterfeit",
      "synonyms": ["Proxy metric", "False filler", "Surgate reward", "Idol"],
      "definition": "A cheap, easily accessible substitute that mimics the properties of a true source. It temporarily quiets the alarm of an underlying need but leaves the core deficit untouched or exacerbated.",
      "theology": "The essence of idolatry: exchanging the glory of the incorruptible God for images (Rom 1:23) or trading the *Meqôr* (spring) for a *Bōr* (cistern) that collects silt and cracks.",
      "psychology": "Dopamine-driven cues (e.g., app streaks, metrics, binge-eating) that trigger immediate, short-term reward signals. Because they do not satisfy the actual need (rest, connection), they promote addictive craving."
    },
    "ru": {
      "term": "Подделка",
      "synonyms": ["Суррогат", "Ложный источник", "Идол", "Прокси-показатель"],
      "definition": "Дешевый, легкодоступный заменитель, имитирующий свойства истинного источника. Он временно заглушает сигнал тревоги о неудовлетворенной потребности, но оставляет дефицит нетронутым.",
      "theology": "Суть идолопоклонства: обмен славы нетленного Бога на образы (Рим 1:23) или замена *Мекора* (родника) на *Бор* (колодец), который собирает ил и трескается.",
      "psychology": "Дофаминовые триггеры (полосы активности в приложениях, лайки, переедание), вызывающие мгновенное вознаграждение. Не удовлетворяя реальную потребность (в отдыхе, близости), они формируют зависимость."
    },
    "tags": ["Psychological", "Theological"]
  },
  {
    "id": "axis_rejection_acceptance",
    "en": {
      "term": "Rejection vs. Acceptance",
      "synonyms": ["Social exclusion", "Codependency", "Belonging hunger", "Fawning"],
      "definition": "The existential axis dealing with the human need for relational connection. Striving in this axis leads to people-pleasing and fawning, while Grace provides security in unconditional adoption.",
      "theology": "Moves from the alienation of Genesis 3 (hiding and covering) to secure adoption (*huiothesia*) in Ephesians 1:5, establishing acceptance prior to social performance.",
      "psychology": "Examines the fear of exclusion, which triggers the same neurobiological pain centers as physical injury, contrasted with secure attachment theory."
    },
    "ru": {
      "term": "Отвержение против Принятия",
      "synonyms": ["Социальное исключение", "Созависимость", "Жажда принадлежности", "Угодничество"],
      "definition": "Экзистенциальная ось, связанная с потребностью в отношениях. Борьба на этой оси ведет к человекоугодию, тогда как Благодать дает безопасность в безусловном усыновлении.",
      "theology": "Переход от отчуждения в Бытии 3 (попытка спрятаться) к безопасному усыновлению (хуйотезия) в Ефесянам 1:5, утверждающему принятие до начала любых действий.",
      "psychology": "Изучает страх отвержения, который активирует те же нейробиологические центры боли, что и физическая травма, противопоставляя его теории надежной привязанности."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "axis_scarcity_abundance",
    "en": {
      "term": "Scarcity vs. Abundance",
      "synonyms": ["Resource anxiety", "Hoarding", "Retail therapy", "Catastrophe planning"],
      "definition": "The existential axis focused on security and survival. The Works paradigm drives hoarding and resource panic, whereas Grace brings peace in the Father's daily provision.",
      "theology": "Contrast between Israel hoarding excess Manna in the wilderness (Exodus 16) and the lifestyle of trust outlined in Matthew 6 (birds of the air).",
      "psychology": "The 'scarcity mindset' which narrows cognitive bandwidth and forces short-term, defensive decisions, resolved by establishing safety baseline."
    },
    "ru": {
      "term": "Скудость против Изобилия",
      "synonyms": ["Тревога о ресурсах", "Накопительство", "Шопинготерапия", "Страх нищеты"],
      "definition": "Экзистенциальная ось, сосредоточенная на выживании и безопасности. Законничество заставляет копить и паниковать, тогда как Благодать дает покой в ежедневной заботе Отца.",
      "theology": "Контраст между Израилем, запасающим манну в пустыне вопреки повелению (Исход 16), и жизнью доверия, описанной в Матфея 6 (птицы небесные).",
      "psychology": "Дефицитарное мышление, которое сужает когнитивный диапазон и заставляет принимать краткосрочные оборонительные решения, преодолеваемое через ощущение базовой безопасности."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "axis_control_surrender",
    "en": {
      "term": "Control vs. Surrender",
      "synonyms": ["Micromanaging", "Planning obsession", "Information binging", "Perfectionism"],
      "definition": "The existential axis dealing with safety and predictability. The counterfeit is obsessive planning to avoid vulnerability, which is broken by surrendering limits to providence.",
      "theology": "Human pride claiming self-sovereignty (Genesis 11, Babel) vs. yielding to creaturely limits and resting in the sovereignty of God.",
      "psychology": "The drive to manage anxiety by controlling environment variables, causing cognitive overload, resolved through exposure to uncertainty."
    },
    "ru": {
      "term": "Контроль против Предания",
      "synonyms": ["Микроменеджмент", "Одержимость планированием", "Информационное переедание", "Перфекционизм"],
      "definition": "Экзистенциальная ось, связанная с безопасностью и предсказуемостью. Подделка — это гиперпланирование ради избегания уязвимости, что преодолевается признанием своих ограничений.",
      "theology": "Человеческая гордость, заявляющая о собственном суверенитете (Вавилон, Бытие 11), против признания тварных границ и покоя в суверенитете Бога.",
      "psychology": "Стремление справиться с тревогой путем контроля внешних переменных, вызывающее когнитивную перегрузку, преодолеваемое через допущение неопределенности."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "axis_performance_standing",
    "en": {
      "term": "Performance vs. Standing",
      "synonyms": ["Workaholism", "Identity contingency", "Credential chasing", "LinkedIn comparison"],
      "definition": "The existential axis mapping justification and worth. Striving treats status as an earned prize; Grace establishes standing as an unconditional starting point.",
      "theology": "Paul's contrast between 'righteousness by works' (*erga nomou*) and imputed righteousness by grace (*charis*) in Romans 4.",
      "psychology": "Contingent self-worth which leads to burnout and performance anxiety, resolved by decoupling value from production metrics."
    },
    "ru": {
      "term": "Достижения против Статуса",
      "synonyms": ["Трудоголизм", "Зависимая самооценка", "Погоня за дипломами", "Сравнение успехов"],
      "definition": "Экзистенциальная ось, определяющая ценность личности. Достиженчество видит в статусе приз; Благодать дает статус как исходный безусловный дар.",
      "theology": "Апостольское противопоставление праведности от дел (эрга ному) и вменяемой праведности по благодати (харис) в Римлянам 4.",
      "psychology": "Условная самооценка, ведущая к выгоранию и страху оценки, преодолеваемая путем отделения ценности Я от показателей продуктивности."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "axis_obscurity_renown",
    "en": {
      "term": "Obscurity vs. Renown",
      "synonyms": ["Vanity metrics", "Fame chasing", "Social gaze", "Public branding"],
      "definition": "The existential axis dealing with significance. Striving seeks validation from public renown, whereas Grace anchors identity in the quiet, loving gaze of the Source.",
      "theology": "Chasing the glory (*doxa*) of men rather than the glory that comes from God (John 5:44), resolved by living a life hidden with Christ (Colossians 3:3).",
      "psychology": "The dread of insignificance and mortality, compensated by seeking social mirrors (likes/followers), resolved by intimate, local relational depth."
    },
    "ru": {
      "term": "Неизвестность против Признания",
      "synonyms": ["Тщеславие", "Погоня за лайками", "Публичный образ", "Страх безвестности"],
      "definition": "Экзистенциальная ось, определяющая значимость личности. Борьба ищет подтверждения в славе от людей, тогда как Благодать укореняет Я в тихом любящем взгляде Источника.",
      "theology": "Погоня за человеческой славой (докса) вместо признания от Бога (Иоанна 5:44), преодолеваемая жизнью, скрытой со Христом в Боге (Колоссянам 3:3).",
      "psychology": "Страх ничтожности и смертности, компенсируемый поиском социального зеркала (лайки/подписчики), преодолеваемый через глубокие доверительные отношения."
    },
    "tags": ["Theological", "Psychological"]
  }
];

// ============================================================
// EXISTENTIAL AXES MAPPING DATA
// ============================================================
const AXES_DATA = {
  rejection_acceptance: {
    title: "Rejection vs. Acceptance",
    hunger: "Belonging & Connection (👥)",
    cue: "A silent text thread, passive email, or critical look.",
    counterfeit: "Fawning, over-compliance, hyper-checking status tags.",
    leak: "Transactional acceptance (must perform to remain loved).",
    shame: "'I am defective; people only tolerate what I provide.'",
    exit: "Secure Adoption (Ephesians 1:5). Regular screenless solitude and vulnerable truth confession.",
    coords: { x: 30, y: 85 }
  },
  scarcity_abundance: {
    title: "Scarcity vs. Abundance",
    hunger: "Security & Provision (🕯️)",
    cue: "Sudden account repair bill, financial dip, or peer purchase.",
    counterfeit: "Banking app refreshing, panic hoarding, retail shopping.",
    leak: "Physical assets rust and decay; future ruin fear remains.",
    shame: "'I am exposed and unprotected; I will end up destitute.'",
    exit: "Provided Portion (Matthew 6:26). Active anonymous giving (generosity) to break scarcity threat loops.",
    coords: { x: 85, y: 20 }
  },
  control_surrender: {
    title: "Control vs. Surrender",
    hunger: "Safety & Predictability (🧭)",
    cue: "Relational ambiguity or sudden schedule adjustments.",
    counterfeit: "Hyper-planning roadmaps, micromanaging tasks, info binging.",
    leak: "Real-world variables drift from plans, causing collapse.",
    shame: "'If I let go of the wheel, everything breaks. I am incompetent.'",
    exit: "Sovereign Sanctuary (Romans 8:28). Limit ritual (writing and shredding uncontrollables) + strict Sabbath blocks.",
    coords: { x: 25, y: 35 }
  },
  performance_standing: {
    title: "Performance vs. Standing",
    hunger: "Worth & Justification (🛠️)",
    cue: "Slow workday, colleague promotion card, or small mistake.",
    counterfeit: "Workaholism, late emails, credential stacking.",
    leak: "Striving metrics reset daily ('What have you done today?').",
    shame: "'I am a lazy fraud. My value is contingent on output.'",
    exit: "Imputed Righteousness (Romans 4:5). Scheduled goal-free time during peak work hours.",
    coords: { x: 70, y: 75 }
  },
  obscurity_renown: {
    title: "Obscurity vs. Renown",
    hunger: "Significance & Gaze (🌌)",
    cue: "Low post engagement or feeling invisible in meetings.",
    counterfeit: "Digital curation, name-dropping, public self-branding.",
    leak: "Public attention is volatile; the spotlight shifts.",
    shame: "'I am small and unseen. My life leaves no trace.'",
    exit: "The Hidden Life (Colossians 3:3). Secret service (acts of help where credit is physically impossible).",
    coords: { x: 50, y: 50 }
  }
};

// ============================================================
// MODERN APP TRAPS DATABASE
// ============================================================
const APP_TRAPS_DATA = {
  rings: {
    title: "Fitness Trackers (Calorie Rings)",
    axis: "Performance & Scarcity",
    cue: "Wrist buzz or 'incomplete rings' visual display.",
    routine: "Jogging in circles late at night just to close rings.",
    reward: "A brief fireworks animation and streak preservation.",
    dependency: "Worth is outsourced to sensors. Rest is processed as guilt, driving chronic physical strain.",
    displacement: "Treat the body as a received asset. Move for joy and rest as a scheduled act of trust."
  },
  slack: {
    title: "Slack / Work Messages",
    axis: "Control & Acceptance",
    cue: "Red notification badge or desktop alert ping.",
    routine: "Instant replies, late-night checks, and typing indicators monitoring.",
    reward: "Temporary relief of anxiety and proof of responsiveness.",
    dependency: "Relational standing is made contingent on response speeds. Willpower is depleted to be 'seen.'",
    displacement: "Establish strict offline boundaries. Rest on received standing; let messages wait."
  },
  linkedin: {
    title: "LinkedIn Credentials",
    axis: "Performance & Obscurity",
    cue: "Seeing a colleague's certificate or promotion announcement.",
    routine: "Stacking minor online certifications and curating profile titles.",
    reward: "Likes, views, and comments indicating high professional value.",
    dependency: "Career significance is tied to peer rankings. The metric resets daily, generating impostor fear.",
    displacement: "Imputed worth. Do work secretly without posting. Celebrate colleagues' success."
  },
  streaks: {
    title: "Gamified Learning Streaks",
    axis: "Performance & Scarcity",
    cue: "App push alarm warning: 'Your streak will be lost!'",
    routine: "Completing a 1-minute basic exercise simply to save the number.",
    reward: "Number matches the next day; relief of saving the record.",
    dependency: "Loss aversion makes metrics an identity-contingency item. Willpower is consumed under threat.",
    displacement: "Intentionally break the streak. Re-source learning as a slow, unmeasured craft."
  },
  scroll: {
    title: "Infinite Feeds (Instagram/TikTok)",
    axis: "Rejection & Obscurity",
    cue: "Somatic fatigue, boredom, or feeling forgotten.",
    routine: "Opening the feed; scrolling for novel triggers.",
    reward: "Temporary dopamine buzz from seeing surprising items.",
    dependency: "Simulated connection. Stagnant reservoir leaves loneliness sharper, driving compulsive scrolling.",
    displacement: "Take connection hunger to local safe relationships, silence, or prayer. Delete the app."
  }
};

// ============================================================
// COMPULSION LOOP SIMULATOR PROFILES
// ============================================================
const SIM_LOOPS_DATA = {
  overworker: {
    title: "The Overworker Loop (Performance Axis)",
    initial: { W: 90, S: 30, SH: 5 },
    params: { leak: 1.1, shame: 1.6, grace: 1.3 },
    strivingMsg: "Checked emails at 11:30 PM. Staging metric proof. (-15 Willpower, +20 Stress, +5 Shame)",
    strivingDelta: { W: -15, S: 20, SH: 5 },
    exitMsg: "Sabbath boundary activated. Resting on imputed worth. Worth decoupled from output. (+30 Willpower, -25 Stress, -15 Shame)",
    exitDelta: { W: 30, S: -25, SH: -15 }
  },
  doomscroller: {
    title: "The Doomscroller Loop (Control Axis)",
    initial: { W: 80, S: 45, SH: 10 },
    params: { leak: 1.3, shame: 1.2, grace: 1.5 },
    strivingMsg: "Refreshed forums for 40 minutes seeking safety details. (-12 Willpower, +18 Stress, +12 Shame)",
    strivingDelta: { W: -12, S: 18, SH: 12 },
    exitMsg: "Limit Ritual activated. Shredded uncontrollable variables. Ambiguity accepted. (+25 Willpower, -30 Stress, -20 Shame)",
    exitDelta: { W: 25, S: -30, SH: -20 }
  },
  pleaser: {
    title: "The People-Pleaser Loop (Acceptance Axis)",
    initial: { W: 85, S: 25, SH: 15 },
    params: { leak: 0.9, shame: 1.8, grace: 1.4 },
    strivingMsg: "Fawned to resolve passive email tension. Sent transactional gift. (-18 Willpower, +15 Stress, +15 Shame)",
    strivingDelta: { W: -18, S: 15, SH: 15 },
    exitMsg: "Secure Adoption anchor loaded. Screenless solitude practiced. (+20 Willpower, -20 Stress, -25 Shame)",
    exitDelta: { W: 20, S: -20, SH: -25 }
  },
  therapist: {
    title: "The Retail Therapist Loop (Scarcity Axis)",
    initial: { W: 75, S: 40, SH: 20 },
    params: { leak: 1.4, shame: 1.4, grace: 1.2 },
    strivingMsg: "Refreshed cart checking price drops. Panic purchase made. (-14 Willpower, +10 Stress, +25 Shame)",
    strivingDelta: { W: -14, S: 10, SH: 25 },
    exitMsg: "Radical Outflow activated. Donated money anonymously. Scarcity broken. (+20 Willpower, -15 Stress, -30 Shame)",
    exitDelta: { W: 20, S: -15, SH: -30 }
  },
  compares: {
    title: "The Compare-and-Despair Loop (Obscurity Axis)",
    initial: { W: 80, S: 35, SH: 25 },
    params: { leak: 1.2, shame: 1.5, grace: 1.6 },
    strivingMsg: "Scrolled competitor highlight reels. Self-rating calculated. (-10 Willpower, +15 Stress, +20 Shame)",
    strivingDelta: { W: -10, S: 15, SH: 20 },
    exitMsg: "Secret Service activated. Performed creditless work behind the scenes. (+30 Willpower, -25 Stress, -35 Shame)",
    exitDelta: { W: 30, S: -25, SH: -35 }
  }
};

// ============================================================
// FREQUENCY & ANCESTRAL ARCHETYPES DATABASE
// ============================================================
const ARCHETYPES_DATA = {
  abraham: {
    name: "Abraham (Авраам)",
    calling: "Faith & Covenant Fatherhood (אֱמוּנָה - Emunah)",
    inverse: "Fear, self-protection, and deceptive manipulation.",
    failure: "Descended to Egypt under famine; passed Sarah off as his sister; fathered Ishmael in self-effort.",
    legacy: "Isaac repeats the sister-deception script in Gerar. Jacob uses identity theft to steal the blessing."
  },
  jacob: {
    name: "Jacob (Иаков)",
    calling: "Covenant Inheritance by election (Grace)",
    inverse: "Heel-grabbing (Aqab), striving, and identity theft.",
    failure: "Traded stew for Esau's birthright; wore Esau's clothes to steal the blessing; wrestled Padan-Aram in self-strength.",
    legacy: "Jacob is deceived by Laban (younger substituted for older), and later deceived by his own sons using goat's blood."
  },
  david: {
    name: "David (Давид)",
    calling: "Intimate Worship (Tehillah) & Kingly Shelter",
    inverse: "Entitlement, voyeurism, and relational exploitation.",
    failure: "Abused kingly power to take Bathsheba; murdered Uriah; ordered a military census to rely on metrics.",
    legacy: "Amnon exploits Tamar; Absalom sleeps with David's concubines on the palace roof; Solomon builds a massive harem."
  },
  elijah: {
    name: "Elijah (Илия)",
    calling: "Prophetic Fire & Covenant Restoration (Shuv)",
    inverse: "Suicidal collapse, extreme isolation, and self-pity.",
    failure: "Fled Jezebel's threat; collapsed under the broom tree requesting death; hid in the cave with a self-pitying script.",
    legacy: "Prophetic frequency is targeted with intense isolation, depression, and dark night of the soul."
  }
};
