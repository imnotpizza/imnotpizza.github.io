'use client';

import { Mail, Phone, Github, Globe, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const contactLinks = [
    {
      type: 'github',
      icon: <Github className="h-5 w-5 text-gray-800" />,
      label: 'GitHub',
      value: 'github.com/imnotpizza',
      url: 'https://github.com/imnotpizza',
    },
    {
      type: 'blog',
      icon: <Globe className="h-5 w-5 text-gray-800" />,
      label: 'Blog',
      value: 'velog.io/@imnotpizza',
      url: 'https://velog.io/@imnotpizza/posts',
    },
    {
      type: 'email',
      icon: <Mail className="h-5 w-5 text-gray-800" />,
      label: 'Email',
      value: 'bobin6972@gmail.com',
      url: 'mailto:bobin6972@gmail.com',
    },
    {
      type: 'phone',
      icon: <Phone className="h-5 w-5 text-gray-800" />,
      label: 'Phone',
      value: '010-2667-6972',
      url: 'tel:01026676972',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactLinks.map((contact, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100 + 300}
              >
                {contact.url ? (
                  <a
                    href={contact.url}
                    target={
                      contact.type !== 'email' && contact.type !== 'phone'
                        ? '_blank'
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group transform hover:scale-105"
                  >
                    <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300 mb-4">
                      {contact.icon}
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {contact.label}
                      </p>
                      <p className="text-gray-900 font-medium text-sm">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mt-2" />
                  </a>
                ) : (
                  <div className="flex flex-col items-center p-6 rounded-lg border border-gray-200">
                    <div className="p-4 bg-blue-100 rounded-full mb-4">
                      {contact.icon}
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {contact.label}
                      </p>
                      <p className="text-gray-900 font-medium text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
