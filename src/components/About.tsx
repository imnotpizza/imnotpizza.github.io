import AnimatedSection from "./AnimatedSection"
import SkillSection from "./SkillsSection"

export default function About() {
  const hardSkills = [
    {
      title: "Frontend Development",
      items: [
        {
          name: "Modern Frameworks",
          description: [
            "JavaScript, TypeScript 기반 React, Vue.js, Next.js 등 모던 라이브러리, 프레임워크를 활용한 서비스 개발 경험 5년 9개월",
            "React 19, Next.js App Router 등 최신 기술 스택 도입 및 프로젝트 초기 세팅부터 배포까지 전체 개발 사이클 경험",
          ],
        },
        {
          name: "Refactoring",
          description: [
            "Selector Pattern, Flux Pattern 등 활용한 프로젝트 리팩토링으로 유지보수성 향상 및 성능 최적화 경험",
            "Webpack Module Federation을 활용한 레거시 Vue 프로젝트에서 React로의 점진적 전환 환경 구축",
            "재사용 가능한 컴포넌트 작성 및 문서화로 UI 작업 공수 평균 70% 감소",
          ],
        },
        {
          name: "Performance Optimization",
          description: [
            "Web Vitals 지표 개선을 통한 로드 속도 50% 감소, LCP 48% 감소, FCP 60% 감소 달성",
            "React Hook Form, React Query 도입으로 프레임 드랍 85% 감소 및 코드 양 18% 감소",
          ],
        },
        {
          name: "Testing & Quality",
          description: [
            "Vitest, React Testing Library, Cypress를 활용한 단위테스트, 통합테스트, E2E 테스트 작성 및 관리",
            "핵심 로직 테스트 커버리지 100% 달성, QA 소요시간 평균 55% 단축",
          ],
        },
        {
          name: "Build & Bundle",
          description: [
            "Webpack, Vite, Rollup 등 번들러 커스터마이징을 통한 최적화 및 라이브러리 빌드 환경 구축",
          ],
        },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      items: [
        {
          name: "Deployment",
          description: [
            "AWS EC2, Vercel, Nginx 등을 활용한 서비스 배포 및 운영 경험",
            "Next.js standalone 배포 방식으로 개선하여 서버 부하, 배포 속도 향상 경험",
          ],
        },
        {
          name: "CI/CD Pipeline",
          description: [
            "GitHub Actions, Vercel 기반 CI/CD 파이프라인 구축 및 운영",
          ],
        },

      ],
    },
    {
      title: "AI Automation",
      items: [
        {
          name: "AI Automation",
          description: [
            "AI 자동화 툴 도입으로 API 연동 관련 코드 작성 시간 95% 이상 감소",
            "GitHub Copilot 등 AI 코딩 어시스턴트 활용",
          ],
        },
      ],
    },
  ]

  const softSkills = [
    {
      title: "Leadership & Team Management",
      items: [
        {
          name: "프론트엔드 팀 리드",
          description: [
            "프론트엔드 팀 리드로 활동하여 기술적 이슈 가이드 및 솔루션 제공 경험",
            "회의 진행 간소화 및 사전 습득 자료 공유로 동일 분량 대비 회의시간 감소",
            "팀원들의 개발 역량 향상을 위한 가이드 및 발표 세션 운영",
          ],
        },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Main Description */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4 text-gray-700 text-lg lg:text-xl text-center max-w-4xl mx-auto">
              <p>반복적이고 불필요한 작업을 최소화하는 대신,</p>
              <p>서비스에 진정으로 필요한 일에 집중하는 것과</p>
              <p>그 과정을 좋아하는 프론트엔드 개발자입니다.</p>
            </div>
          </AnimatedSection>

          {/* 기술스택 섹션 */}
          <div className="space-y-12">
            {/* Hard Skills */}
            <SkillSection
              title="Technical Skills"
              skills={hardSkills}
              colorTheme="blue"
              gridCols="lg:grid-cols-3"
              baseDelay={400}
            />

            {/* Soft Skills */}
            <SkillSection
              title="Leadership"
              skills={softSkills}
              colorTheme="green"
              gridCols="lg:grid-cols-2"
              baseDelay={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
