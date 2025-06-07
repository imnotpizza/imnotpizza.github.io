'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  details: {
    overview: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    duration: string;
    teamSize: string;
    role: string;
    results: string[];
  };
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with React, Next.js, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Stripe',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '대규모 전자상거래 플랫폼으로, 사용자 친화적인 인터페이스와 안전한 결제 시스템을 제공합니다. 실시간 재고 관리, 개인화된 추천 시스템, 그리고 관리자 대시보드를 포함한 완전한 솔루션입니다.',
        features: [
          '반응형 제품 카탈로그 및 검색 기능',
          '실시간 장바구니 및 위시리스트',
          'Stripe 기반 안전한 결제 시스템',
          '사용자 계정 관리 및 주문 이력',
          '관리자 대시보드 및 재고 관리',
          '개인화된 상품 추천 알고리즘',
        ],
        challenges: [
          '대용량 상품 데이터 처리 및 성능 최적화',
          '복잡한 상태 관리 (장바구니, 사용자 세션, 결제 상태)',
          '다양한 결제 방식 및 국제화 지원',
          '실시간 재고 업데이트 및 동시성 처리',
        ],
        solutions: [
          'React Query를 활용한 서버 상태 관리 및 캐싱 최적화',
          'Zustand를 이용한 클라이언트 상태 관리 구조화',
          'Stripe API 통합 및 웹훅을 통한 결제 상태 동기화',
          'Redis를 활용한 실시간 재고 관리 시스템 구축',
        ],
        duration: '6개월',
        teamSize: '5명 (프론트엔드 2명, 백엔드 2명, 디자이너 1명)',
        role: '프론트엔드 리드 개발자',
        results: [
          '페이지 로딩 속도 40% 향상',
          '사용자 전환율 25% 증가',
          '모바일 사용성 점수 95점 달성',
          '월 거래량 1000만원 돌파',
        ],
      },
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '팀 협업을 위한 실시간 태스크 관리 애플리케이션입니다. 직관적인 드래그 앤 드롭 인터페이스와 실시간 동기화 기능을 통해 팀의 생산성을 극대화합니다.',
        features: [
          '실시간 협업 및 동기화',
          '드래그 앤 드롭 태스크 관리',
          '팀 멤버 초대 및 권한 관리',
          '프로젝트 진행률 시각화',
          '댓글 및 파일 첨부 기능',
          '알림 및 데드라인 관리',
        ],
        challenges: [
          '실시간 데이터 동기화 및 충돌 해결',
          '복잡한 드래그 앤 드롭 UX 구현',
          '다중 사용자 권한 관리 시스템',
          '오프라인 모드 지원',
        ],
        solutions: [
          'Firebase Firestore의 실시간 리스너 활용',
          'React Beautiful DnD 라이브러리 커스터마이징',
          '역할 기반 접근 제어(RBAC) 시스템 구현',
          'Service Worker를 통한 오프라인 캐싱',
        ],
        duration: '4개월',
        teamSize: '3명 (프론트엔드 2명, 백엔드 1명)',
        role: '풀스택 개발자',
        results: [
          '팀 생산성 30% 향상',
          '사용자 만족도 4.8/5.0',
          '일일 활성 사용자 500명 달성',
          '태스크 완료율 85% 향상',
        ],
      },
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '다양한 도시의 날씨 정보를 실시간으로 제공하는 대시보드입니다. 직관적인 데이터 시각화와 예측 정보를 통해 사용자에게 유용한 날씨 인사이트를 제공합니다.',
        features: [
          '실시간 날씨 정보 및 7일 예보',
          '다중 도시 날씨 비교',
          '인터랙티브 차트 및 그래프',
          '위치 기반 자동 날씨 정보',
          '날씨 알림 및 경고',
          '히스토리 데이터 분석',
        ],
        challenges: [
          '다양한 API 데이터 통합 및 정규화',
          '실시간 데이터 업데이트 최적화',
          '복잡한 차트 데이터 시각화',
          '모바일 반응형 차트 구현',
        ],
        solutions: [
          'OpenWeather API와 추가 기상 API 통합',
          'React Query를 통한 효율적인 데이터 페칭',
          'Chart.js 커스터마이징 및 반응형 구현',
          'PWA 기능으로 오프라인 지원',
        ],
        duration: '2개월',
        teamSize: '2명 (개발자 1명, 디자이너 1명)',
        role: '프론트엔드 개발자',
        results: [
          'API 호출 최적화로 비용 60% 절감',
          '모바일 사용률 70% 달성',
          '평균 세션 시간 5분 증가',
          '사용자 재방문율 80% 달성',
        ],
      },
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my work and skills. Built with performance and accessibility in mind.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '개인 포트폴리오 웹사이트로, 최신 웹 기술과 디자인 트렌드를 적용하여 제작했습니다. 성능과 접근성을 최우선으로 고려한 현대적인 웹사이트입니다.',
        features: [
          '반응형 디자인 및 모바일 최적화',
          '부드러운 애니메이션 및 인터랙션',
          'SEO 최적화 및 메타 태그 관리',
          '다크/라이트 모드 지원',
          '접근성 표준 준수',
          '빠른 로딩 속도 및 성능 최적화',
        ],
        challenges: [
          '복잡한 애니메이션과 성능 최적화 균형',
          'SEO와 SPA의 호환성 문제',
          '다양한 디바이스에서의 일관된 UX',
          '접근성 표준 준수',
        ],
        solutions: [
          'Framer Motion을 활용한 최적화된 애니메이션',
          'Next.js SSG를 통한 SEO 최적화',
          'Tailwind CSS를 활용한 반응형 디자인',
          'ARIA 라벨 및 키보드 네비게이션 구현',
        ],
        duration: '1개월',
        teamSize: '1명 (개인 프로젝트)',
        role: '풀스택 개발자 & 디자이너',
        results: [
          'Lighthouse 성능 점수 98점 달성',
          '접근성 점수 100점 달성',
          '페이지 로딩 속도 1초 이내',
          '모든 주요 브라우저 호환성 확보',
        ],
      },
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content management features.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '소셜 미디어 분석을 위한 종합 대시보드입니다. 다양한 플랫폼의 데이터를 통합하여 인사이트를 제공하고, 콘텐츠 성과를 분석할 수 있는 도구입니다.',
        features: [
          '다중 소셜 미디어 플랫폼 연동',
          '실시간 분석 및 리포팅',
          '커스터마이징 가능한 대시보드',
          '자동화된 리포트 생성',
          '팀 협업 및 권한 관리',
          '예측 분석 및 트렌드 인사이트',
        ],
        challenges: [
          '다양한 API 통합 및 데이터 정규화',
          '대용량 데이터 처리 및 시각화',
          '실시간 데이터 스트리밍',
          '복잡한 권한 관리 시스템',
        ],
        solutions: [
          'GraphQL을 통한 효율적인 데이터 페칭',
          'D3.js와 Canvas를 활용한 고성능 시각화',
          'WebSocket을 통한 실시간 업데이트',
          'JWT 기반 인증 및 역할 관리',
        ],
        duration: '8개월',
        teamSize: '6명 (프론트엔드 3명, 백엔드 2명, 데이터 분석가 1명)',
        role: '프론트엔드 시니어 개발자',
        results: [
          '데이터 처리 속도 50% 향상',
          '사용자 인게이지먼트 40% 증가',
          '리포트 생성 시간 80% 단축',
          '고객 만족도 4.9/5.0 달성',
        ],
      },
    },
    {
      title: 'Recipe Finder App',
      description:
        'A recipe discovery app that helps users find recipes based on ingredients they have. Features include meal planning and shopping lists.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: ['React Native', 'Expo', 'Firebase', 'Spoonacular API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: {
        overview:
          '사용자가 보유한 재료를 기반으로 레시피를 추천하는 모바일 애플리케이션입니다. AI 기반 추천 시스템과 식단 계획 기능을 통해 요리의 즐거움을 제공합니다.',
        features: [
          '재료 기반 레시피 검색 및 추천',
          'AI 기반 개인화 추천 시스템',
          '식단 계획 및 쇼핑 리스트 생성',
          '영양 정보 및 칼로리 계산',
          '요리 타이머 및 단계별 가이드',
          '사용자 리뷰 및 평점 시스템',
        ],
        challenges: [
          '복잡한 레시피 매칭 알고리즘',
          '모바일 성능 최적화',
          '오프라인 모드 지원',
          '다양한 디바이스 호환성',
        ],
        solutions: [
          'Spoonacular API와 자체 알고리즘 결합',
          'React Native 성능 최적화 기법 적용',
          'SQLite를 활용한 로컬 데이터 저장',
          'Expo를 통한 크로스 플랫폼 개발',
        ],
        duration: '5개월',
        teamSize: '4명 (모바일 개발자 2명, 백엔드 1명, UI/UX 1명)',
        role: '모바일 앱 개발자',
        results: [
          '앱스토어 평점 4.7/5.0',
          '다운로드 수 10만+ 달성',
          '일일 활성 사용자 5,000명',
          '사용자 리텐션율 65% 달성',
        ],
      },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
        </AnimatedSection>

        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'animate' : ''}`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200">
                    <Eye className="mr-2 h-4 w-4" />
                    프로젝트 자세히 알아보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
