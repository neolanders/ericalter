export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

export interface WorkData {
  projects: Project[];
  caseStudies: CaseStudy[];
}

export async function getWorkData(): Promise<WorkData> {
  return {
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform built with Next.js and Node.js.',
        image: '/project-1-placeholder.jpg',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        link: '/work/1',
      },
      {
        id: 2,
        title: 'Portfolio Website',
        description: 'A modern portfolio website showcasing creative work and projects.',
        image: '/project-2-placeholder.jpg',
        technologies: ['React', 'TypeScript', 'SCSS', 'Framer Motion'],
        link: '/work/2',
      },
      {
        id: 3,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        image: '/project-3-placeholder.jpg',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
        link: '/work/3',
      },
      {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A weather dashboard providing real-time weather information.',
        image: '/project-4-placeholder.jpg',
        technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
        link: '/work/4',
      },
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform Development',
        description: 'A detailed case study of building a scalable e-commerce platform.',
        link: '/case-studies/ecommerce',
      },
      {
        title: 'Task Management App Redesign',
        description: 'How we improved user experience and performance of a task management app.',
        link: '/case-studies/task-management',
      },
    ],
  };
} 