import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo seo={{
        title: 'Eric Alter | Web Developer',
        description: 'Welcome to my portfolio website. I am a web developer passionate about creating beautiful and functional web applications.',
        keywords: ['web developer', 'portfolio', 'react', 'next.js', 'typescript'],
        ogImage: '/home-og.jpg',
      }} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Hi, I'm Eric Alter</h1>
            <p className="text-xl text-gray-600 mb-12">
              A passionate web developer focused on creating beautiful and functional web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/about"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600">
                  Learn more about my background, skills, and experience.
                </p>
              </Link>

              <Link
                href="/work"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4">My Work</h2>
                <p className="text-gray-600">
                  Explore my portfolio of projects and case studies.
                </p>
              </Link>

              <Link
                href="/skills"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <p className="text-gray-600">
                  View my professional experience and education.
                </p>
              </Link>

              <Link
                href="/contact"
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-600">
                  Get in touch for collaboration or opportunities.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 