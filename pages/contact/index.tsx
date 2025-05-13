import React from 'react';
import ContactForm from './ContactForm';
import type { GetStaticProps } from 'next';

interface ContactPageProps {
  // Add any static data props here if needed
}

export default function ContactPage({}: ContactPageProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8 text-center">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  // Add any static data fetching here if needed
  
  return {
    props: {
      // Add any static data here
    },
  };
}; 