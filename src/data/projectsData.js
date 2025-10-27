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
    thumbnail: `${BASE_URL}images/projects/ammo-batics/title-card.png`,

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
      `${BASE_URL}images/projects/ammo-batics/MIniMap.png`
    ],

        videoUrl: 'https://www.youtube.com/watch?v=oXmuplxd0LM&list=PLzsKV6Sv-yPG93MF2XV7B2x980g5FxmaS',

    links: {
      itchIo: 'https://hemants4.itch.io/ammo-batics',
      gdd: `${BASE_URL}ammobatics_gdd.html`
    }
  },

  {
    id: 'flowlog',
    title: 'FlowLog',
    category: 'UX/UI & Gamification',
    year: '2024',
    description: 'A gamified journaling and documentation app for creative professionals.',
    shortDescription: 'Gamified journaling app with AI assistance',
    tools: ['Figma', 'Principle', 'Miro', 'Adobe Creative Suite', 'Notion'],
    thumbnail: `${BASE_URL}images/projects/flowlog/thumbnail.jpg`,

    overview: 'FlowLog is a gamified journaling and documentation app designed for design students, creative professionals, and working individuals who generate numerous ideas daily but lack a structured, motivating way to store, organize, and reflect on them. The app combines AI-assisted organization with gamified habit design, helping users document their thoughts, designs, and inspirations effortlessly while staying engaged and consistent.',

    role: 'UX/UI Designer, Product Designer, Researcher',
    duration: '2 Weeks',
    teamSize: 'Solo Design Project',
    platform: ['iOS', 'Android', 'Web'],

    challenges: [
      'Successfully transitioning from reflective journaling to creative documentation while maintaining engagement',
      'Designing AI assistance that enhances creativity without overwhelming or replacing human control',
      'Implementing gamification that supports intrinsic creativity rather than creating dependency on rewards'
    ],

    solutions: [
      'Developed evidence-based design using Octalysis Framework, Self-Determination Theory, and Fogg Behavior Model',
      'Created voice-to-text transcription for rapid idea capture',
      'Implemented AI-powered formatting, summarization, and categorization',
      'Designed XP system, badges, and streak tracking balanced with user autonomy'
    ],

    features: [
      'Voice-to-text transcription for rapid idea capture',
      'AI-powered formatting and categorization',
      'XP system, badges, and streak tracking',
      'Weekly vibe charts and monthly AI reflections',
      'Unlockable themes for personalization',
      'Privacy-first design with intentional sharing',
      'Micro-prompts for creative inspiration'
    ],

    gallery: [
      `${BASE_URL}images/projects/flowlog/screenshot-1.jpg`,
      `${BASE_URL}images/projects/flowlog/screenshot-2.jpg`,
      `${BASE_URL}images/projects/flowlog/screenshot-3.jpg`,
      `${BASE_URL}images/projects/flowlog/ui-mockup.jpg`
    ],

    videoUrl: '',

    links: {}
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

    videoUrl: '',

    links: {}
  },

  {
    id: 'shadow-tactics',
    title: 'Shadow Tactics',
    category: 'Strategy',
    year: '2022',
    description: 'Turn-based tactical strategy with emergent gameplay and AI-driven enemies.',
    shortDescription: 'Turn-based tactical strategy with emergent AI',
    tools: ['Godot', 'GDScript', 'Aseprite', 'Tiled'],
    thumbnail: `${BASE_URL}images/projects/shadow-tactics/thumbnail.jpg`,

    overview: 'Shadow Tactics is a turn-based tactical strategy game that emphasizes emergent gameplay through intelligent enemy AI and environmental interactions. Set in a dark fantasy world, players command a squad of specialized operatives through challenging stealth missions.',

    role: 'Lead Designer & AI Designer',
    duration: '14 months (Sep 2021 - Oct 2022)',
    teamSize: '5 people',
    platform: ['PC', 'Mac', 'Linux'],

    challenges: [
      'Creating AI that feels intelligent without being frustrating',
      'Designing levels that support multiple approaches',
      'Balancing squad abilities for diverse playstyles',
      'Making turn-based combat feel dynamic and engaging'
    ],

    solutions: [
      'Implemented behavior tree AI with memory and learning systems',
      'Designed modular levels with 3-5 distinct solution paths each',
      'Created a rock-paper-scissors ability system with situational advantages',
      'Added simultaneous turn resolution for cinematic combat flow'
    ],

    features: [
      'Command squad of 5 unique operatives',
      '20+ handcrafted tactical missions',
      'Emergent AI with patrol routines, alarms, and reinforcements',
      'Environmental hazards and interactive objects',
      'Rewind system to undo mistakes',
      'Challenge mode with leaderboards',
      'New Game+ with remixed enemy placements'
    ],

    achievements: [
      'Finalist - Excellence in Design, IGF 2023',
      '95% Positive Reviews on Steam',
      'Featured by PC Gamer "Best Strategy Games 2022"',
      'Sold 250K+ copies in first 6 months'
    ],

    gallery: [
      `${BASE_URL}images/projects/shadow-tactics/screenshot-1.jpg`,
      `${BASE_URL}images/projects/shadow-tactics/screenshot-2.jpg`,
      `${BASE_URL}images/projects/shadow-tactics/screenshot-3.jpg`,
      `${BASE_URL}images/projects/shadow-tactics/ai-diagram.jpg`,
      `${BASE_URL}images/projects/shadow-tactics/level-layout.jpg`
    ],

    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

    links: {
      steam: 'https://store.steampowered.com',
      itchIo: 'https://itch.io',
      website: 'https://example.com/shadow-tactics'
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
