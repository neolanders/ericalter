import React from 'react';
import { getSkillsData } from './SkillsService';
import type { GetStaticProps } from 'next';
import type { SkillsData } from './SkillsService';
import SkillsBubbles from '@components/SkillsBubbles/SkillsBubbles';

interface SkillsPageProps {
  data: SkillsData;
}

export default function SkillsPage({ data }: SkillsPageProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <SkillsBubbles />
        </section>

        {/* Experience Section */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {data?.experience?.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Education Section */}
        {/* <section>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {data?.education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<SkillsPageProps> = async () => {
  const data = await getSkillsData();
  
  return {
    props: {
      data,
    },
    revalidate: 3600, // Revalidate every hour
  };
}; 