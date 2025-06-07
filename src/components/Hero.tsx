'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Hero() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`flex ${mounted && !isMobile ? 'flex-row' : 'flex-col'} items-center gap-8 lg:gap-16`}
        >
          {/* Profile Image */}
          <AnimatedSection
            animation={mounted && !isMobile ? 'fade-right' : 'fade-down'}
            delay={200}
            className={`${mounted && !isMobile ? 'w-1/2' : 'w-full'}`}
          >
            {mounted && !isMobile ? (
              // Desktop: Rectangle image
              <div className="relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://placehold.co/400x400"
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              // Mobile: Circular image
              <div className="flex justify-center">
                <img
                  src="https://placehold.co/400x400"
                  alt="Profile"
                  className="sm:w-[20rem] sm:h-[20rem] w-[20rem] h-[20rem] mx-auto p-6 bg-white shadow-lg rounded-full object-cover"
                />
              </div>
            )}
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection
            animation={mounted && !isMobile ? 'fade-left' : 'fade-up'}
            delay={400}
            className={`${mounted && !isMobile ? 'w-1/2' : 'w-full text-center'}`}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">고보빈</span>입니다
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              본질에 집중하여 회사의 성장에 기여하는 개발자입니다
            </p>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              이러쿵저러쿵이직준비중이러쿵저러쿵이직준비중이러쿵저러쿵이직준비중이러쿵저러쿵이직준비중이러쿵저러쿵이직준비중
            </p>
            <div
              className={`flex ${mounted && !isMobile ? 'justify-start' : 'justify-center'} space-x-6`}
            >
              <a
                href="https://github.com/imnotpizza"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:bobin6972@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
