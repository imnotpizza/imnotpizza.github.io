import AnimatedSection from './AnimatedSection';

export default function About() {
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

        <div className="flex flex-col gap-12 items-center">
          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 주요 문구 */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed lg:text-xl sm:text-lg">
              <AnimatedSection animation="fade-right" delay={0}>
                <p>
                  1.
                  <strong className="text-blue-600">
                    TypeScript 기반의 React, Vue 기반 프로젝트, Next.js 기반의
                    SSR 환경에서의 개발 및 퍼포먼스 측정 및 최적화 경험
                  </strong>
                  을 보유 하고 있습니다.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={100}>
                <p>
                  2.{' '}
                  <strong className="text-purple-600">
                    Redux, Zustand, Pinia, Jotai 등 상태관리
                  </strong>{' '}
                  라이브러리를 활용하여 성능과 구조적 우수성에 중점을 둔 최적의
                  프로젝트 아키텍처를 구축 및 개선한 경험이 있습니다.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={200}>
                <p>
                  3.{' '}
                  <strong className="text-green-600">
                    Vite, Rollup, Webpack 등 모듈 번들러
                  </strong>
                  를 활용한 디자인시스템, SDK 등 라이브러리의 배포 및 번들
                  커스터마징 경험이 있습니다.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <p>
                  4.{' '}
                  <strong className="text-pink-600">
                    Jest, Vitest, React Testing Library, MSW
                  </strong>
                  를 사용한 포괄적인 테스팅 환경 구축에 능숙하며, 중요도에 따른
                  테스트 커버리지 관리와 테스트 유틸 모듈화를 통해 효율성을
                  극대화하였습니다.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={400}>
                <p>
                  5.{' '}
                  <strong className="text-yellow-600">
                    PM2, Nginx, Linux, Docker, Github Actions
                  </strong>
                  를 활용한 인프라 구축, 최적화, CI/CD 관련 구축 작업을
                  진행하였으며, DevOps 관련 작업의 부담을 덜기 위해 일부
                  프로젝트를 <strong className="text-gray-900">Vercel</strong>{' '}
                  로 이전하였습니다.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={500}>
                <p>
                  6. 개발팀의{' '}
                  <strong className="text-red-600">
                    Github Copilot for Business AI 도입을 주도
                  </strong>
                  하여 단순 업무와 문서화 등의 반복 작업 시간을{' '}
                  <strong className="text-indigo-600">90% 이상 감소</strong>
                  시켜 팀 생산성을 크게 향상시켰습니다.
                </p>
              </AnimatedSection>
            </div>

            {/* <AnimatedSection animation="fade-up" delay={600}>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">경력</h4>
                  <p className="text-gray-600">5+ Years</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">프로젝트</h4>
                  <p className="text-gray-600">100+ Completed</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">전문분야</h4>
                  <p className="text-gray-600">풀스택 프론트엔드</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">중점영역</h4>
                  <p className="text-gray-600">성능 및 아키텍처</p>
                </div>
              </div>
            </AnimatedSection> */}
          </div>
        </div>
      </div>
    </section>
  );
}
