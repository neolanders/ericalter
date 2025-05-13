import React from 'react';
import Image from 'next/image';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo/Seo';
import { getAboutData } from './AboutService';
import type { GetStaticProps } from 'next';
import type { AboutData } from './AboutService';

interface AboutPageProps {
  data: AboutData;
}

export default function AboutPage({ data }: AboutPageProps) {
  return (
    <Layout>
      <Seo seo={{
        title: 'About | Eric Alter',
        description: 'Learn more about Eric Alter, a web developer passionate about creating beautiful and functional web applications.',
        keywords: ['about', 'web developer', 'portfolio', 'experience', 'skills'],
        ogImage: '/about-og.jpg',
      }} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src={data.profileImage}
                  alt="Eric Alter"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
                <p className="text-xl text-gray-600">{data.bio}</p>
              </div>
            </div>

            {/* Skills Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.skills.map((group) => (
                  <div key={group.category} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                    <ul className="space-y-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="text-gray-600">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                {data.experience.map((job, index) => (
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
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const data = await getAboutData();
  
  return {
    props: {
      data,
    },
  };
}; 