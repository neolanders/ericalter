import React from 'react';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo/Seo';
import { getWorkData } from './WorkService';

export default async function WorkPage() {
  const workData = await getWorkData();
  
  return (
    <Layout>
      <Seo seo={{
        title: 'My Work | Eric Alter',
        description: 'Explore my portfolio of projects and case studies.',
        keywords: ['portfolio', 'projects', 'case studies', 'web development'],
      }} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">My Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workData.projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 