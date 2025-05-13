export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SkillsData {
  skills: SkillGroup[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
}

export async function getSkillsData(): Promise<SkillsData> {
  return {
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
    education: [
      {
        degree: 'Master of Computer Science',
        school: 'University Name',
        year: '2014 - 2016',
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University Name',
        year: '2010 - 2014',
      },
    ],
  };
} 