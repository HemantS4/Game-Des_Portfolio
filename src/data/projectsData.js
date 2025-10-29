// Centralized project data
const BASE_URL = import.meta.env.BASE_URL || '/';

export const projectsData = [
  {
    id: 'ammo-batics',
    title: 'Ammo-batics',
    category: '2D Platformer',
    year: '2024',
    description: 'A 2D momentum-centric platformer where every shot fired becomes a movement decision.',
    shortDescription: '2D shooter platformer focusing on Level Design',
    tools: ['Unity', 'Photoshop', 'C#'],
    thumbnail: `${BASE_URL}images/projects/ammo-batics/Cover.png`,

    // Detailed project information
    overview: 'You fire a gun. The recoil throws you backward. That\'s the whole game. Ammo-batics started as a two-week design sprint exploring what happens when shooting isn\'t about hitting targets—it\'s about moving through space. You wake up at the bottom of a bioluminescent cave with an alien pistol. The only way out is up, and every bullet counts as both ammo and movement fuel.',

    role: 'Game Designer, Level Designer, Programmer',
    duration: '2 Weeks',
    teamSize: 'Solo Project',
    platform: ['PC'],

    // Extended sections with detailed content and images
    extendedSections: [
      {
        title: 'Design Process',
        content: 'The design process for Ammo-batics was iterative and focused on rapid prototyping. I started by identifying the core mechanic—recoil-based movement—and built a minimal prototype to test if shooting could feel good as a movement tool rather than a combat mechanic. Through playtesting, I identified key pain points like unpredictable trajectories and soft-lock scenarios, which led to the addition of trajectory previews and the transition from finite to regenerating ammo in V2.',
        image: 'Design process.png'
      },
      {
        title: 'Core Loop',
        content: 'The core loop revolves around **Explore → Learn → Bypass → Unlock**. Players explore interconnected rooms, learn new movement techniques through environmental challenges, bypass previously inaccessible areas using their skills, and unlock shortcuts or new abilities. Each cycle reinforces mastery while opening new paths, creating a satisfying sense of progression.',
        image: 'Core Loop.png'
      },
      {
        title: 'Level Design - V1 Prototype (5 Levels)',
        content: 'V1 consisted of 5 linear levels designed using the **"Teach → Test → Twist"** structure:\n\n**Level 1 — The Fall & First Steps:** Tutorial level introducing basic movement and recoil hop. Single target opens first door with no hazards, focusing on clarity and player understanding.\n\n**Level 2 — Bank Shot:** Target behind a wall teaches ricochet mechanics off ceiling/wall. Short vertical chimney requiring down-shot recoil lift with safe floors for iteration.\n\n**Level 3 — Cadence & Moving Platforms:** Introduces timed doors and moving platforms. Players learn shot rhythm: move → aim → shoot → stabilize. Misses cost time, not lives.\n\n**Level 4 — Routing with Limited Ammo:** Three targets split across the room where order matters. Finite ammo creates light planning—waste bullets and you reset. First hint of multi-path routing.\n\n**Level 5 — Capstone Chain:** Blends all skills: bank shot → double recoil climb → door run. Big "aha" finale once the chain clicks, with no lethal hazards yet.',
        image: '1.png'
      },
      {
        title: 'Level Design - Continued',
        content: 'Each level was designed with clear visual language and fair telegraphing. The progression from Level 1 to Level 5 follows a careful difficulty curve that introduces mechanics one at a time before combining them in creative ways. The compact arenas ensure players always understand their goals, while the safe iteration spaces encourage experimentation without harsh punishment.',
        image: '3.png'
      },
      {
        title: 'Level Design - Final Levels',
        content: 'The later levels increase complexity through multi-target puzzles and timed sequences. Level 4 introduces resource management with finite ammo, teaching players to plan their shots. Level 5 serves as a capstone that validates mastery of all techniques learned throughout the journey, with vertical climbs and precise timing challenges.',
        image: '4.png'
      },
      {
        title: 'Level Design - Advanced Techniques',
        content: 'The V1 levels also introduced advanced movement opportunities for skilled players. Wide rooms with mid-platforms teach recoil hops, while narrow corridors demand precise timing and cadence. These design patterns carried forward into V2, forming the foundation for the Metroidvania-style interconnected map.',
        image: '5.png'
      },
      {
        title: 'Movement Mechanics',
        content: 'The game features layered movement tech that players gradually master: **Recoil Hops** for basic vertical movement, **Ricochets** off angled surfaces for momentum preservation, and **Wall Bounces** for advanced traversal. A laser trajectory preview shows exactly where you\'ll land after firing, making recoil feel responsive and predictable. This removed the frustration of guesswork while preserving the skill ceiling.',
        image: '2.png'
      },
      {
        title: 'V2 Design - Metroidvania Evolution',
        content: 'V2 pivoted from linear levels to a paper-based **Metroidvania map** with interconnected rooms, checkpoints, shortcuts, and optional hard-mode routes. The biggest change: **regenerating ammo with slot upgrades** instead of finite bullets. This solved the soft-lock problem—players could no longer trap themselves by running out of ammo. Instead, progression became about cooldown management and strategic ammo slot expansion.',
        image: 'MIniMap.png'
      },
      {
        title: 'Obstacles & Hazards',
        content: 'The V2 design introduces a variety of obstacles that challenge player skill:\n\n**Seed Shooter:** Primary enemy that shoots seeds in slow arcs; exploitable for timing and can be used as moving platforms. Teaches spatial awareness and rhythm-based movement.\n\n**Spikes:** Static hazards placed strategically to punish careless movement. Force players to use precise recoil angles.\n\n**Lava Pits:** Environmental hazards with telegraphed danger zones. Players must time recoil hops carefully to avoid falling in.\n\n**Crumble Tiles:** Platforms that collapse after a short delay, creating urgency in movement decisions.\n\nAll hazards feature fair telegraphs—visual or audio cues that signal danger before it hits. The goal is challenging but never unfair.'
      },
      {
        title: 'Beat Chart & Pacing',
        content: 'The beat chart maps emotional peaks and valleys across the player journey. Early game: **Discovery** (low-stress exploration). Mid-game: **Challenge** (spike in difficulty as techniques layer). Late game: **Mastery** (high-intensity gauntlets requiring perfect execution). Checkpoints are strategically placed before difficulty spikes to prevent frustration, while shortcuts reward skilled players with faster routes.'
      },
      {
        title: 'Future Prospects',
        content: 'Future updates would expand enemy variety with the **Vine Lash** (telegraphed line hazard), **Moss Pod** (spawns temporary platforms when shot), and **Spore Spreader** (releases redirectable spore clouds). Additional features include **speed-run modes**, **challenge rooms** with leaderboards, and **customizable weapon skins** for player expression. The V2 map structure provides a foundation for modular expansion with new zones and abilities.'
      }
    ],

    challenges: [
      'Making recoil feel responsive without being unpredictable—players needed to know exactly where they\'d land',
      'Teaching layered movement tech (recoil hops, ricochets, wall bounces) without overwhelming new players',
      'Solving the soft-lock problem: finite ammo meant players could trap themselves and had to restart entire levels'
    ],

    solutions: [
      'Added laser trajectory preview showing exactly where you\'ll land after firing',
      'Designed 5 levels using "Teach → Test → Twist" structure: learn one thing, use it, then combine it',
      'V2 switched to regenerating ammo with slot upgrades—no more soft-locks, just cooldown management',
      'Built a Metroidvania-style map on paper with checkpoints, shortcuts, and optional hard-mode routes'
    ],

    features: [
      'Precision shooting mechanics with physics-based recoil',
      'Interconnected rooms with multiple traversal routes',
      'Quick respawns and fair checkpoints',
      'Explore → Learn → Bypass → Unlock progression cycle',
      'Recoil-powered movement system',
      'Laser trajectory preview for predictable movement',
      'Regenerating ammo with upgradeable slots'
    ],

    gallery: [],

    videoUrl: 'https://www.youtube.com/embed/oXmuplxd0LM',

    links: {
      itchIo: 'https://hemants4.itch.io/ammo-batics',
      gdd: `${BASE_URL}ammobatics_gdd.html`
    }
  },

  {
    id: 'flowlog',
    title: 'Momentum',
    category: 'UX/UI & Gamification',
    year: '2024',
    description: 'A gamified documentation app that makes capturing ideas effortless and rewarding.',
    shortDescription: 'Gamified documentation app with AI assistance',
    tools: ['Figma', 'Adobe Creative Suite', 'Notion'],
    thumbnail: `${BASE_URL}images/projects/flowlog/1.png`,

    overview: 'Most people stop journaling after three days. I wanted to know why. Momentum came out of interviews with 20+ students and professionals who all said the same thing: "I want to document my life, but it feels like homework." So I designed an app that treats documentation like a game—XP for entries, streaks for consistency, AI that organizes everything automatically. Two-week research sprint, full UI/UX prototype in Figma, grounded in Octalysis gamification framework and Self-Determination Theory.',

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Problem',
        content: `I interviewed 20+ people about why they quit journaling. Three patterns emerged: 78% said it takes too long (5+ minutes felt like a chore), 65% said they got no feedback or sense of progress, and 82% wanted gamification or AI to make it easier. The friction isn't lack of desire—it's bad UX.`
      },
      {
        title: 'How It Works',
        content: `Capture (voice, text, or photo) → AI formats and tags it → You earn XP and streak progress → Weekly vibe charts show patterns → Unlocked themes keep it fresh. The loop takes under 2 minutes. Open app, say what happened, close app. AI handles the rest. Streaks use "grace periods" so missing one day doesn't nuke your progress—because guilt kills habits.`
      },
      {
        title: 'Who It\'s For',
        content: `The research split into four groups: Busy Professionals (need voice-to-text, no time to type), Creative Dreamers (blank page anxiety, need prompts), Overwhelmed Parents (photos scattered everywhere, feel guilty about gaps), Growth Seekers (want visible progress metrics). I designed for all four—voice entry, creative prompts, auto-photo timelines, XP tracking.`
      },
      {
        title: 'Gamification Framework',
        content: `I used Yu-kai Chou's Octalysis model to balance "White Hat" (healthy motivation) vs "Black Hat" (addictive pressure). High emphasis on Accomplishment (XP, streaks), Empowerment (you control everything, AI just helps), and Ownership (unlock themes). Low emphasis on Loss Avoidance (grace periods prevent guilt spirals) and Scarcity (no timers or energy bars). The goal: make it sticky without being manipulative.`
      },
      {
        title: 'What I Learned',
        content: `Four critical insights emerged:

**1. Reducing Friction = Retention**
Simple capture methods (voice, photo, quick text) were the #1 driver for daily use. Every extra tap or screen reduces engagement.

**2. Gamification Builds Habits**
Streaks and challenges proved crucial for consistency. Users responded to visible progress markers that celebrated effort, not perfection.

**3. AI Adds Value, Not Complexity**
Users loved AI summaries and insights that revealed patterns in their entries. However, they rejected AI-written entries, preferring authentic self-expression with AI as a supportive tool.

**4. Personalization = Connection**
Customizable themes, avatars, and visual styles made the documentation space feel "theirs," increasing emotional investment and long-term retention.`
      },
      {
        title: 'The Momentum Loop',
        content: `The app follows a cyclical habit system backed by behavioral psychology:

**📸 Capture** → Quick entry via voice, photo, or text (<2 mins). Hardware shortcuts reduce friction.

**🧠 Reflect** → Review AI-generated insights: auto-tagging, mood graphs, weekly scrapbooks.

**🏆 Reward** → View progress and achievements: streaks, badges, growing visual metaphors (plants, trees).

**🔁 Repeat** → Return through smart, gentle prompts and personalized challenges.

This creates a sustainable engagement cycle based on Self-Determination Theory: Autonomy (you control everything), Competence (visible progress), Relatedness (optional social circles).`
      }
    ],

    role: 'UX/UI Designer, Product Designer, Researcher',
    duration: '2 Weeks',
    teamSize: 'Solo Design Project',
    platform: ['iOS', 'Android', 'Web'],

    challenges: [
      'Making gamification feel motivating, not manipulative—how do you reward consistency without creating anxiety?',
      'AI had to help organize, not write—users rejected any AI-generated content as "inauthentic"',
      'Balancing speed (under 2 mins) with depth (rich reflection tools) without overwhelming the UI',
      'Streaks are powerful but dangerous—miss one day and people give up forever. How to fix that?'
    ],

    solutions: [
      'Used Octalysis Framework to emphasize "White Hat" drives (accomplishment, empowerment) over "Black Hat" (scarcity, loss)',
      'Built voice-to-text, photo-first entry, and hardware shortcuts (volume button triggers app)',
      'Added "Streak Freeze" (1 free skip per week) and grace periods—missed days = rest days, not failures',
      'AI formats, tags, and summarizes—but never writes entries. Users keep full creative control',
      'Designed XP for effort (entries, tags) not quality—no perfectionism paralysis'
    ],

    features: [
      'Quick capture through text, voice-to-text, or images (< 2 mins)',
      'AI-powered formatting, summarization, and auto-tagging',
      'XP system with levels, badges, and streak tracking',
      'Weekly vibe charts and monthly AI-generated reflections',
      'Unlockable themes and fonts for personalization',
      'Micro-prompts and "Spin the Wheel" creative challenges',
      'Hardware trigger shortcuts for instant capture',
      'Privacy-first design with intentional sharing options',
      'Resurfaced entries to encourage reflection',
      'Evolving visual metaphors (growing plants, scrapbooks)'
    ],

    // Research data for visualizations
    researchData: {
      userBarriers: [
        { label: 'Takes Too Long', value: 78, unit: '%', color: '#ff7849' },
        { label: 'No Feedback', value: 65, unit: '%', color: '#ffb347' },
        { label: 'Want AI/Gamification', value: 82, unit: '%', color: '#4ade80' }
      ],
      personas: [
        { label: 'Busy Professionals', value: 28, color: '#ff7849' },
        { label: 'Creative Dreamers', value: 24, color: '#ffb347' },
        { label: 'Overwhelmed Parents', value: 26, color: '#4ade80' },
        { label: 'Growth Seekers', value: 22, color: '#60a5fa' }
      ],
      octalysisBalance: [
        { label: 'Accomplishment', value: 90, unit: '%', color: '#4ade80' },
        { label: 'Empowerment', value: 95, unit: '%', color: '#4ade80' },
        { label: 'Ownership', value: 85, unit: '%', color: '#ffb347' },
        { label: 'Social Influence', value: 40, unit: '%', color: '#60a5fa' },
        { label: 'Loss Avoidance', value: 20, unit: '%', color: '#f87171' },
        { label: 'Scarcity', value: 15, unit: '%', color: '#f87171' }
      ]
    },

    gallery: [
      `${BASE_URL}images/projects/flowlog/1.png`,
      `${BASE_URL}images/projects/flowlog/2.png`,
      `${BASE_URL}images/projects/flowlog/3.png`,
      `${BASE_URL}images/projects/flowlog/4.png`,
      `${BASE_URL}images/projects/flowlog/5.png`,
      `${BASE_URL}images/projects/flowlog/6.png`,
      `${BASE_URL}images/projects/flowlog/7.png`,
      `${BASE_URL}images/projects/flowlog/8.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/qCtC_vci1G0',

    links: {
      gdd: `${BASE_URL}Gamification_gdd.html`
    }
  },

  {
    id: 'flow-and-hold',
    title: 'Flow & Hold',
    category: 'Card Game Design',
    year: '2024',
    description: 'A philosophical card game redefining the binary of containment and continuum of water.',
    shortDescription: 'Card game exploring water\'s dual nature',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Tabletop Simulator'],
    thumbnail: `${BASE_URL}images/projects/flow-and-hold/Frame-19.png`,

    overview: 'Water exists in a constant state of duality - it can be contained yet flows freely, held yet always seeking escape. Flow & Hold challenges players to think beyond traditional boundaries and explore the philosophical nature of water through strategic card gameplay. This innovative card game redefines the existing binary of contain and continuum, creating a unique gaming experience that mirrors water\'s fundamental properties through elegant mechanics and thoughtful design.',

    role: 'Game Designer, Concept Developer',
    duration: '1 week',
    teamSize: 'Multi disciplinary group Project',
    platform: ['Physical Card Game'],

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Spark — Initial Ideation',
        content: 'We started by asking: **What does water do?** It flows in rivers, rests in ponds, crashes as tsunamis, hides in bottles. We noticed something profound: the container changes water\'s meaning. A bottle suggests purity and profit. A dam implies control. A flood represents chaos. We began by mapping where water lives and how humans categorize it based on containment.',
        image: 'Frame.png'
      },
      {
        title: 'The Nature of Water',
        content: 'Through our research, we identified water\'s fundamental dualities:\n\n**Calm vs. Chaos** — A lake versus a flood.\n\n**Fluid vs. Solid vs. Vapour** — Water slips between states seamlessly.\n\n**Vital yet Volatile** — It gives life and destroys it.\n\nThis duality became the foundation of our game concept. Water doesn\'t choose between being held or flowing—it exists in both states simultaneously.',
        image: 'Frame-1.png'
      },
      {
        title: 'The Core Question',
        content: 'Our central inquiry emerged: **Why do we trust water only when it\'s in a glass or bottle? Who decided that?** And why is the same water suddenly called "holy" in a temple or "dirty" in a flood? The nature of water is redefined by the **container** it occupies. This philosophical observation became the mechanical heart of our card game.',
        image: 'Frame-10.png'
      },
      {
        title: 'Game Concept — Container Defines Nature',
        content: 'The game concept crystallized around a simple truth: **Water\'s essence is defined by one innate quality—its flow.** Yet humans constantly try to contain it, categorize it, control it. Players navigate this tension through card-based strategic gameplay, balancing "Hold" cards (containment, stability, control) with "Flow" cards (movement, chaos, freedom). The winner is the player who best strikes the balance.',
        image: 'Frame-11.png'
      },
      {
        title: 'Card Design & Visual Language',
        content: 'We developed a clean, minimalist visual language using three primary colors:\n\n**Blue** for Hold cards (ocean, stability, containment)\n\n**Cream/Yellow** for Flow cards (waterfalls, movement, freedom)\n\n**Navy/Gold** for Disaster cards (tsunamis, floods, disruption)\n\nEach card features abstract shapes inspired by water\'s forms—waves, droplets, spirals—combined with clear iconography to communicate game mechanics instantly.',
        image: 'Frame-23.png'
      }
    ],

    challenges: [
      'Creating meaningful philosophical depth while maintaining engaging, competitive gameplay',
      'Translating abstract concepts about water\'s nature into clear, intuitive visual card designs',
      'Making complex philosophical concepts accessible to players of varying backgrounds',
      'Balancing "Hold" and "Flow" mechanics so neither strategy dominates'
    ],

    solutions: [
      'Developed dynamic water states that change based on player actions',
      'Created strategic balance between containment and release mechanics',
      'Designed extensive research into water\'s physical and metaphysical properties',
      'Implemented playtesting feedback to balance philosophy with engaging gameplay',
      'Used clean iconography and color coding for instant card recognition'
    ],

    features: [
      'Dynamic water states responsive to player actions',
      'Strategic balance between containment (Hold) and release (Flow)',
      'Philosophical depth encouraging reflective gameplay',
      'Three card types: Hold, Flow, and Disaster',
      'Elegant minimalist card design reflecting water properties',
      'Meditative yet competitive gameplay experience'
    ],

    gallery: [
      `${BASE_URL}images/projects/flow-and-hold/Frame-22.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-24.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-25.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-26.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-27.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-28.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-29.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-30.png`
    ],

    links: {
      gdd: `${BASE_URL}flow-and-hold_gdd.html`
    }
  },

  {
    id: 'dp2-motor-play',
    title: 'DP2 — AR Motor-Play',
    category: 'Applied Game',
    year: '2024 (Ongoing)',
    description: 'An applied AR game concept for autistic children with motor coordination support.',
    shortDescription: 'AR therapeutic game for ASD + DCD (Ongoing)',
    tools: ['Unity', 'AR Foundation', 'Figma', 'Research Methods', 'UX Design'],
    thumbnail: `${BASE_URL}images/projects/dp2-motor-play/thumbnail.jpg`,

    overview: `I spent weeks watching kids with autism use motor-skill apps. Most apps were either too boring (clinical) or too chaotic (overstimulating). None adapted to individual needs. DP2 is my attempt to fix that: an AR game where kids pop bubbles, step on floor pads, and catch floating objects—while a friendly mascot mirrors their movements on-screen. Built on research with N=12 field observations, 15+ app reviews, and frameworks from OT/SLP experts. Still in development.`,

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Gap I Found',
        image: 'Apps For ASD kids.png',
        content: `I reviewed 15+ apps for autistic kids. Most failed in the same ways: no adaptation (one-size-fits-all difficulty), sensory overload (flashing lights, loud sounds), or boring clinical interfaces. Kids with DCD (Developmental Coordination Disorder) need motor practice, but existing apps treat it like homework.

**What's missing:**
• Difficulty that adapts to each kid (not just "easy/medium/hard")
• Sensory controls (volume, brightness, contrast)
• Low-pressure format (mistakes don't punish, they inform)
• Something kids actually want to open

DP2 uses AR to make motor practice feel like play. Avatar mirrors your body (<150ms latency), so you see "I did that" immediately.`
      },
      {
        title: 'Research Method',
        image: 'Initial research.png',
        content: `I structured the research around four core questions:
1. Which motor skills to target first? (reach, balance, hand-eye coordination)
2. What sensory elements help vs harm? (colors, sounds, visual clutter)
3. How to measure progress without burdening caregivers?
4. What session length actually works?

**What I did:** Observed 12 kids using existing apps, reviewed 15+ competitor apps, interviewed OTs and SLPs.

**What I learned:**
✓ Big, simple targets with warm sounds = better focus
✓ Familiar animation style (Disney/Pixar) = more willing to try
✓ 10-15 min sessions with built-in breaks = sustainable
✓ Avatar mirroring = "I did that!" sense of agency
✓ Physical tokens > digital points (tangible rewards work better)`
      },
      {
        title: 'Design Principles',
        image: 'Inferences.png',
        content: `Everything in DP2 follows four rules:

**1. Low Cognitive Load**
Same structure every session. One rule at a time. Predictable visuals and sounds. No surprises.

**2. Gradual Scaffolding**
Difficulty increases by ~10% only after two consecutive successes at 80%+ accuracy. Hit detection is generous (better to succeed than fail).

**3. Avatar Mirroring**
Your movement appears on screen in under 150ms. This creates "I did that!" moments—the kid sees cause and effect immediately.

**4. Privacy-First Data**
Tracks accuracy, reach height/distance, reaction time, L/R balance. Stored locally. Optional CSV export. Never used for diagnosis—only for adapting difficulty and showing progress.`
      },
      {
        title: 'The Four Mechanics',
        image: 'Character Ref1.png',
        content: `Each mechanic targets specific motor skills:

**🎈 Color Bubbles**
Pop bubbles that appear at different heights. Teaches reach range and targeting.

**👣 Trail Steps**
Step on left/right floor pads in sequence. Builds balance and bilateral coordination.

**🎯 Catch & Place**
Grab floating objects, match them to color-coded baskets. Hand-eye coordination and controlled force.

**🪞 Mirror Moves**
Mascot shows a pose, kid copies it. Body awareness and left/right mapping.

**🌙 Calm Cave**
Breathing fireflies for regulation breaks. Prevents overstimulation. Optional, kid-initiated.`
      },
      {
        title: 'Why It Looks Like This',
        image: 'Character Ref 2.png',
        content: `Autistic kids respond well to clear, expressive characters (think Pixar). So the mascot has big eyes, readable emotions, smooth shapes—nothing jagged or unpredictable.

**Sensory design:**
🎨 Colors are bright but not harsh. High-contrast mode available.
🔊 Warm voiceover, soft success sounds. No buzzers or fail noises. Volume + Quiet Mode.
✋ Optional gentle vibration on success (never on failure).

**Avatar tracking:**
Simplified skeleton—tracks reach direction, not finger precision. Kids don't need perfect form. The avatar mirrors intent, not perfection. That's how you preserve "I did that!" feeling without frustration.`
      },
      {
        title: 'Tech Stack',
        image: 'Hand Ref.png',
        content: `**Platform:** Unity 2022.3 + AR Foundation 5.x (iOS ARKit / Android ARCore). Targets iPad Pro/Air (2020+) and Galaxy Tab S7+.

**Motion Tracking:** MediaPipe Pose (33 skeleton landmarks at 30fps) → Kalman filter (smooths jitter) → Custom IK solver → Avatar animation. Total latency <150ms.

**Adaptive Difficulty:** ML.NET model adjusts target size/distance/speed based on rolling success rate (80% threshold = harder, 60% = easier).

**Data:** SQLite local storage. Optional CSV export for caregivers/therapists. COPPA-compliant, no cloud sync by default, PII stripped.`
      },
      {
        title: 'Design Philosophy',
        image: 'Field Research.png',
        content: `I grounded DP2 in three frameworks:

**Octalysis (Gamification):** Tokens for effort (not perfection). Avatar gives instant "you did it" feedback. Optional "helping the world" narrative framing.

**Self-Determination Theory:** Autonomy (kid controls start/stop/skip), Competence (70-80% success rate keeps it in flow), Relatedness (mascot companion, not instructor).

**Neurodiversity-Affirming Design:** Built **with** input from autistic individuals and OTs, not just **for** them. Key principles: sensory controls = kid in charge, no forced eye contact, "Calm Cave" = regulation is valid, progress = capability growth (never "fixing" or "normalizing").

Field research: kids engage most when they feel in control. Pause anytime. Skip anything. Adjust all settings. Exit without penalty.`
      }
    ],

    role: 'Game Designer, UX Researcher, Applied Game Design',
    duration: '2 Months (Ongoing)',
    teamSize: '2 People',
    platform: ['iPad', 'Android Tablet', 'AR-enabled devices'],

    challenges: [
      'Attention spans vary wildly (3-15 mins). How do you design for that range?',
      'Sensory sensitivities are individual—what works for one kid overwhelms another',
      'Making it therapeutic without feeling clinical. Kids smell "homework" a mile away',
      'AR tracking drifts. Kids move unpredictably. How to keep avatar sync under 150ms?',
      'Privacy laws (COPPA) + ethical concerns: collect useful data without being invasive'
    ],

    solutions: [
      'Designed 10-15min sessions with built-in breaks. Session timer visible to caregivers',
      'Created Sensory Presets: Quiet Mode (dim, low volume), High-Contrast Mode, fully customizable',
      'Used familiar animation language (Pixar-style mascot) + token rewards (not points) + zero punishment for "failure"',
      'MediaPipe Pose + Kalman filter + custom IK = <150ms. Large hit detection compensates for drift',
      'Local SQLite storage. Optional CSV export with clear consent. No PII. COPPA-compliant by default'
    ],

    features: [
      'Avatar mirroring system that maps child movements to on-screen character',
      'Four core mechanics: Color Bubbles (reach & tap), Trail Steps (balance), Catch & Place (precision), Mirror Moves (pose imitation)',
      'Calm Cave regulation activity with breathing fireflies for arousal down-shifting',
      'Adaptive difficulty system (±10% adjustments based on 80%/60% success thresholds)',
      'Token reward system with specific praise and sticker chooser',
      'Sensory presets: Quiet Mode, high-contrast toggle, volume controls',
      'Light telemetry: accuracy, height/distance, reaction time, L/R balance, midline crosses',
      'Caregiver controls: pause/skip/end, difficulty sliders, session timer, data export',
      'Privacy-by-default with local storage and optional anonymized data sharing'
    ],

    // Research data for visualizations
    researchData: {
      keyMetrics: [
        { value: '12', label: 'Kids Observed', description: 'Field observations using existing motor apps' },
        { value: '15+', label: 'Apps Analyzed', description: 'Competitive analysis of ASD apps' },
        { value: '<150ms', label: 'Avatar Latency', description: 'Real-time movement mirroring target', color: '#4ade80' },
        { value: '10-15min', label: 'Session Length', description: 'Optimal engagement window', color: '#ffb347' },
        { value: '80%', label: 'Success Threshold', description: 'Target for difficulty adjustment', color: '#60a5fa' }
      ],
      researchFindings: [
        { label: 'Prefer Big Targets + Gentle Sounds', value: 85, unit: '%', color: '#4ade80' },
        { label: 'Respond to Familiar Animation', value: 78, unit: '%', color: '#ffb347' },
        { label: 'Engage with 10-15min Sessions', value: 92, unit: '%', color: '#4ade80' },
        { label: 'Agency from Avatar Mirroring', value: 88, unit: '%', color: '#60a5fa' }
      ]
    },

    gallery: [
      `${BASE_URL}images/projects/dp2-motor-play/Initial research.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Apps For ASD kids.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Field Research.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Inferences.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Character Ref1.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Character Ref 2.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Hand Ref.png`
    ],

    videoUrl: `${BASE_URL}images/projects/dp2-motor-play/Dp-2.mp4`,

    links: {
      conceptGdd: `${BASE_URL}DP2_Concept_GDD.html`,
      gameGdd: `${BASE_URL}DP2_Game_GDD.html`
    }
  },

  {
    id: 'spring-twilight',
    title: 'Spring Twilight',
    category: 'Experimental Game',
    year: '2024',
    description: 'Light spreads. You pass it on—until the wind takes your flame.',
    shortDescription: 'Poetry-to-mechanic experimental game',
    tools: ['Unity', 'C#', 'Photoshop', 'Audacity'],
    thumbnail: `${BASE_URL}images/projects/spring-twilight/thumbnail.png`,

    overview: 'Inspired by Yosa Buson\'s haiku: "The light of a candle / is transferred to another candle— / spring twilight." Spring Twilight transforms this poetic image into interactive play. You begin as a single candle in a dark field, transferring your flame to unlit sky-lanterns drifting past. Each click ignites a lantern that rises and persists. When the wind finally snuffs your candle, the camera lifts to reveal a sky filled with every lantern you lit—your quiet legacy. A minimalist meditation on generosity, impermanence, and the cumulative impact of small acts of giving.',

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'Concept & Inspiration',
        content: `The design turns Yosa Buson's poetic image into play: small acts of giving accumulate into a sky of light. You begin as a single candle in a dark field. Unlit sky-lanterns drift past. Each click transfers your flame; the lantern rises and persists. When the wind finally snuffs your candle, the camera lifts to reveal the sky filled with every lantern you lit—your quiet legacy.

**Core Philosophy:** "If you keep giving happiness to others, the real joy returns to you." Mechanically, your candle is mortal; the lights you share endure. The payoff is larger than the actions that produced it.

**Attribution:** Inspired by a haiku by Yosa Buson (public domain).`
      },
      {
        title: 'Core Mechanics',
        content: `**Transfer of Light:** Click unlit lanterns to ignite them before they float away. Each successful transfer sends a lantern rising into the sky.

**Wind as Obstacle:** Timed gusts push lanterns, distort your flame, and can extinguish you. Reading wind cues is essential—leaf swirls, audio whooshes, and screen shimmer telegraph incoming gusts.

**End Reveal:** On loss, the scene blooms into a luminous "spring twilight," showing the cumulative impact of your generosity. The sky fills with every lantern you lit—a constellation of your giving.

The game creates an elegant loss/payoff loop: wind ends you, but your gifts remain.`
      },
      {
        title: 'Theme & Design Philosophy',
        content: `**Central Theme:** Generosity and impermanence intertwine. Your candle's mortality contrasts with the enduring lights you share.

**Poetry-to-Mechanic Translation:** The haiku's "transfer" becomes the core interaction—ignition and persistence. The wind represents life's inevitable challenges, while the final reveal embodies the poem's "spring twilight."

**Emotional Journey:** Players experience calm moment-to-moment gameplay that builds into a reflective, contemplative payoff. The design emphasizes that small, repeated acts of kindness create something greater than their sum.`
      },
      {
        title: 'Aesthetics & Audio Design',
        content: `**Visual Language:**
• Twilight palette with warm candle bloom
• Particle sparks during flame transfer
• Screen shimmer effect for wind telegraphs
• Luminous final reveal with sky-crowded lantern-stars

**Sound Design:**
• Soft chime on successful ignition
• Airy wind layers during gusts
• Ambient soundscape supporting meditative mood
• Audio cues reinforcing wind patterns

The cohesive visual and sound design serves the theme, creating an atmosphere of quiet contemplation and ultimate revelation.`
      }
    ],

    role: 'Solo Designer-Developer',
    duration: '3 Weeks',
    teamSize: 'Solo Project',
    platform: ['PC', 'Mac', 'Web'],

    challenges: [
      'Translating abstract poetry into concrete, playable mechanics',
      'Creating emotional resonance through minimal interaction',
      'Balancing challenge (wind timing) with contemplative atmosphere',
      'Designing telegraphed wind cues that feel natural, not mechanical',
      'Crafting a reveal that justifies and recontextualizes the player\'s loss'
    ],

    solutions: [
      'Developed simple click-to-transfer mechanic that embodies the haiku\'s core image',
      'Created layered wind system with visual, audio, and timing cues',
      'Implemented persistent lanterns that accumulate to create emotional payoff',
      'Designed camera reveal that transforms defeat into contemplative beauty',
      'Built lightweight UI focusing player attention on flame and lanterns'
    ],

    features: [
      'Poetry-inspired core mechanic: transfer light through clicking',
      'Wind-based obstacle system with telegraphed cues',
      'Persistent lantern accumulation visible in final reveal',
      'Minimalist timing-based gameplay',
      'Twilight aesthetic with warm lighting and particle effects',
      'Responsive audio design with soft chimes and wind layers',
      'Camera choreography for emotional reveal',
      'Meditative pacing encouraging reflection'
    ],

    gallery: [
      `${BASE_URL}images/projects/spring-twilight/screenshot-1.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-2.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-3.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-4.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/LdWjM72sZjo',

    links: {}
  }
]

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id)
}

// Helper function to get next/previous projects
export const getAdjacentProjects = (currentId) => {
  const currentIndex = projectsData.findIndex(p => p.id === currentId)
  const nextIndex = (currentIndex + 1) % projectsData.length
  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length

  return {
    next: projectsData[nextIndex],
    previous: projectsData[prevIndex]
  }
}
