// Centralized project data
export const projectsData = [
  {
    id: 'cyber-odyssey',
    title: 'Cyber Odyssey',
    category: 'Action RPG',
    year: '2024',
    description: 'A futuristic action RPG set in a cyberpunk world with deep narrative choices.',
    shortDescription: 'Futuristic action RPG with deep narrative',
    tools: ['Unreal Engine', 'Blueprints', 'C++', 'Blender'],
    thumbnail: '/images/projects/cyber-odyssey/thumbnail.jpg',

    // Detailed project information
    overview: 'Cyber Odyssey is an immersive action RPG that takes players through a dystopian future where technology and humanity collide. Set in Neo-Tokyo 2084, players navigate through a world of corporate espionage, underground hacking networks, and philosophical questions about consciousness in the digital age.',

    role: 'Lead Game Designer & Systems Designer',
    duration: '18 months (Jan 2023 - June 2024)',
    teamSize: '12 people',
    platform: ['PC', 'PlayStation 5', 'Xbox Series X'],

    challenges: [
      'Designing a branching narrative system that meaningfully affects gameplay',
      'Balancing cybernetic augmentation progression with traditional RPG mechanics',
      'Creating an immersive cyberpunk world that feels lived-in and believable',
      'Implementing a real-time combat system that rewards tactical thinking'
    ],

    solutions: [
      'Developed a node-based dialogue system with consequence tracking across 200+ story nodes',
      'Created a modular augmentation system allowing 50+ unique build combinations',
      'Collaborated with artists to establish a cohesive visual language for the game world',
      'Prototyped and iterated on combat mechanics through extensive playtesting'
    ],

    features: [
      'Branching narrative with 12 distinct endings',
      'Deep character customization with cybernetic augmentations',
      'Hack-and-slash combat with tactical pause system',
      'Dynamic world that responds to player choices',
      'Original soundtrack with 30+ tracks',
      'Full voice acting for main story characters'
    ],

    achievements: [
      'Featured at PAX East 2024',
      'Winner - Best Narrative Design, Indie Game Awards 2024',
      'Nominated for Best Action Game, The Game Awards 2024',
      '500K+ wishlists on Steam'
    ],

    gallery: [
      '/images/projects/cyber-odyssey/screenshot-1.jpg',
      '/images/projects/cyber-odyssey/screenshot-2.jpg',
      '/images/projects/cyber-odyssey/screenshot-3.jpg',
      '/images/projects/cyber-odyssey/screenshot-4.jpg',
      '/images/projects/cyber-odyssey/concept-art-1.jpg',
      '/images/projects/cyber-odyssey/concept-art-2.jpg'
    ],

    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video

    links: {
      steam: 'https://store.steampowered.com',
      website: 'https://example.com/cyber-odyssey',
      trailer: 'https://youtube.com'
    }
  },

  {
    id: 'forest-keeper',
    title: 'Forest Keeper',
    category: 'Puzzle Adventure',
    year: '2023',
    description: 'An environmental puzzle game focused on nature restoration and exploration.',
    shortDescription: 'Environmental puzzle game about nature restoration',
    tools: ['Unity', 'C#', 'ProBuilder', 'Photoshop'],
    thumbnail: '/images/projects/forest-keeper/thumbnail.jpg',

    overview: 'Forest Keeper is a meditative puzzle-adventure game where players take on the role of a guardian spirit tasked with restoring balance to a corrupted forest. Through solving environmental puzzles and nurturing wildlife, players breathe life back into a dying ecosystem.',

    role: 'Game Designer & Level Designer',
    duration: '12 months (Jan 2022 - Dec 2022)',
    teamSize: '6 people',
    platform: ['PC', 'Nintendo Switch', 'iOS', 'Android'],

    challenges: [
      'Creating puzzles that feel organic to the forest environment',
      'Designing non-violent gameplay that remains engaging',
      'Balancing accessibility with puzzle complexity',
      'Communicating mechanics without traditional UI elements'
    ],

    solutions: [
      'Developed 60+ environmental puzzles using natural elements (water, light, plants)',
      'Created a growth-based progression system where restored areas unlock new abilities',
      'Implemented difficulty scaling based on player behavior analytics',
      'Used visual language and environmental storytelling to guide players'
    ],

    features: [
      '5 distinct biomes to restore',
      '60+ handcrafted environmental puzzles',
      'Non-violent gameplay focused on nurturing and growth',
      'Dynamic ecosystem simulation',
      'Relaxing ambient soundtrack',
      'Photo mode to capture beautiful moments'
    ],

    achievements: [
      'Apple Arcade Featured Game',
      'Winner - Best Mobile Game, IGF 2023',
      'Metacritic Score: 87/100',
      '2M+ downloads across all platforms',
      'Featured in "Best Games for Relaxation" - IGN'
    ],

    gallery: [
      '/images/projects/forest-keeper/screenshot-1.jpg',
      '/images/projects/forest-keeper/screenshot-2.jpg',
      '/images/projects/forest-keeper/screenshot-3.jpg',
      '/images/projects/forest-keeper/screenshot-4.jpg',
      '/images/projects/forest-keeper/level-design-1.jpg'
    ],

    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

    links: {
      appStore: 'https://apps.apple.com',
      googlePlay: 'https://play.google.com',
      website: 'https://example.com/forest-keeper'
    }
  },

  {
    id: 'velocity-rush',
    title: 'Velocity Rush',
    category: 'Racing',
    year: '2023',
    description: 'High-speed arcade racer with dynamic track generation and multiplayer focus.',
    shortDescription: 'High-speed arcade racer with dynamic tracks',
    tools: ['Unity', 'Mirror', 'Spine2D', 'FMOD'],
    thumbnail: '/images/projects/velocity-rush/thumbnail.jpg',

    overview: 'Velocity Rush is an adrenaline-fueled arcade racing game that combines classic racing mechanics with procedurally generated tracks. Every race is unique, featuring dynamic obstacles, power-ups, and intense multiplayer competition.',

    role: 'Systems Designer & Gameplay Programmer',
    duration: '10 months (Mar 2022 - Dec 2022)',
    teamSize: '8 people',
    platform: ['PC', 'PlayStation 5', 'Xbox Series X'],

    challenges: [
      'Generating fair and fun tracks procedurally',
      'Maintaining smooth 60fps in multiplayer with 12 players',
      'Designing a progression system that keeps players engaged',
      'Balancing power-ups for competitive fairness'
    ],

    solutions: [
      'Created a segment-based track generator with difficulty scaling',
      'Optimized networking code and implemented LOD systems',
      'Designed a season-based progression with weekly challenges',
      'Developed rock-paper-scissors power-up meta with counterplay'
    ],

    features: [
      'Procedurally generated tracks - infinite variety',
      '12-player online multiplayer',
      '25+ unlockable vehicles',
      '15+ power-ups and abilities',
      'Season-based progression system',
      'Split-screen local multiplayer (4 players)',
      'Custom livery editor'
    ],

    achievements: [
      'Reached #1 on Steam Racing Charts (Launch Week)',
      '1M+ players in first month',
      'Average Twitch viewership: 50K concurrent',
      'Featured in PlayStation Store "Multiplayer Mayhem" Collection'
    ],

    gallery: [
      '/images/projects/velocity-rush/screenshot-1.jpg',
      '/images/projects/velocity-rush/screenshot-2.jpg',
      '/images/projects/velocity-rush/screenshot-3.jpg',
      '/images/projects/velocity-rush/multiplayer.jpg',
      '/images/projects/velocity-rush/vehicles.jpg'
    ],

    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

    links: {
      steam: 'https://store.steampowered.com',
      playstation: 'https://store.playstation.com',
      xbox: 'https://xbox.com'
    }
  },

  {
    id: 'shadow-tactics',
    title: 'Shadow Tactics',
    category: 'Strategy',
    year: '2022',
    description: 'Turn-based tactical strategy with emergent gameplay and AI-driven enemies.',
    shortDescription: 'Turn-based tactical strategy with emergent AI',
    tools: ['Godot', 'GDScript', 'Aseprite', 'Tiled'],
    thumbnail: '/images/projects/shadow-tactics/thumbnail.jpg',

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
      '/images/projects/shadow-tactics/screenshot-1.jpg',
      '/images/projects/shadow-tactics/screenshot-2.jpg',
      '/images/projects/shadow-tactics/screenshot-3.jpg',
      '/images/projects/shadow-tactics/ai-diagram.jpg',
      '/images/projects/shadow-tactics/level-layout.jpg'
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
