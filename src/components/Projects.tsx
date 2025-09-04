"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Calendar, TrendingUp, FileText, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./AnimatedSection"
import ImageCarousel from "./ImageCarousel"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string // 프로젝트 설명
  responsibilities: string // 담당 작업
  images: string[] // 이미지 배열로 변경
  technologies: string[]
  period: string
  impact: string[] // 주요성과
  liveUrl?: string
  featured?: boolean
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: "toodee-ui-renewal",
      title: "오늘의 배송 Toodee",
      subtitle: "배송접수, 홈페이지 UI 및 구조 개선 작업",
      description:
        "오늘의 배송 Toodee는 퀵, 택배접수, 배송현황, 결제현황 등을 손쉽게 처리, 확인할 수 있는 PC/앱으로 제공되는 B2B 서비스입니다.",
      responsibilities: "기존 퀵, 택배접수 UI의 리뉴얼 및 편의 기능 추가, 코드 리팩토링, 최적화 작업을 진행하였습니다.",
      images: ["/assets/toodee-main.webp", "/assets/toodee-order-rz.webp"],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "React Hook Form",
        "Zod",
        "React Query",
        "Vitest",
        "MSW",
        "Storybook",
      ],
      period: "2024.10 - 2025.04",
      impact: [
        "react-hook-form, zod, react-query 도입 및 코드 개선으로 프레임 드랍 85% 감소 및 코드 양 18% 감소",
        "vitest, react-testing-library 사용한 단위, 통합테스트 작성, 중요도 기준으로 테스트 분류, 중요도 상 테스트 커버리지 100% 달성",
        "기존 테스트 환경 Jest+MSW v1을 Vitest+MSW v2로 마이그레이션, 테스트 속도 70%향상 및 Storybook과 통합",
        "홈페이지의 퍼포먼스 개선하여 html 로드 속도 50%감소, LCP 48%감소, FCP 60%감소",
        "기존 UI PC/모바일 반응형 최적화 형태로 개선",
      ],
      liveUrl: "https://toodee.kr/",
      featured: true,
    },
    {
      id: "myribe",
      title: "마이리베",
      subtitle: "대리점, 판매점 단말 리베이트 관리 서비스",
      description: "마이리베는 대리점, 판매점의 단말 리베이트 관리, 개통관리, 상담기능 등을 제공하는 B2B 서비스입니다.",
      responsibilities:
        "단말 리베이트 정책 등록 및 개통 요청 작업을 담당, 프로젝트 기획, UI 설계 등 관여하여 MVP 프로젝트 출시에 성공하였습니다.",
      images: ["/assets/toodee-main.webp"], // 실제 이미지로 교체 필요
      technologies: ["Next.js", "React 19", "TypeScript", "Next-Auth", "Vercel", "GitHub Actions"],
      period: "2025.03 - 2025.09",
      impact: [
        "Next.js App Router & React 19 기반 프로젝트의 초기 세팅부터 배포까지의 작업을 담당",
        "JWT 인증을 Next-Auth 기반으로 구축하여 CSRF 방지 작업 등 보안 중심적인 인증 체계 구축",
        "단말 시리즈/목록 관련 API들의 중복 호출 문제를 Data Cache 기법 적용하여 API 호출수 95%이상 감소",
        "Vercel, Github Action 기반 CI/CD 및 클라우드 배포 환경 구축",
      ],
    },
    {
      id: "o2plus-design-system",
      title: "O2pluss Design System",
      subtitle: "오투플러스 범용 디자인 시스템",
      description: "오투플러스 내 모든 프로젝트에 범용으로 사용되는 디자인 시스템을 제작하였습니다.",
      responsibilities:
        "재사용 가능한 컴포넌트 작성, 문서화, 테스트 자동화 등을 통해 UI 작업공수 평균 70% 감소를 달성하였습니다.",
      images: ["/assets/coconuts-estimate.webp"], // 실제 이미지로 교체 필요
      technologies: ["React", "TypeScript", "Vite", "Storybook", "GitHub Actions", "GitHub Packages"],
      period: "2024.02 - 2024.12",
      impact: [
        "재사용/커스터마이징 가능한 컴포넌트, 에니메이션 도입으로 UI 작업공수 평균 30~50% 감소",
        "vite를 사용한 모듈 번들로 다양한 환경 (SSR, cjs, esm)에서 사용가능한 라이브러리 빌드",
        "storybook 사용한 예제 작성 및 문서화 AI 사용한 자동화로 관련 작업시간 80%감소",
        "github actions, github packages 사용한 배포 CI/CD 파이프라인 구축",
      ],
    },
    {
      id: "coconuts-renewal",
      title: "Coconuts 리뉴얼 및 개선 작업",
      subtitle: "KT M&S 협력 단말 요금 상담 및 유통 관리 서비스",
      description: "코코넛은 KT M&S와의 협력하에 운영중인 단말 요금 상담 및 유통 관리 기능을 담고 있는 서비스입니다.",
      responsibilities:
        "Vue 기반 레거시 서비스의 UI/UX 개선 및 비즈니스 로직 리팩토링, E2E 시나리오 테스트를 구축하였습니다.",
      images: ["/assets/coconuts-estimate.webp"],
      technologies: ["React", "Vue.js", "TypeScript", "Webpack", "Module Federation", "Cypress", "Pinia"],
      period: "2024.03 - 2025.07",
      impact: [
        "기존의 요금, 할인 계산 관련 레거시 코드를 Flux 패턴, selector 패턴 기반으로 개선하여 코드 흐름 및 유지보수성 개선",
        "Webpack Module Federation 사용하여 레거시 Vue프로젝트 점진적으로 React로 개선 환경 구축",
        "Cypress E2E 테스트 도입으로 시나리오 테스트 자동화로 반복 검증 작업 13% 감소",
        "Webpack 기반 React 프로젝트 구축, contenthash 적용하여 페이지 번들 로드 속도 50%증가, 안정적 cache busting 구축",
      ],
    },
    {
      id: "toodee-deployment",
      title: "오늘의 배송 Toodee: 배포환경 및 CI/CD 개선",
      subtitle: "배포 환경 최적화",
      description: "기존의 비효율적인 투디의 배포환경을 최적의 구조로 개선하였습니다.",
      responsibilities: "기존 프로젝트 배포방식을 standalone 배포방식으로 변경하여 배포 효율성을 크게 개선하였습니다.",
      images: ["/assets/toodee-order-rz.webp"],
      technologies: ["Next.js", "Docker", "GitHub Actions", "Slack Webhook"],
      period: "2024.12 - 2025.04",
      impact: [
        "기존 next start 사용한 배포 방식 standalone 방식으로 개선하여 빌드폴더 용량 65%감소",
        "기존의 빌드 커맨드 개선하여 배포시간 최대 6분에서 평균 1.5분으로 감소",
        "Slack Webhook 추가하여 배포 성공/실패시 알림기능 추가",
      ],
    },
    {
      id: "vloc-console",
      title: "VLOC Console",
      subtitle: "Web3 블록체인 화상통화 솔루션 B2C 서비스",
      description:
        "VLOC이란 Web3, 블록체인 기반 화상통화 솔루션을 제공하는 서비스입니다. SDK의 사용량에 대한 결제 및 토큰 발급, 사용량 모니터링이 가능한 B2C 서비스입니다.",
      responsibilities:
        "SDK의 사용량에 대한 결제 및 토큰 발급, 사용량 모니터링이 가능한 B2C 서비스의 제작을 담당하였습니다.",
      images: ["/assets/vloc-console-resized.webp"],
      technologies: ["React", "Next.js", "React Query", "TypeScript", "Docker", "Jest", "Testing Library"],
      period: "2022.10 - 2023.03",
      impact: [
        "React-Query 도입, API 캐싱으로 클라이언트 환경에서 api 호출횟수 17% 감소",
        "공통 API 결과 사용 페이지에 ISR 적용하여 API 호출수 95%이상 감소",
        "Docker Cache 및 Multi Stage Build 적용하여 빌드시간 최대 40%감소, 이미지 용량 80%감소, 배포 소요시간 60% 감소",
        "Web Vitals 지표 개선 위해 번들 최적화 적용한 결과 전 항목 90점 이상 달성",
        "Jest, Testing Library 기반 Unit Test 도입으로 QA 관련 작업량 50%가량 감소",
      ],
    },
    {
      id: "larla-project",
      title: "Larla",
      subtitle: "VLOC Client SDK 화상통화 체험 서비스",
      description: "VLOC Client SDK 의 화상통화 기능을 체험할 수 있는 화상통화 서비스입니다.",
      responsibilities: "VLOC Client SDK의 화상통화 기능을 활용한 안정적인 화상통화 서비스를 구축하였습니다.",
      images: ["/assets/vloc-larla.webp", "/assets/vloc-larla-room-rz.webp"],
      technologies: ["React", "TypeScript", "Zustand", "WebRTC", "Socket.io"],
      period: "2022.06 - 2022.09",
      impact: [
        "Zustand와 Presentational/Container 패턴 적용하여 상태와 UI의 분리",
        "Selector 패턴, React.Memo 사용한 컴포넌트 캐싱으로 화상통화 실행 중 프레임 드랍이슈 해결 및 메모리 소모량 34% 감소",
        "사용자 화면 highlight UI에 디바운싱 사용하여 렌더링 성능, UX 개선",
      ],
    },
    {
      id: "editor-2-0",
      title: "Editor 2.0",
      subtitle: "미니스쿨 화상수업 교재 제작 에디터 툴",
      description:
        "미니스쿨 화상수업 서비스의 교재 제작에 사용되는 에디터 툴 서비스입니다. 레거시 Editor를 리뉴얼하고 최신 기술스택을 적용한 프로젝트입니다.",
      responsibilities: "기존 클래스 컴포넌트 기반 레거시 코드 및 라이브러리를 최신 스펙으로 리뉴얼하였습니다.",
      images: ["/assets/vloc-console-resized.webp"], // 실제 이미지로 교체 필요
      technologies: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Webpack",
        "Jest",
        "React Testing Library",
        "Storybook",
        "ESBuild",
      ],
      period: "2021.06 - 2021.12",
      impact: [
        "기존 레거시 Redux 관련 로직 개선 (Redux Toolkit, useSelector 도입)",
        "Webpack 기반 React 프로젝트 빌드 및 번들링 구조 구축",
        "Jest, React Testing Library 사용한 단위테스트 작성",
        "ESBuild-loader 적용하여 로드시간 평균 5.5초에서 2초 가량으로 감소",
        "Storybook 사용한 컴포넌트 UI 테스트, 문서화 도입",
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              5년 9개월간의 프론트엔드 개발 경험을 통해 다양한 B2B, B2C 서비스를 개발하고 최적화해왔습니다.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={index * 150}>
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
                    <CardTitle className="text-2xl lg:text-3xl mb-4">{project.title}</CardTitle>

                    {/* 2. 프로젝트 설명 */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">프로젝트 설명</span>
                          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{project.description}</p>
                        </div>
                      </div>

                      {/* 3. 작업내용 */}
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-gray-500 block mb-1">작업내용</span>
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
                        <span className="text-sm font-medium text-gray-500 block mb-1">작업기간</span>
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{project.period}</p>
                      </div>
                    </div>

                    {/* 5. 주요성과 */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <span className="text-sm font-medium text-gray-500 block mb-1">주요성과</span>
                          <div className="space-y-1">
                            {project.impact.map((impact, impactIndex) => (
                              <div key={impactIndex} className="text-base py-2 text-gray-700">
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
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
  )
}
