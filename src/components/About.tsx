import AnimatedSection from './AnimatedSection';
import SkillSection from './SkillsSection';

export default function About() {
  const hardSkills = [
    {
      title: 'Frontend Development',
      items: [
        {
          name: 'Frontend Development',
          description: [
            'Javascript, Typescript 기반 React, Vue.js, Next.js 등 모던 라이브러리, 프레임워크를 활용한 서비스 개발 경험 5년 이상',
          ],
        },
        {
          name: 'Build & Bundle',
          description: [
            'Webpack, Vite, Rollup 등 번들러 커스터마이징을 통한 최적화 및 라이브러리 제작 및 배포 경험',
          ],
        },
        {
          name: 'Testing',
          description: [
            'Jest, Vitest, React Testing Library, Cypress 활용한 체계적 단위테스트, E2E 테스트 작성 및 관리 경험',
          ],
        },
        {
          name: 'Performance Optimization',
          description: [
            'Lighthouse 사용한 Web Vitals 지표 측정 및 Network Waterfall Chart 분석 및 개선 통한 로드시간, 퍼포먼스 개선 경험',
          ],
        },
      ],
    },
    {
      title: 'DevOps',
      items: [
        {
          name: '배포환경',
          description: [
            'Ubuntu(NCP), Nginx, Vercel, Docker 등 활용한 배포환경 구축 및 최적화 경험',
          ],
        },
        {
          name: 'CI/CD',
          description: [
            'GitHub Actions 활용한 CI/CD 파이프라인 구축 및 운영',
            'Slack Webhook 을 활용한 배포 알림 시스템 구축',
          ],
        },
      ],
    },
    {
      title: 'AI Automation',
      items: [
        {
          name: 'AI 자동화',
          description: [
            'Copilot for Business 활용한 단순 반복작업 소요시간 90% 이상 단축',
          ],
        },
      ],
    },
  ];

  const softSkills = [
    {
      title: 'FE Team Leader',
      items: [
        {
          name: '',
          description: [
            '프론트엔드 팀 리더로서 일정 관리, 코드리뷰, R&R 지정 기술 스택 관리 등 팀 운영 경험',
            '백엔드, 디자인, 기획팀과의 협업을 통한 불필요한 작업 지연 및 혼란 방지',
          ],
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Main Description */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-2 text-gray-700 text-2xl lg:text-3xl font-bold text-center">
              <p>반복적이고 불필요한 작업을 최소화하는 대신,</p>
              <p>서비스에 진정으로 필요한 일에 집중하는 것과</p>
              <p>그 과정을 좋아하는 프론트엔드 개발자입니다.</p>
            </div>
          </AnimatedSection>

          {/* 기술스택 섹션 */}
          <div className="space-y-12">
            {/* Hard Skills */}
            <SkillSection
              title="Hard Skills"
              skills={hardSkills}
              colorTheme="blue"
              gridCols="lg:grid-cols-3"
              baseDelay={400}
            />

            {/* Soft Skills */}
            <SkillSection
              title="Soft Skills"
              skills={softSkills}
              colorTheme="green"
              gridCols="lg:grid-cols-3"
              baseDelay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
