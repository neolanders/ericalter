export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface AboutData {
  name: string;
  bio: string;
  profileImage: string;
  skills: SkillGroup[];
  experience: Experience[];
}

export async function getAboutData(): Promise<AboutData> {
  return {
    name: 'Eric Alter',
    bio: 'A passionate web developer focused on creating beautiful and functional web applications.',
    profileImage: '/profile-placeholder.jpg',
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      },
      {
        category: 'Tools & Others',
        items: ['Git', 'Docker', 'AWS', 'Jest', 'Cypress'],
      },
    ],
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Company',
        period: '2020 - Present',
        description: 'Led development of multiple web applications using React and Node.js.',
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed and maintained client websites and web applications.',
      },
    ],
  };
} 