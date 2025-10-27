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
        content: `Autistic children, particularly those with DCD, face significant challenges in motor skill development that traditional apps fail to address adequately. Current applications for ASD children focus primarily on cognitive and communication skills, leaving a critical gap in motor coordination support. Many existing solutions lack:

• **Adaptive scaffolding** that responds to individual motor capabilities
• **Sensory-aware design** that accommodates common sensitivities in autistic children
• **Engagement mechanisms** that sustain participation without overwhelming
• **Meaningful progress tracking** that respects privacy while providing insights

Through field research and competitive analysis of existing apps, we identified that children need playful, low-pressure environments where motor practice feels like exploration rather than therapy. The absence of avatar mirroring and real-time movement validation in current solutions leaves children without immediate agency feedback, reducing motivation and engagement.

DP2 addresses this need by creating an AR experience that transforms motor skill practice into an adventure, where every movement is seen, validated, and celebrated through an on-screen avatar that mirrors the child's actions with sub-150ms latency.`
      },
      {
        title: 'Research Questions',
        image: 'Initial research.png',
        content: `Our research synthesis followed a structured **Questions → Answers → Inferences** framework to build an evidence-based foundation:

**Primary Research Questions:**
1. Which motor outcomes should we scaffold first for maximum therapeutic benefit?
2. How do sensory elements (color, sound, character style) affect attention and participation?
3. Which signals show meaningful progress without creating measurement burden?
4. What session format and duration sustain participation while respecting attention variability?

**Methodology:**
• Field observations of children using existing ASD apps (N=12 observations)
• Literature review of motor development interventions for ASD+DCD
• Competitive analysis of 15+ therapeutic and educational apps
• Expert interviews with occupational therapists and speech-language pathologists

**Key Findings:**
✓ **Big, colorful, predictable targets** with gentle sounds help focus without overwhelming
✓ **Familiar animation language** (Disney-like expressiveness) increases willingness to try
✓ **10-15 minute sessions** with structured breaks match optimal attention spans
✓ **Avatar mirroring** significantly improves movement clarity and sense of agency
✓ **Token-based rewards** work better than point systems for this population`
      },
      {
        title: 'Research Inferences & Design Principles',
        image: 'Inferences.png',
        content: `From our research synthesis, we derived core design principles that guide every aspect of DP2:

**🎯 Low Cognitive Load**
• Repeatable session structures reduce mental processing demands
• One rule or objective introduced at a time
• Clear, consistent visual and audio cues throughout

**📊 Gradual Scaffolding**
• Difficulty increases by ~10% increments based on success rates
• Generous colliders and hit detection reduce frustration
• Adaptive pacing responds to individual progress patterns

**🎮 Avatar Mirroring for Agency**
• Real-time movement validation (<150ms latency)
• Visual confirmation that "my action caused that result"
• Builds confidence through immediate, positive feedback

**📈 Meaningful Data Collection**
• Track accuracy, achievable height/distance, reaction/movement time
• Monitor L/R balance and midline crossing frequency
• Capture session tolerance (duration, breaks needed) as progress indicator
• All data serves adaptation, never diagnosis`
      },
      {
        title: 'Core Concept & Game Mechanics',
        image: 'Character Ref1.png',
        content: `DP2 combines therapeutic motor practice with engaging AR gameplay through four core mechanics, each targeting specific developmental objectives:

**🎈 Color Bubbles — Reach & Accuracy**
Bubbles appear at varying heights (shoulder to overhead). Child reaches or taps to pop them, building reach range and targeting precision. Adaptive sizing and placement based on success rates.

**👣 Trail Steps — Balance & Bilateral Coordination**
Floor pads appear in L/R sequences. Child steps on each pad, developing balance, gait patterns, and bilateral coordination. Tempo and spacing adapt to movement capabilities.

**🎯 Catch & Place — Hand-Eye Coordination**
Floating objects match color-coded baskets. Child "catches" objects and places them in correct baskets, building hand-eye coordination and graded force control. Speed and distance adapt to skill level.

**🪞 Mirror Moves — Pose Imitation**
Mascot demonstrates 2-4 second poses. Child imitates while avatar mirrors their attempt, developing body awareness and bilateral mapping. Hold times and complexity adapt to performance.

**🌙 Calm Cave — Regulation Activity**
Breathing fireflies guide 3-5 breath cycles. Provides co-regulation breaks to prevent overstimulation and keep arousal in optimal zone. Always available as an escape valve.`
      },
      {
        title: 'Character & Sensory Design',
        image: 'Character Ref 2.png',
        content: `Character design emerged from extensive reference research, prioritizing **friendly, expressive animation** that feels familiar without licensed IP constraints.

**Design Philosophy:**
Our character references drew from successful children's media (Pixar, Disney, Illumination) to identify common visual languages that autistic children respond well to: large expressive eyes, clear emotional reads, smooth rounded forms, and predictable movement patterns.

**Sensory Considerations:**
🎨 **Visual**: Saturated-soft color palette with high-contrast toggle option. Large shapes with minimal visual clutter. Gentle particle effects that can be reduced or disabled.

🔊 **Audio**: Warm voice-over with simple, encouraging phrases. Soft success tones (no harsh "fail" sounds). Global volume control + instant Quiet Mode for sensory overwhelm.

✋ **Haptics**: Optional subtle vibration on successful actions. Never used for failures or time pressure.

**Avatar Mirroring System:**
The player-avatar uses simplified joint mapping for natural movement representation. Hand tracking focuses on reach direction and approximate position rather than finger-level precision, reducing tracking complexity while maintaining the sense of "I did that."`
      },
      {
        title: 'Technology Stack & Implementation',
        image: 'Hand Ref.png',
        content: `DP2 leverages modern AR and ML technologies to create responsive, accessible motor-play experiences:

**🎮 Core Platform**
• **Unity 2022.3 LTS** with Universal Render Pipeline (URP)
• **AR Foundation 5.x** for cross-platform AR (iOS ARKit, Android ARCore)
• Target devices: iPad Pro/Air (2020+), Samsung Galaxy Tab S7+

**🤖 Motion Tracking & ML**
• **MediaPipe Pose** for full-body skeleton tracking via device camera
• **ML.NET** for adaptive difficulty model (trained on simulated motor performance data)
• **Custom IK solver** for avatar limb positioning with <150ms latency budget
• **Kalman filtering** to smooth jittery tracking data while preserving responsiveness

**Motion Tracking Pipeline:**
1. Device camera captures RGB frames (30fps)
2. MediaPipe Pose extracts 33 3D landmarks per frame
3. Custom filter reduces jitter while maintaining sub-150ms latency
4. IK solver maps landmarks to simplified avatar skeleton
5. Animation blend system interpolates between poses

**📊 Data & Analytics**
• **SQLite** for local-first telemetry storage
• **Privacy-preserving aggregation** before optional CSV export
• No cloud sync unless explicitly enabled by caregiver
• All PII stripped from exported data

**🔒 Safety & Compliance**
• AR bounds detection with visual + audio out-of-bounds warnings
• Automatic session timeout after 20 minutes (configurable)
• Not a medical device — follows general software best practices
• COPPA-compliant (no data collection without parental consent)`
      },
      {
        title: 'Design Ideology & Therapeutic Framework',
        image: 'Field Research.png',
        content: `DP2's design philosophy draws from multiple evidence-based frameworks to create meaningful, respectful engagement:

**🎯 Octalysis Framework (Gamification)**
We apply gamification principles that support intrinsic motivation rather than create dependency:
• **Epic Meaning**: Child is "helping" bring color/calm to the world
• **Accomplishment**: Tokens and stickers celebrate effort, not just outcomes
• **Empowerment**: Avatar mirroring gives immediate creative feedback
• **Social Influence**: Optional sharing with caregivers, never competitive leaderboards

**🧠 Self-Determination Theory**
Respecting autonomy, competence, and relatedness:
• **Autonomy**: Child chooses when to start/stop, which activities to try
• **Competence**: Adaptive difficulty ensures ~70-80% success rate (flow channel)
• **Relatedness**: Mascot provides warm, encouraging companionship

**📚 Fogg Behavior Model**
Designing for sustainable engagement:
• **Motivation**: Low-pressure format reduces anxiety
• **Ability**: Adaptive difficulty matches current capability
• **Prompt**: Mascot provides gentle, predictable cues

**🌈 Neurodiversity-Affirming Approach**
We design **with**, not **for** autistic children:
• Sensory controls put child in charge of their experience
• No forced eye contact or social pressure mechanics
• "Calm Cave" respects need for regulation breaks
• Progress metrics focus on capability growth, never normalization

**Field Research Integration:**
Our observations revealed that children engage most when they feel **in control** of the experience. Every design choice prioritizes child agency: pause anytime, skip activities, adjust sensory settings, and exit without penalty.`
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
