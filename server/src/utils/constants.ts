import { Category, DifficultyLevel, Language } from "../enums";

export const textSampleSeeds = [
  // BEGINNER LESSONS - Basic letter practice
  {
    title: "Basic Home Row Keys",
    content: "asdf jkl; asdf jkl; fff jjj aaa sss ddd lll kkk",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Typing Fundamentals"
  },
  {
    title: "Top Row Introduction",
    content: "qwer tyui qwer tyui qqq www eee rrr ttt yyy uuu iii",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Typing Fundamentals"
  },
  {
    title: "Bottom Row Practice",
    content: "zxcv bnm, zxcv bnm, zzz xxx ccc vvv bbb nnn mmm",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Typing Fundamentals"
  },
  {
    title: "Simple Words",
    content: "the and for are but not you all can had her was one our out day get has him his how its may new now old see two way who boy did",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Common English Words"
  },

  // BEGINNER DRILLS
  {
    title: "Common Letter Combinations",
    content: "ing tion ment able ness less full ship ward like wise over under",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "English Suffixes Practice"
  },
  {
    title: "Double Letters",
    content: "all add egg inn odd off seem need good book look cool food door noon seen",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Double Letter Practice"
  },

  // INTERMEDIATE LESSONS
  {
    title: "Numbers and Symbols",
    content: "123 456 789 0 !@# $%^ &*() _+= {}[] |\\:; \"'<> ?/. 1234567890",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Symbol Practice"
  },
  {
    title: "Capitalization Practice",
    content: "The Quick Brown Fox Jumps Over The Lazy Dog. Every Good Boy Does Fine Always. Practice Makes Perfect Every Single Day.",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Capitalization Fundamentals"
  },
  {
    title: "Common Sentences",
    content: "I am learning to type faster every day. The computer is a powerful tool for communication. Practice typing regularly to improve your speed and accuracy.",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Sentence Practice"
  },

  // INTERMEDIATE DRILLS
  {
    title: "Speed Building Words",
    content: "quick brown fox jumps over lazy dog pack my box with five dozen liquor jugs amazingly few discotheques",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Speed Building Exercise"
  },
  {
    title: "Technical Terms",
    content: "algorithm database software programming javascript typescript python html css framework library repository",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Programming Vocabulary"
  },

  // EXPERT LESSONS
  {
    title: "Complex Punctuation",
    content: "\"Hello,\" she said; \"this is quite difficult!\" The ratio was 3:2, but the result (surprisingly) was 7.5%. Isn't that amazing?",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "Advanced Punctuation"
  },
  {
    title: "Mixed Case Challenge",
    content: "JavaScript TypeScript SQL HTML CSS React Node.js MongoDB PostgreSQL API REST GraphQL JSON XML HTTP HTTPS",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "Technical Acronyms"
  },

  // EXPERT DRILLS
  {
    title: "Code Snippets",
    content: "const handleSubmit = async (event) => { event.preventDefault(); const response = await fetch('/api/data'); return response.json(); };",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "JavaScript Code Practice"
  },
  {
    title: "Special Characters",
    content: "~`!@#$%^&*()_+-={}[]|\\:;\"'<>?,./1234567890 ±§¬∞£™¢∞¥©®µπΩ∑´∂ƒ∆∫√ç≈≤≥÷",
    category: Category.DRILL,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "Special Characters Practice"
  },

  // QUOTES - Various difficulties
  {
    title: "Einstein on Learning",
    content: "The only source of knowledge is experience.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Albert Einstein"
  },
  {
    title: "Steve Jobs on Innovation",
    content: "Innovation distinguishes between a leader and a follower.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Steve Jobs"
  },
  {
    title: "Maya Angelou on Courage",
    content: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Maya Angelou"
  },
  {
    title: "Churchill on Success",
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Winston Churchill"
  },
  {
    title: "Thoreau on Dreams",
    content: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "Henry David Thoreau"
  },

  // GAMES - Fun typing challenges
  {
    title: "Animal Names Speed Test",
    content: "cat dog elephant tiger lion zebra giraffe monkey rabbit horse cow pig sheep goat chicken duck swan eagle hawk owl",
    category: Category.GAME,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Animal Kingdom"
  },
  {
    title: "Color Rush",
    content: "red blue green yellow orange purple pink brown black white gray silver gold crimson azure emerald amber violet",
    category: Category.GAME,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.ENGLISH,
    source: "Color Spectrum"
  },
  {
    title: "Food Challenge",
    content: "pizza burger sandwich salad pasta sushi tacos ice cream chocolate cookies cake bread cheese milk eggs bacon",
    category: Category.GAME,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "Food & Cuisine"
  },
  {
    title: "Geography Quiz",
    content: "Paris London Tokyo New York Sydney Moscow Beijing Cairo Mumbai Rio de Janeiro Istanbul Bangkok Singapore",
    category: Category.GAME,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.ENGLISH,
    source: "World Capitals & Cities"
  },
  {
    title: "Science Terms",
    content: "photosynthesis electromagnetic deoxyribonucleic thermodynamics quantum mechanics relativity chromosome mitochondria",
    category: Category.GAME,
    difficulty_level: DifficultyLevel.EXPERT,
    language: Language.ENGLISH,
    source: "Scientific Terminology"
  },

  // FRENCH SAMPLES
  {
    title: "Mots de Base Français",
    content: "le la les un une des je tu il elle nous vous ils elles avoir être faire aller voir savoir pouvoir vouloir",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.FRENCH,
    source: "Français de Base"
  },
  {
    title: "Citation Française",
    content: "La vie est un sommeil, l'amour en est le rêve, et vous aurez vécu si vous avez aimé.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.FRENCH,
    source: "Alfred de Musset"
  },

  // SPANISH SAMPLES
  {
    title: "Palabras Básicas Español",
    content: "el la los las un una unos unas yo tú él ella nosotros vosotros ellos ellas ser estar tener hacer ir ver saber poder querer",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.SPANISH,
    source: "Español Básico"
  },
  {
    title: "Cita Española",
    content: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.SPANISH,
    source: "Miguel de Cervantes"
  },

  // GERMAN SAMPLES
  {
    title: "Deutsche Grundwörter",
    content: "der die das ein eine ich du er sie es wir ihr sie haben sein werden können müssen wollen sollen dürfen",
    category: Category.LESSON,
    difficulty_level: DifficultyLevel.BEGINNER,
    language: Language.GERMAN,
    source: "Deutsche Grundlagen"
  },
  {
    title: "Deutsches Zitat",
    content: "Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher.",
    category: Category.QUOTE,
    difficulty_level: DifficultyLevel.INTERMEDIATE,
    language: Language.GERMAN,
    source: "Albert Einstein"
  }
];

export const courseSeeds = [
  {
    name: "Beginner Typing Fundamentals",
    description: "Learn the basics of touch typing with proper finger placement and build muscle memory for the keyboard."
  },
  {
    name: "Intermediate Speed Building",
    description: "Improve your typing speed and accuracy with more complex texts and common word patterns."
  },
  {
    name: "Advanced Technical Typing",
    description: "Master advanced typing with technical terms, code snippets, and complex punctuation."
  },
  {
    name: "Typing Games & Challenges",
    description: "Fun and engaging typing games to practice while having fun with different themes."
  },
  {
    name: "Multilingual Practice",
    description: "Practice typing in different languages including French, Spanish, and German."
  }
];

export const lessonSeeds = [
  // BEGINNER COURSE LESSONS
  {
    course_id: "086e6341-cb75-45ef-b471-45e74ef60166",
    text_sample_id: "1d443774-9815-40f0-b8b2-99d55734350d",
    prerequisite_lesson_id: null,
    title: "Home Row Foundation",
    description: "Master the home row keys (ASDF JKL;) with proper finger placement",
    order_index: 1
  },
  {
    course_id: "086e6341-cb75-45ef-b471-45e74ef60166",
    text_sample_id: "258ddcf6-029a-48b7-a4d5-34f95924a9fa",
    prerequisite_lesson_id: "lesson-beginner-1",
    title: "Top Row Introduction",
    description: "Learn the QWER TYUI keys above the home row",
    order_index: 2
  },
  {
    course_id: "086e6341-cb75-45ef-b471-45e74ef60166",
    text_sample_id: "4064a481-917d-4f0b-a513-a301a3ed433a",
    prerequisite_lesson_id: "lesson-beginner-2",
    title: "Bottom Row Practice",
    description: "Practice the ZXCV BNM, keys below the home row",
    order_index: 3
  },
  {
    course_id: "086e6341-cb75-45ef-b471-45e74ef60166",
    text_sample_id: "b766a8a2-b520-47fc-bbe4-14b84b774130",
    prerequisite_lesson_id: "lesson-beginner-3",
    title: "Simple Word Practice",
    description: "Combine letters into common English words",
    order_index: 4
  },
  {
    course_id: "086e6341-cb75-45ef-b471-45e74ef60166",
    text_sample_id: "cf52ea5a-94ea-4880-93d5-6def66685ad9",
    prerequisite_lesson_id: "lesson-beginner-4",
    title: "Common Suffixes",
    description: "Practice common letter combinations and word endings",
    order_index: 5
  },

  // INTERMEDIATE COURSE LESSONS
  {
    course_id: "532b0577-6509-4d4a-b0e3-ed3b1f81b595",
    text_sample_id: "6bce05ab-a740-464c-9320-588dd14ea9a6",
    prerequisite_lesson_id: null,
    title: "Numbers & Symbols",
    description: "Master numbers and special characters on the keyboard",
    order_index: 1
  },
  {
    course_id: "532b0577-6509-4d4a-b0e3-ed3b1f81b595",
    text_sample_id: "98ce1982-438b-406f-8b81-06220817778d",
    prerequisite_lesson_id: "lesson-intermediate-1",
    title: "Capitalization Skills",
    description: "Practice proper capitalization and shift key usage",
    order_index: 2
  },
  {
    course_id: "532b0577-6509-4d4a-b0e3-ed3b1f81b595",
    text_sample_id: "a3e8a8de-a1bf-42a2-ad61-ff62190612ed",
    prerequisite_lesson_id: "lesson-intermediate-2",
    title: "Sentence Practice",
    description: "Type complete sentences with proper punctuation",
    order_index: 3
  },
  {
    course_id: "532b0577-6509-4d4a-b0e3-ed3b1f81b595",
    text_sample_id: "c87849e0-7d57-4304-975f-3d9314e3a532",
    prerequisite_lesson_id: "lesson-intermediate-3",
    title: "Speed Building",
    description: "Increase your speed with common word patterns",
    order_index: 4
  },
  {
    course_id: "532b0577-6509-4d4a-b0e3-ed3b1f81b595",
    text_sample_id: "d1617507-bc2d-44b3-a4f5-5d5be796fd81",
    prerequisite_lesson_id: "lesson-intermediate-4",
    title: "Technical Vocabulary",
    description: "Practice typing common programming and technical terms",
    order_index: 5
  },

  // ADVANCED COURSE LESSONS
  {
    course_id: "148351fc-9790-4e1a-9004-c090e98b921f",
    text_sample_id: "6437fa92-5ba3-4531-b676-3da7952e1e89",
    prerequisite_lesson_id: null,
    title: "Advanced Punctuation",
    description: "Master complex punctuation and special characters",
    order_index: 1
  },
  {
    course_id: "148351fc-9790-4e1a-9004-c090e98b921f",
    text_sample_id: "a5b96696-0f92-47cd-8b8c-592fc3bdf978",
    prerequisite_lesson_id: "lesson-advanced-1",
    title: "Mixed Case Challenge",
    description: "Practice with technical acronyms and mixed capitalization",
    order_index: 2
  },
  {
    course_id: "148351fc-9790-4e1a-9004-c090e98b921f",
    text_sample_id: "a5b96696-0f92-47cd-8b8c-592fc3bdf978",
    prerequisite_lesson_id: "lesson-advanced-2",
    title: "Code Typing Practice",
    description: "Type actual code snippets to build programming typing skills",
    order_index: 3
  },
  {
    course_id: "148351fc-9790-4e1a-9004-c090e98b921f",
    text_sample_id: "a5b96696-0f92-47cd-8b8c-592fc3bdf978",
    prerequisite_lesson_id: "lesson-advanced-3",
    title: "Special Characters Mastery",
    description: "Practice with extended character sets and symbols",
    order_index: 4
  },

  // GAMES COURSE LESSONS
  {
    course_id: "ca6405b8-07f9-4556-a64c-48584f0f83fa",
    text_sample_id: "59fea96f-f58a-420b-b495-55e1e3aeeb44",
    prerequisite_lesson_id: null,
    title: "Animal Kingdom Challenge",
    description: "Fun typing game with animal names",
    order_index: 1
  },
  {
    course_id: "ca6405b8-07f9-4556-a64c-48584f0f83fa",
    text_sample_id: "77bbc057-a48f-4328-833d-88e4217c818e",
    prerequisite_lesson_id: "lesson-game-1",
    title: "Color Rush",
    description: "Type color names as fast as you can",
    order_index: 2
  },
  {
    course_id: "ca6405b8-07f9-4556-a64c-48584f0f83fa",
    text_sample_id: "1e6c8f73-1a15-4b03-92a9-6e9e0805af31",
    prerequisite_lesson_id: "lesson-game-2",
    title: "Food Challenge",
    description: "Practice with food-related vocabulary",
    order_index: 3
  },
  {
    course_id: "ca6405b8-07f9-4556-a64c-48584f0f83fa",
    text_sample_id: "5ce63fd7-a071-47c9-a36e-822a4247a634",
    prerequisite_lesson_id: "lesson-game-3",
    title: "Geography Quiz",
    description: "Learn geography while practicing typing",
    order_index: 4
  },
  {
    course_id: "ca6405b8-07f9-4556-a64c-48584f0f83fa",
    text_sample_id: "11367ee0-4886-434c-8b48-efbf38e3f027",
    prerequisite_lesson_id: "lesson-game-4",
    title: "Science Terminology",
    description: "Challenge yourself with scientific terms",
    order_index: 5
  },

  // MULTILINGUAL COURSE LESSONS
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "f5a6d05d-7069-4219-90ba-67a3bfe3ed4a",
    prerequisite_lesson_id: null,
    title: "French Basics",
    description: "Practice typing basic French vocabulary",
    order_index: 1
  },
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "a590706e-0038-4caf-8a80-63a68f2ee91d",
    prerequisite_lesson_id: "lesson-lang-1",
    title: "French Quote Practice",
    description: "Type a beautiful French quotation",
    order_index: 2
  },
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "e856a5eb-76e6-46cf-9f07-451c2d03ac62",
    prerequisite_lesson_id: "lesson-lang-2",
    title: "Spanish Basics",
    description: "Practice typing basic Spanish vocabulary",
    order_index: 3
  },
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "2dee0d28-6baa-4edd-9add-0496f5e5e8da",
    prerequisite_lesson_id: "lesson-lang-3",
    title: "Spanish Quote Practice",
    description: "Type a classic Spanish literary quote",
    order_index: 4
  },
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "b766a8a2-b520-47fc-bbe4-14b84b774130",
    prerequisite_lesson_id: "lesson-lang-4",
    title: "German Basics",
    description: "Practice typing basic German vocabulary",
    order_index: 5
  },
  {
    course_id: "7f8ba912-c757-4d38-bb6b-0337c60ed54a",
    text_sample_id: "c6fb0e72-e4ec-45ad-a2a8-5f46ae6567ae",
    prerequisite_lesson_id: "lesson-lang-5",
    title: "German Quote Practice",
    description: "Type a famous German quotation",
    order_index: 6
  }
];
