'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Calendar,
  TrendingUp,
  FileText,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string; // 프로젝트 설명
  responsibilities: string; // 담당 작업
  image: string;
  technologies: string[];
  period: string;
  impact: string[]; // 주요성과
  liveUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'toodee-ui-renewal',
      title: '오늘의 배송 Toodee',
      subtitle: '배송접수 UI 개선',
      description:
        '다양한 물품의 배송접수 기능, 실시간 결제, 현재 배송 현황, 상태 및 기사 위치를 손쉽게 확인할 수 있는 B2B서비스입니다.',
      responsibilities:
        '기존 퀵, 택배접수 UI의 리뉴얼 및 편의 기능 추가, 코드 리팩토링, 최적화를 담당하였습니다.',
      image: '/placeholder.svg?height=300&width=400&text=Toodee+UI+Renewal',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'React Hook Form',
        'Zod',
        'React Query',
        'Vitest',
        'MSW',
      ],
      period: '2024.10 - 2025.04',
      impact: [
        'react-hook-form, zod, react-query 도입, 코드 개선으로 퍼포먼스 30% 증가 및 코드 양 18% 감소',
        'vitest, react-testing-library 사용한 단위테스트, 통합테스트 작성, 핵심로직 커버리지 100% 달성',
        'Mock Service Worker 2.x으로 마이그레이션 및 Storybook, Vitest와 통합, 일관성 있는 모킹환경 구축',
        '투디 홈페이지의 Web Vitals 지표 개선하여 로드 속도 30%, LCP 48%감소, FCP 60%감소',
      ],
      liveUrl: 'https://toodee.co.kr',
      featured: true,
    },
    {
      id: 'coconuts-renewal',
      title: 'Coconuts 컨설팅',
      subtitle: '레거시 시스템 리뉴얼',
      description:
        '현재 KT M&S와 협력중에 있으며 단말기 유통 관리, 요금제 계산, 퀵서비스 연동 등 다양한 기능을 제공하는 B2B서비스입니다.',
      responsibilities:
        'Vuejs 기반 레거시 서비스의 UI/UX 개선 및 내부 로직 개선 작업 및 범용 컨설팅 서비스를 위한 설계 변경을 진행하였습니다.',
      image: '/placeholder.svg?height=300&width=400&text=Coconuts+Renewal',
      technologies: [
        'React',
        'Vue.js',
        'TypeScript',
        'Webpack',
        'Module Federation',
        'Pinia',
        'Mermaid',
      ],
      period: '2024.03 - 2025.07',
      impact: [
        'Webpack Module Federation 사용하여 Vue기반 레거시 코드를 React 기반 코드로 전환할 수 있도록 모듈 시스템 구축',
        'Webpack 사용한 React 프로젝트 번들링 및 배포환경 구축 및 캐시 설정으로 컨텐츠 로드 최적화',
        'js 레거시 코드 ts로 마이그레이션 진행 및 mermaid 사용한 interface 시각화로 데이터 구조 가독성 향상',
        'Vue Composition API, Pinia 사용한 마이크로 상태관리 기반의 구조 도입으로 코드개선',
      ],
    },
    {
      id: 'vloc-console',
      title: 'VLOC Console',
      subtitle: 'B2C 모니터링 서비스',
      description:
        'vlok client SDK의 사용량에 대한 결제 및 토큰 발급, 사용량 모니터링 기능을 담은 B2C 서비스입니다.',
      responsibilities:
        'SDK의 사용량에 대한 결제 및 토큰 발급, 사용량 모니터링이 가능한 B2C 서비스의 제작을 담당하였습니다.',
      image: '/placeholder.svg?height=300&width=400&text=VLOC+Console',
      technologies: [
        'React',
        'Next.js',
        'React Query',
        'TypeScript',
        'Docker',
        'Jest',
        'Testing Library',
      ],
      period: '2022.10 - 2023.03',
      impact: [
        'React-Query 도입, API 캐싱으로 클라이언트 환경에서 api 호출횟수 17% 감소',
        'ISR 적용한 API 결과물 캐싱 적용하여 공통 API 호출수 1/10 감소',
        'Docker Cache 및 Multi Stage Build 적용하여 빌드시간 최대 40%감소, 이미지 용량 80%감소',
        '번들 최적화 통해 Web Vitals 성능 지표 전 항목 70->90점 이상 달성',
      ],
    },
    {
      id: 'larla-project',
      title: 'Larla',
      subtitle: '소셜 커머스 플랫폼',
      description:
        'VLOC Client SDK 의 화상통화 기능을 체험할 수 있는 화상통화 서비스입니다.',
      responsibilities:
        'VLOC Client SDK 의 화상통화 기능을 체험할 수 있는 화상통화 서비스입니다.',
      image: '/placeholder.svg?height=300&width=400&text=Larla+Platform',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Zustand',
        'Styled Components',
        'Socket.io',
        'PWA',
      ],
      period: '2022.06 - 2022.09',
      impact: [
        'Zustand 사용하여 Presentational/Container 패턴 구현',
        'Selector의 캐싱, React.Memo 사용한 컴포넌트 캐싱으로 메모리 사용량 30%가량 감소',
        '사용자 화면 highlight에 debounce 기법 사용하여 렌더링 성능 개선 및 UX 개선',
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
      { threshold: 0.1 },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className="flex flex-col lg:flex-row w-full lg:min-h-[40rem] overflow-hidden shadow-lg">
                {/* 이미지 섹션 */}
                <div className="lg:w-2/5 aspect-video lg:aspect-auto bg-gray-200 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 콘텐츠 섹션 */}
                <div className="lg:w-3/5 flex flex-col">
                  <CardHeader>
                    {/* 1. 제목 */}
                    <CardTitle className="text-2xl lg:text-3xl mb-4">
                      {project.title}
                    </CardTitle>

                    {/* 2. 프로젝트 설명 */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">
                            프로젝트 설명
                          </span>
                          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* 3. 작업내용 */}
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">
                            작업내용
                          </span>
                          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                            {project.responsibilities}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 space-y-4">
                    {/* 4. 작업기간 */}
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-gray-500 block mb-1">
                          작업기간
                        </span>
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                          {project.period}
                        </p>
                      </div>
                    </div>

                    {/* 5. 주요성과 */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <span className="text-sm font-medium text-gray-500 block mb-1">
                            주요성과
                          </span>
                          <div className="space-y-1">
                            {project.impact.map((impact, impactIndex) => (
                              <div
                                key={impactIndex}
                                className="text-base py-2 text-gray-700"
                              >
                                • {impact}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 기술 스택 */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-blue-100 text-blue-800 text-sm lg:text-base rounded-full hover:bg-blue-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
