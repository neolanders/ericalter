import React, { useEffect } from 'react';
// import Link from 'next/link';
// import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Contact  from 'pages/contact';
import Skills from "pages/skills";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const sections = [
  { id: 'about', title: 'About | Eric Alter', description: 'About section description...' },
  { id: 'skills', title: 'Skills | Eric Alter', description: 'Skills section description...' },
  { id: 'portfolio', title: 'Portfolio | Eric Alter', description: 'Portfolio section description...' },
  { id: 'contact', title: 'Contact | Eric Alter', description: 'Contact section description...' },
];

export default function HomePage() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      }
      document.title = current.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', current.description);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Eric Alter | Portfolio</title>
        <meta name="description" content="Default homepage description..." />
        <Seo seo={{
          title: 'Contact | Eric Alter',
          description: 'Get in touch with me for collaboration, opportunities, or just to say hello!',
          keywords: ['contact', 'get in touch', 'collaboration', 'opportunities'],
          ogImage: '/contact-og.jpg',
        }} />
      </Head>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 shadow z-50 flex justify-center gap-8 py-4">
        {isHome ? (
          <a href="#about" className="hover:text-blue-600">About</a>
        ) : (
          <Link href="/about" className="hover:text-blue-600">About</Link>
        )}
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>

      <main className="pt-15">
        {/* About Section */}
        <section
          id="about"
          className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg1.jpg')" }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded text-white text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-6" style={{ height: 160 }}>
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-1/2 border-t-2 border-gray-300 z-0"></div>
              {/* Avatar */}
              <Image
                src="/images/pic_id.jpg"
                alt="Eric Alter"
                width={160}
                height={160}
                className="rounded-full border-4 border-white shadow-lg z-10 bg-white"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Eric Alter</h1>
            <p className="text-xl">I create engaging websites and ongoing marketing support.</p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg2.jpg')" }}
        >
          <div className="bg-white bg-opacity-80 p-8 rounded text-center">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>
            {/* <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Go</li>
              <li>Project Management</li>
            </ul> */}

            <Skills />
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg3.jpg')" }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
            <p className="mb-4">Check out some of my recent work:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-80 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Project 1</h3>
                <p className="text-gray-700">Description of project 1.</p>
              </div>
              <div className="bg-white bg-opacity-80 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Project 2</h3>
                <p className="text-gray-700">Description of project 2.</p>
              </div>
              <div className="bg-white bg-opacity-80 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Project 3</h3>
                <p className="text-gray-700">Description of project 3.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg4.jpg')" }}
        >
          <div className="bg-white bg-opacity-90 p-8 rounded text-center shadow">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
} 