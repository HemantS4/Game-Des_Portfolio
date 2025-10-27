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
    tools: ['Unity', 'Blender', 'Photoshop', 'C#', 'Maya'],
    thumbnail: `${BASE_URL}images/projects/ammo-batics/Cover.png`,

    // Detailed project information
    overview: 'Imagine falling into a deep, living cave system where every shot fired becomes a movement decision. Ammo-batics is a 2D momentum-centric platformer that transforms traditional shooting mechanics into a unique traversal system. You\'ve fallen into a karst system where flora has evolved weaponized spores. Armed with the "Kickspark" - a tool that doubles as cutter and propulsion pistol - players must escape upward by shooting to generate recoil-powered jumps, chaining shots, wall hops, and platforms.',

    role: 'Game Designer, Level Designer, 3D Artist',
    duration: '2 Weeks',
    teamSize: 'Solo Project',
    platform: ['PC'],

    challenges: [
      'Balancing realistic recoil physics with responsive, predictable player movement',
      'Creating a smooth learning curve that teaches complex movement combinations',
      'Ensuring bioluminescent UI elements provide clear navigation cues while maintaining atmospheric immersion'
    ],

    solutions: [
      'Developed precision shooting mechanics with physics-based recoil through extensive fine-tuning',
      'Created interconnected rooms with multiple traversal routes for exploration',
      'Implemented quick respawns and fair checkpoints for tight gameplay flow',
      'Designed vertical shortcuts and unlockable connectors encouraging backtracking'
    ],

    features: [
      'Precision shooting mechanics with physics-based recoil',
      'Interconnected rooms with multiple traversal routes',
      'Quick respawns and fair checkpoints',
      'Explore → Learn → Bypass → Unlock progression cycle',
      'Bioluminescent cave environments',
      'Recoil-powered movement system'
    ],

    gallery: [
      `${BASE_URL}images/projects/ammo-batics/title-card.png`,
      `${BASE_URL}images/projects/ammo-batics/Cover.png`,
      `${BASE_URL}images/projects/ammo-batics/1.png`,
      `${BASE_URL}images/projects/ammo-batics/2.png`,
      `${BASE_URL}images/projects/ammo-batics/3.png`,
      `${BASE_URL}images/projects/ammo-batics/4.png`,
      `${BASE_URL}images/projects/ammo-batics/5.png`,
      `${BASE_URL}images/projects/ammo-batics/MIniMap.png`
    ],

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
    tools: ['Figma', 'Principle', 'Miro', 'Adobe Creative Suite', 'Notion'],
    thumbnail: `${BASE_URL}images/projects/flowlog/thumbnail.jpg`,

    overview: 'Momentum is a gamified documentation and journaling app that helps students, designers, and professionals capture, organize, and grow their ideas while staying motivated through game mechanics such as XP, streaks, badges, and unlockable themes. It combines AI assistance with habit-forming design to make documentation both effortless and rewarding. Designed for design students, creative professionals, and working individuals who generate numerous ideas daily but lack a structured, motivating way to store, organize, and reflect on them.',

    role: 'UX/UI Designer, Product Designer, Researcher',
    duration: '2 Weeks',
    teamSize: 'Solo Design Project',
    platform: ['iOS', 'Android', 'Web'],

    challenges: [
      'Creating meaningful gamification that supports intrinsic creativity rather than creating dependency on rewards',
      'Designing AI assistance that enhances creativity without overwhelming or replacing human control',
      'Balancing accessibility with depth - making quick capture instant while supporting rich documentation',
      'Building emotionally intelligent reflection features that encourage ownership without feeling intrusive'
    ],

    solutions: [
      'Developed evidence-based design using Octalysis Framework, Self-Determination Theory, and Fogg Behavior Model for balanced gamification',
      'Created instant capture through voice-to-text, images, and quick text entry with AI-powered organization',
      'Implemented non-intrusive XP system, streaks, and badges that support consistency without addiction',
      'Designed AI as collaborator: formats, summarizes, and curates while user maintains creative control',
      'Built visual summaries and vibe charts for meaningful reflection'
    ],

    features: [
      'Quick capture through text, voice-to-text, or images',
      'AI-powered formatting, summarization, and categorization',
      'XP system with levels, badges, and streak tracking',
      'Weekly vibe charts and monthly AI-generated reflections',
      'Unlockable themes and fonts for personalization',
      'Micro-prompts for creative inspiration',
      'Privacy-first design with intentional sharing options',
      'Resurfaced entries to encourage reflection'
    ],

    gallery: [
      `${BASE_URL}images/projects/flowlog/screenshot-1.jpg`,
      `${BASE_URL}images/projects/flowlog/screenshot-2.jpg`,
      `${BASE_URL}images/projects/flowlog/screenshot-3.jpg`,
      `${BASE_URL}images/projects/flowlog/ui-mockup.jpg`
    ],

    videoUrl: 'PLACEHOLDER_VIDEO_URL',

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
    thumbnail: `${BASE_URL}images/projects/flow-and-hold/thumbnail.jpg`,

    overview: 'Water exists in a constant state of duality - it can be contained yet flows freely, held yet always seeking escape. Flow & Hold challenges players to think beyond traditional boundaries and explore the philosophical nature of water through strategic card gameplay. This innovative card game redefines the existing binary of contain and continuum, creating a unique gaming experience that mirrors water\'s fundamental properties through elegant mechanics and thoughtful design.',

    role: 'Game Designer, Concept Developer',
    duration: '1 week',
    teamSize: 'Multi disciplinary group Project',
    platform: ['Physical Card Game'],

    challenges: [
      'Creating meaningful philosophical depth while maintaining engaging, competitive gameplay',
      'Translating abstract concepts about water\'s nature into clear, intuitive visual card designs',
      'Making complex philosophical concepts accessible to players of varying backgrounds'
    ],

    solutions: [
      'Developed dynamic water states that change based on player actions',
      'Created strategic balance between containment and release mechanics',
      'Designed extensive research into water\'s physical and metaphysical properties',
      'Implemented playtesting feedback to balance philosophy with engaging gameplay'
    ],

    features: [
      'Dynamic water states responsive to player actions',
      'Strategic balance between containment and release',
      'Philosophical depth encouraging reflective gameplay',
      'Multiple simultaneous water states',
      'Elegant card design reflecting water properties',
      'Meditative gameplay experience'
    ],

    gallery: [
      `${BASE_URL}images/projects/flow-and-hold/screenshot-1.jpg`,
      `${BASE_URL}images/projects/flow-and-hold/screenshot-2.jpg`,
      `${BASE_URL}images/projects/flow-and-hold/card-designs.jpg`,
      `${BASE_URL}images/projects/flow-and-hold/gameplay.jpg`
    ],

    videoUrl: 'PLACEHOLDER_VIDEO_URL',

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

    overview: `DP2 is an ongoing applied AR game concept designed for autistic children (ages 5-10), many with Developmental Coordination Disorder (DCD). The project emerged from extensive field research observing existing apps for ASD children and identifying gaps in motor skill development support.

**Research Foundation:**
Our research synthesis followed a structured framework: Questions → Answers → Inferences. We examined which motor outcomes to scaffold first, how sensory elements (color, sound, character style) affect attention, what signals show progress without burden, and which session formats sustain participation. Key findings revealed that big, colorful, predictable targets with gentle sounds help focus, familiar animation language increases willingness to try, and 10-15 minute routines with breaks are most effective.

**Core Concept:**
The game blends therapeutic learning with light data collection for gentle progress tracking. A mascot guide introduces each session's "quest" while an avatar mirrors the child's movements on screen, validating every action with <150ms latency. This real-time feedback builds agency and confidence while maintaining engagement.

**Mini-Game Mechanics:**
Four core mechanics target different motor skills: Color Bubbles (reach & tap for height and accuracy), Trail Steps (balance and bilateral coordination), Catch & Place (hand-eye coordination and graded force), and Mirror Moves (pose imitation and bilateral mapping). Each mechanic features generous colliders, clear visual feedback, and adaptive difficulty that scales gradually by ±10%.

**Character & Sensory Design:**
Character design drew from extensive reference research, prioritizing friendly, expressive animation styles that feel familiar without licensed IP. Hand and gesture references informed natural movement mapping. The sensory direction uses saturated-soft colors, warm voice-over, and optional Quiet Mode to accommodate sensory sensitivities common in autistic children.

**Therapeutic Integration:**
The "Calm Cave" regulation activity provides co-regulation breaks with breathing fireflies, helping children down-shift arousal and stay in their optimal zone. Token rewards after each round provide positive reinforcement without creating dependency, following evidence-based gamification principles from the Octalysis Framework and Self-Determination Theory.

**Privacy & Ethics:**
As this is not a medical device, data handling prioritizes privacy-by-default with local-first storage and optional anonymized CSV export. Telemetry tracks accuracy, achievable height/distance, reaction times, and L/R balance to inform adaptive difficulty and provide caregivers with progress insights, all with clear consent protocols.

Currently in active development with ongoing research and design iterations for clinic, school, and home use with caregivers.`,

    role: 'Game Designer, UX Researcher, Applied Game Design',
    duration: '2 Months (Ongoing)',
    teamSize: '2 People',
    platform: ['iPad', 'Android Tablet', 'AR-enabled devices'],

    challenges: [
      'Designing for variable attention spans and sensory sensitivities in autistic children',
      'Creating predictable, low-cognitive-load interactions that scaffold motor skill development',
      'Balancing therapeutic goals with engaging gameplay without over-stimulation',
      'Implementing privacy-first data collection for progress tracking in sensitive contexts',
      'Addressing space constraints and safety concerns for AR movement-based activities'
    ],

    solutions: [
      'Developed evidence-based design framework using research synthesis (questions → answers → inferences)',
      'Created predictable session structure with gentle scaffolding (10% difficulty steps) and positive reinforcement',
      'Implemented avatar mirroring system that validates child actions on-screen with <150ms latency',
      'Designed sensory-smart interface with saturated-soft colors, warm VO, quiet mode, and high-contrast toggle',
      'Built in AR bounds, in-place/short-step activities, and "Calm Cave" regulation breaks',
      'Established local-first telemetry with optional anonymized CSV export and clear consent protocols'
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
