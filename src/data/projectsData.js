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

    overview: `DP2 is an ongoing applied AR game concept designed for autistic children (ages 5-10), many with Developmental Coordination Disorder (DCD). The project emerged from extensive field research observing existing apps for ASD children and identifying gaps in motor skill development support.`,

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'Need Statement',
        image: 'Apps For ASD kids.png',
        content: `Autistic children with DCD face motor skill challenges that traditional apps don't address. Current solutions lack:

• **Adaptive scaffolding** for individual motor capabilities
• **Sensory-aware design** for common sensitivities
• **Engagement mechanisms** that sustain participation
• **Meaningful progress tracking** that respects privacy

Field research revealed children need playful, low-pressure environments where motor practice feels like exploration. DP2 creates an AR experience that transforms practice into adventure, where every movement is validated through avatar mirroring with sub-150ms latency.`
      },
      {
        title: 'Research Questions',
        image: 'Initial research.png',
        content: `Our research followed a **Questions → Answers → Inferences** framework:

**Research Questions:**
1. Which motor outcomes to scaffold first?
2. How do sensory elements affect attention and participation?
3. What signals show progress without measurement burden?
4. What session format sustains engagement?

**Methodology:** Field observations (N=12), literature review, competitive analysis (15+ apps), expert interviews with OTs/SLPs.

**Key Findings:**
✓ Big, colorful targets with gentle sounds help focus
✓ Familiar animation increases willingness to try
✓ 10-15 minute sessions with breaks match attention spans
✓ Avatar mirroring improves clarity and agency
✓ Token rewards work better than points`
      },
      {
        title: 'Research Inferences & Design Principles',
        image: 'Inferences.png',
        content: `Core design principles guiding DP2:

**🎯 Low Cognitive Load**
• Repeatable session structures
• One rule at a time
• Consistent visual/audio cues

**📊 Gradual Scaffolding**
• ~10% difficulty increments
• Generous hit detection
• Adaptive pacing

**🎮 Avatar Mirroring**
• <150ms latency validation
• "My action caused that" confirmation
• Immediate positive feedback

**📈 Data Collection**
• Track accuracy, height/distance, timing
• Monitor L/R balance, midline crosses
• Session tolerance as progress indicator
• Data for adaptation, never diagnosis`
      },
      {
        title: 'Core Concept & Game Mechanics',
        image: 'Character Ref1.png',
        content: `Four core mechanics targeting developmental objectives:

**🎈 Color Bubbles** — Pop bubbles at varying heights. Builds reach range and targeting precision.

**👣 Trail Steps** — Step on L/R floor pads. Develops balance and bilateral coordination.

**🎯 Catch & Place** — Match objects to color-coded baskets. Hand-eye coordination and graded force control.

**🪞 Mirror Moves** — Imitate mascot poses. Builds body awareness and bilateral mapping.

**🌙 Calm Cave** — Breathing fireflies guide regulation breaks to prevent overstimulation.`
      },
      {
        title: 'Character & Sensory Design',
        image: 'Character Ref 2.png',
        content: `Character design prioritizes **friendly, expressive animation** inspired by Pixar/Disney/Illumination: large expressive eyes, clear emotional reads, smooth rounded forms.

**Sensory Considerations:**
🎨 **Visual** — Saturated-soft colors with high-contrast toggle. Large shapes, minimal clutter.

🔊 **Audio** — Warm voice-over, soft success tones (no harsh fails). Volume control + Quiet Mode.

✋ **Haptics** — Optional subtle vibration on success. Never for failures.

**Avatar System:**
Simplified joint mapping for natural movement. Hand tracking focuses on reach direction vs finger precision, maintaining "I did that" sense.`
      },
      {
        title: 'Technology Stack & Implementation',
        image: 'Hand Ref.png',
        content: `**🎮 Core Platform**
• Unity 2022.3 LTS with URP
• AR Foundation 5.x (iOS ARKit, Android ARCore)
• Target: iPad Pro/Air (2020+), Galaxy Tab S7+

**🤖 Motion Tracking & ML**
• MediaPipe Pose for skeleton tracking
• ML.NET for adaptive difficulty modeling
• Custom IK solver (<150ms latency)
• Kalman filtering for smooth tracking

**Tracking Pipeline:** Camera (30fps) → MediaPipe (33 landmarks) → Kalman filter → IK solver → Avatar animation

**📊 Data & Privacy**
• SQLite local storage, optional CSV export
• Privacy-preserving, no cloud sync by default
• COPPA-compliant, PII stripped`
      },
      {
        title: 'Design Ideology & Therapeutic Framework',
        image: 'Field Research.png',
        content: `Evidence-based frameworks guiding DP2:

**🎯 Octalysis (Gamification)**
• Epic Meaning — "Helping" bring color/calm to the world
• Accomplishment — Tokens celebrate effort, not just outcomes
• Empowerment — Avatar mirroring gives immediate feedback

**🧠 Self-Determination Theory**
• Autonomy — Child chooses when to start/stop
• Competence — ~70-80% success rate (flow channel)
• Relatedness — Mascot companionship

**🌈 Neurodiversity-Affirming**
Design **with**, not **for** autistic children:
• Sensory controls put child in charge
• No forced eye contact or social pressure
• "Calm Cave" respects regulation needs
• Progress = capability growth, never normalization

Field research showed children engage most when **in control**: pause anytime, skip activities, adjust settings, exit without penalty.`
      }
    ],

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
