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
      "definition": "Болезненное эмоциональное состояние, возникающее из убеждения в своей фундаментальной неполноценности, отверженности или недостоинстве. В цикле навязчивого поведения стыд служит топливом для рецидива.",
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
    "id": "disordered_loves",
    "en": {
      "term": "Disordered Loves",
      "synonyms": ["Ordo amoris", "Disordered sourcing", "Misplaced devotion", "Ordinata caritas"],
      "definition": "Augustine's concept that moral and psychological suffering arises not from loving bad things, but from loving good things in the wrong order or expecting ultimate satisfaction from secondary gifts.",
      "theology": "Augustine's *Ordo Amoris* (hierarchy of love). Loving the gift above the Giver, or treating a created asset (career, spouse) as if it were the Creator.",
      "psychology": "Cognitive distortion where a finite asset (social ranking, thinness, productivity) is given ultimate importance. This places an intolerable psychological pressure on the asset, causing it to crack."
    },
    "ru": {
      "term": "Неупорядоченная любовь",
      "synonyms": ["Нарушенный порядок любви", "Ошибочный источник", "Искаженная привязанность", "Ordo amoris"],
      "definition": "Августиновская концепция, утверждающая, что душевные страдания проистекают не из любви к плохим вещам, а из любви к хорошим вещам в неправильном порядке или из ожидания абсолютного счастья от вторичных даров.",
      "theology": "Учение Блаженного Августина об *Ordo Amoris* (порядке любви). Попытка любить творение больше Творца или относиться к конечному благу (карьера, супруг) как к божеству.",
      "psychology": "Когнитивное искажение, при котором конечному благу (социальный рейтинг, худоба, продуктивность) придается абсолютное значение. Это создает невыносимое давление на объект привязанности, разрушая его."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "expulsive_power",
    "en": {
      "term": "Expulsive Power of a New Affection",
      "synonyms": ["Crowding out", "Superior attachment", "Thomas Chalmers' law", "Substitution strategy"],
      "definition": "The theological and psychological principle that a deep-seated habit or love cannot be forced out by sheer negation (willpower); it can only be crowded out by the introduction of a new, vastly superior attachment.",
      "theology": "Coined by Thomas Chalmers in 1813. The heart abhors a vacuum; the love of the world is not willed out of the soul, but displaced by the far greater beauty and worth of the Gospel.",
      "psychology": "Replacement therapy. Instead of demanding that the brain ignore a strong cue-reward pathway, you introduce a more satisfying, high-value alternative that naturally overrides the old default."
    },
    "ru": {
      "term": "Вытесняющая сила новой привязанности",
      "synonyms": ["Замещение любви", "Закон Чалмерса", "Вытеснение ценностью", "Принцип новой любви"],
      "definition": "Принцип, утверждающий, что укоренившуюся привычку или привязанность нельзя изгнать голым отрицанием (силой воли); ее можно только вытеснить, предложив взамен новую, превосходящую привязанность.",
      "theology": "Формулировка Томаса Чалмерса (1813 г.). Сердце не терпит пустоты; любовь к миру не изгоняется волевым решением, а вытесняется созерцанием красоты и ценности Евангелия.",
      "psychology": "Терапия замещения привычек. Вместо требований игнорировать старый путь «триггер-награда», мозгу предлагают более ценную альтернативу, которая естественным образом перезаписывает старую схему."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "indicative_imperative",
    "en": {
      "term": "Indicative vs. Imperative",
      "synonyms": ["Status before duty", "Given identity", "Grammar of grace", "Being before doing"],
      "definition": "The structural grammar of the gospel: the Indicative (the statement of fact about who you already are in grace) must always precede and establish the Imperative (the command of what you must do).",
      "theology": "Pauline theology: 'You have been washed' (indicative) ➔ 'Therefore, flee sin' (imperative). Reversing this order (perform to become) is the definition of legalism/works.",
      "psychology": "Operating from a secure base. Acting *from* acceptance rather than *for* acceptance removes performance anxiety, reducing stress and willpower depletion."
    },
    "ru": {
      "term": "Индикатив и императив",
      "synonyms": ["Бытие пред действием", "Статус перед долгом", "Грамматика благодати", "Идентичность пред делом"],
      "definition": "Структурное правило Евангелия: Индикатив (утверждение факта о том, кем вы уже являетесь благодаря благодати) должен всегда предшествовать Императиву (повелению о том, что вам нужно делать).",
      "theology": "Теология Павла: «Вы омыты» (индикатив) ➔ «Поэтому бегите блуда» (императив). Перемена этого порядка (действуй, чтобы стать) — суть законничества.",
      "psychology": "Действие из безопасной базы. Поведение *из* принятия, а не *ради* принятия, снимает тревогу оценки, снижает стресс и предотвращает выгорание."
    },
    "tags": ["Theological", "Psychological"]
  },
  {
    "id": "godly_worldly_grief",
    "en": {
      "term": "Godly Grief vs. Worldly Grief",
      "synonyms": ["Metanoia vs. Autokritike", "Repentance vs. Remorse", "Life-giving sorrow vs. Death-producing shame"],
      "definition": "The distinction between a sorrow that leads to change by looking toward a loving Source, and a self-referential sorrow that loops in self-pity, pride, and shame.",
      "theology": "From 2 Corinthians 7:10: 'Godly grief produces a repentance (*metanoia*) that leads to salvation without regret, whereas worldly grief produces death.' Seen in Peter's weeping (restorative) vs. Judas's suicide (fatal).",
      "psychology": "Contrition (which is focused on repair, relational safety, and learning) vs. Shame (which is self-focused, attacks self-identity, isolates the person, and drives relapse)."
    },
    "ru": {
      "term": "Печаль ради Бога и печаль мирская",
      "synonyms": ["Покаяние против угрызений", "Метанойя против самобичевания", "Сокрушение против отчаяния"],
      "definition": "Различие между сокрушением, которое ведет к изменениям через обращение к Источнику, и эгоцентричной скорбью, которая варится в жалости к себе, гордости и стыде.",
      "theology": "Из 2 Коринфянам 7:10: «Печаль ради Бога производит неизменное покаяние (*метанойя*) ко спасению, а печаль мирская производит смерть». Пример: покаяние Петра против самоубийства Иуды.",
      "psychology": "Конструктивная вина (сосредоточенная на исправлении ошибок и восстановлении связи) против парализующего стыда (направленного на уничтожение Я, изолирующего человека и ведущего к срыву)."
    },
    "tags": ["Theological", "Scripture", "Psychological"]
  },
  {
    "id": "abiding_striving",
    "en": {
      "term": "Abiding vs. Striving",
      "synonyms": ["Menō vs. Chōris", "Resting vs. Re-earning", "Branch-connection vs. Graft-straining"],
      "definition": "The contrast between resting in vital, organic union with a secure source, and the anxious, white-knuckled effort to manufacture spiritual or emotional outcomes from one's own resources.",
      "theology": "Jesus's teaching in John 15:4: 'Abide (*menō*) in me... apart from me you can do nothing.' Fruit is *borne* by connection, not *produced* by clenching.",
      "psychology": "The shift from high-tension active strive mode (sympathetic drive, threat response) to a low-tension receptive security state (parasympathetic balance, attachment security)."
    },
    "ru": {
      "term": "Пребывание против усилий плоти",
      "synonyms": ["Слияние с Лозой", "Покой против домогательства", "Пребывание против тщетной борьбы"],
      "definition": "Контраст между покоем в органическом союзе с безопасным Источником и тревожными, напряженными попытками выжать духовные или эмоциональные плоды из собственных скудных ресурсов.",
      "theology": "Слова Христа в Иоанна 15:4: «Пребудьте (*мено*) во Мне... без Меня не можете делать ничего». Плод не выдавливается усилием, а вырастает благодаря связи.",
      "psychology": "Переход от напряженного режима «борьбы и бегства» (симпатическая система, реакция на угрозу) к состоянию безопасного принятия (парасимпатический баланс, надежная привязанность)."
    },
    "tags": ["Theological", "Scripture", "Psychological"]
  },
  {
    "id": "habit_elements",
    "en": {
      "term": "Cue / Routine / Reward",
      "synonyms": ["Trigger / Action / Payoff", "Habit Loop triad", "Compulsion markers"],
      "definition": "The three-part sequence that makes up any automated behavior loop: a trigger (cue), the behavior performed (routine), and the resulting dopamine spike or tension release (reward).",
      "theology": "The mechanical loop of fleshly craving described in Numbers 11: Cue (wilderness dry spell) ➔ Routine (craving Egypt/crying for leeks) ➔ Reward (remembering flavorful food).",
      "psychology": "The Charles Duhigg habit-loop model. Breaking a loop requires keeping the Cue and Reward, but inserting a new, life-giving Routine (the 'Expulsive Power' replacement strategy)."
    },
    "ru": {
      "term": "Триггер / Действие / Награда",
      "synonyms": ["Сигнал / Рутина / Вознаграждение", "Элементы привычки", "Петля привычки"],
      "definition": "Трехчастная последовательность, составляющая любой автоматический цикл поведения: сигнал (триггер), совершаемое действие (рутина) и дофаминовый всплеск или разрядка напряжения (награда).",
      "theology": "Механический цикл плотского вожделения в Числах 11: Сигнал (пустыня) ➔ Рутина (требование лука и чеснока Египта) ➔ Вознаграждение (иллюзия бесплатного сытного рабства).",
      "psychology": "Модель петли привычки Чарльза Дахигга. Разрыв петли требует сохранения сигнала и вознаграждения с заменой самой рутины на более здоровую альтернативу."
    },
    "tags": ["Psychological", "Theological"]
  }
];
