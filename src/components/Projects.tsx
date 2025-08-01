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
import ImageCarousel from './ImageCarousel';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string; // 프로젝트 설명
  responsibilities: string; // 담당 작업
  images: string[]; // 이미지 배열로 변경
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
      images: ['/assets/toodee-main.webp', '/assets/toodee-order-rz.webp'],
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
        '에러 분류 및 디버깅 데이터 전송을 통한 이슈 추적 위해 Sentry 도입, CS이슈 처리속도 평균 30% 증가'
      ],
      liveUrl: 'https://toodee.kr/',
      featured: true,
    },
    {
      id: 'coconuts-renewal',
      title: 'Coconuts 컨설팅',
      subtitle: '레거시 시스템 리뉴얼',
      description:
        '현재 KT M&S와 협력중에 있으며 단말기 유통 관리, 요금계산기, 퀵서비스 연동 등 다양한 기능을 제공하는 B2B서비스입니다.',
      responsibilities:
        '요금계산기 서비스의 모듈화 작업 및 리팩토링, E2E 테스트 구축하여 수정과 변경에 용이한 프로젝트로 개선하였습니다',
      images: ['/assets/coconuts-estimate.webp'],
      technologies: [
        'React',
        'Vue.js',
        'TypeScript',
        'Webpack',
        'Module Federation',
        'Pinia',
      ],
      period: '2024.03 - 2025.07',
      impact: [
        '기존 요금, 결합할인 계산 관련 레거시 비즈니스로직 Flux 패턴, selector 패턴 기반으로 개선',
        'Cypress Studio 기반 E2E 시나리오 테스트 도입하여 기능추가 시 QA 발생 및 추가 배포 양 50% 감소',
        '요금계산기 서비스 Webpack Module Federation 기반 공용 모듈로 분리',
        'Webpack 기반 React 프로젝트 번들링 구축, contenthash, minify 적용으로 로드속도 40% 증가',
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
      images: ['/assets/vloc-console-resized.webp'],
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
      images: ['/assets/vloc-larla.webp', '/assets/vloc-larla-room-rz.webp'],
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
        <div ref={projectsRef} className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className="flex flex-col lg:flex-row w-full lg:min-h-[40rem] overflow-hidden shadow-lg">
                {/* 이미지 섹션 - ImageCarousel 사용 */}
                <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gray-200 overflow-hidden">
                  <ImageCarousel
                    images={project.images}
                    alt={project.title}
                    autoSlideInterval={4000} // 4초 간격
                    className="w-full h-full"
                  />
                </div>

                {/* 콘텐츠 섹션 */}
                <div className="lg:w-1/2 flex flex-col">
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

                    {/* 라이브 사이트 링크 */}
                    {project.liveUrl && (
                      <div className="pt-4">
                        <Button asChild variant="outline">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            라이브 사이트
                          </a>
                        </Button>
                      </div>
                    )}
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
