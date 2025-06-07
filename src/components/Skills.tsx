'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Code2, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: '프론트엔드 기술',
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Vue.js',
        'JavaScript',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: '상태관리 & 아키텍처',
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      skills: [
        'Redux',
        'Zustand',
        'Pinia',
        'Jotai',
        'Context API',
        'SWR',
        'React Query',
      ],
    },
    {
      title: '스타일링 & UI',
      icon: <Palette className="h-6 w-6 text-green-600" />,
      skills: [
        'Tailwind CSS',
        'Sass/SCSS',
        'Styled Components',
        'Emotion',
        'CSS Modules',
        'Figma',
        'Adobe XD',
      ],
    },
    {
      title: '빌드 도구 & 번들러',
      icon: <Wrench className="h-6 w-6 text-orange-600" />,
      skills: ['Vite', 'Webpack', 'Rollup', 'Parcel', 'ESBuild', 'Turbopack'],
    },
    {
      title: '테스팅',
      icon: <Wrench className="h-6 w-6 text-red-600" />,
      skills: [
        'Jest',
        'Vitest',
        'React Testing Library',
        'MSW',
        'Cypress',
        'Playwright',
        'Storybook',
      ],
    },
    {
      title: '인프라 & 배포',
      icon: <Wrench className="h-6 w-6 text-indigo-600" />,
      skills: [
        'PM2',
        'Nginx',
        'Linux',
        'Vercel',
        'Docker',
        'GitHub Actions',
        'AWS',
        'Firebase',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              기술 스택
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 프론트엔드 기술과 도구를 활용하여 최적화된 웹
              애플리케이션을 구축합니다.
            </p>
          </div>
        </AnimatedSection>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={categoryIndex}
              animation="fade-up"
              delay={categoryIndex * 150}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-100">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">
                    {category.title}
                  </h3>
                </div>

                <div
                  className={`flex flex-wrap gap-2 stagger-children ${isVisible ? 'animate' : ''}`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-all duration-200 transform hover:scale-105 cursor-default font-medium"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? 'translateY(0)'
                          : 'translateY(10px)',
                        transition: `all 0.4s ease-out ${skillIndex * 50 + categoryIndex * 100}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
