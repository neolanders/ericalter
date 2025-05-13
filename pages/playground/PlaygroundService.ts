export interface PlaygroundProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  features: string[];
}

export interface PlaygroundData {
  projects: PlaygroundProject[];
}

export async function getPlaygroundData(): Promise<PlaygroundData> {
  return {
    projects: [
      {
        id: 1,
        title: 'Interactive 3D Scene',
        description: 'A WebGL-based 3D scene with interactive elements and animations.',
        image: '/playground/3d-scene.jpg',
        technologies: ['Three.js', 'WebGL', 'TypeScript', 'React'],
        demoLink: '/playground/3d-scene',
        githubLink: 'https://github.com/username/3d-scene',
        features: [
          'Real-time 3D rendering',
          'Interactive camera controls',
          'Dynamic lighting effects',
          'Custom shader materials'
        ]
      },
      {
        id: 2,
        title: 'Audio Visualizer',
        description: 'A real-time audio visualizer using the Web Audio API.',
        image: '/playground/audio-viz.jpg',
        technologies: ['Web Audio API', 'Canvas', 'JavaScript'],
        demoLink: '/playground/audio-viz',
        githubLink: 'https://github.com/username/audio-viz',
        features: [
          'Real-time audio analysis',
          'Multiple visualization modes',
          'Custom audio effects',
          'Responsive design'
        ]
      },
      {
        id: 3,
        title: 'Physics Simulation',
        description: 'A 2D physics engine with various interactive simulations.',
        image: '/playground/physics.jpg',
        technologies: ['Matter.js', 'Canvas', 'TypeScript'],
        demoLink: '/playground/physics',
        githubLink: 'https://github.com/username/physics-sim',
        features: [
          'Realistic physics simulation',
          'Multiple object types',
          'Interactive controls',
          'Custom constraints'
        ]
      }
    ]
  };
} 