"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Quote } from "lucide-react"

const questions = [
  {
    question: "1분 자기소개를 부탁드립니다. 특히 프론트엔드 개발자로서 본인의 강점을 강조해 주세요.",
    hint: "의도: 지원자의 전반적인 배경과 직무 적합성을 확인하며, 이력서에 기재된 내용을 간결히 요약해 말할 수 있는지 평가.\n관련 이력서 내용: 본질에 집중, 팀 협업, 성과 중심(예: QA 인입 50% 감소, MVP 제작 속도 30% 향상).",
  },
  {
    question:
      '이력서에서 "본질에 집중한다"고 언급하셨는데, 프론트엔드 개발에서 본질이란 구체적으로 무엇이라고 생각하시나요?',
    hint: "의도: 지원자의 철학과 가치관을 확인하며, 본질에 대한 정의가 실제 경험과 어떻게 연결되는지 평가.\n관련 이력서 내용: 본질에 집중하여 회사의 빠른 성장에 기여, 사용자 문제 해결 및 가치 창출.",
  },
  {
    question: "오투플러스에서 프론트엔드 파트장으로서 어떤 리더십을 발휘하셨나요? 구체적인 사례를 들어 설명해 주세요.",
    hint: "의도: 리더십 스타일과 팀 관리 능력을 확인하며, 파트장 역할에서의 구체적 기여를 평가.\n관련 이력서 내용: 오투플러스 프론트엔드 파트장(2023.09~), 팀 협업 및 R&R 명확화로 소통 미스 감소.",
  },
  {
    question:
      "오투플러스의 Toodee 프로젝트에서 배송접수 페이지 퍼포먼스를 30% 향상시켰다고 하셨는데, 어떤 기술적 접근을 사용했는지 구체적으로 설명해 주세요.",
    hint: "의도: 기술적 문제 해결 과정과 최적화 능력을 평가.\n관련 이력서 내용: react-hook-form, zod, react-query 도입, Web Vitals 지표 개선(LCP 48% 감소, FCP 60% 감소).",
  },
  {
    question:
      "Coconuts 프로젝트에서 요금계산기 서비스를 Webpack Module Federation으로 공용 모듈화했다고 하셨는데, 이 방식을 선택한 이유와 그 과정에서 겪은 도전 과제는 무엇이었나요?",
    hint: "의도: 모듈화 전략의 의사결정 과정과 기술적 문제 해결 능력을 확인.\n관련 이력서 내용: Webpack Module Federation 기반 공용 모듈 분리, 로드 속도 40% 증가.",
  },
  {
    question:
      "Sentry를 활용해 CS 이슈 처리 속도를 30% 증가시켰다고 하셨는데, 구체적으로 어떤 에러를 어떻게 추적하고 해결했는지 사례를 들어 설명해 주세요.",
    hint: "의도: 에러 추적 및 디버깅 능력을 확인하며, Sentry 활용 경험을 구체적으로 평가.\n관련 이력서 내용: Sentry 도입으로 CS 이슈 처리 속도 30% 증가, 요금계산기 CORS 에러 해결.",
  },
  {
    question:
      "Next.js App Router를 활용한 캐싱 기능으로 API 호출 수를 95% 이상 감소시켰다고 하셨는데, 이 캐싱 전략의 설계 과정과 주요 고려사항은 무엇이었나요?",
    hint: "의도: Next.js의 고급 기능 활용 능력과 성능 최적화에 대한 이해도를 평가.\n관련 이력서 내용: Coconuts 파이오니어 프로젝트, Data Cache 기법으로 API 호출 수 95% 이상 감소.",
  },
  {
    question:
      "VLOC Console 프로젝트에서 React-Query를 도입해 API 호출 수를 17% 감소시켰다고 하셨는데, React-Query를 선택한 이유와 구현 과정에서 주의한 점은 무엇인가요?",
    hint: "의도: React-Query의 활용 이유와 구현 상의 기술적 판단을 평가.\n관련 이력서 내용: VLOC Console, React-Query로 API 호출 수 17% 감소, ISR 적용.",
  },
  {
    question:
      "O2pluss Design System에서 Storybook과 AI를 활용해 작업 시간을 80% 감소시켰다고 하셨는데, AI를 어떻게 활용했으며, 어떤 작업을 자동화했나요?",
    hint: "의도: AI 도구 활용 능력과 생산성 향상 사례를 확인.\n관련 이력서 내용: Storybook 문서화, AI로 작업 시간 80% 감소, 재사용 가능한 컴포넌트 제작.",
  },
  {
    question:
      "Cypress Studio를 사용해 E2E 테스트를 구축한 경험을 설명해 주세요. E2E 테스트를 도입하며 어떤 도전 과제가 있었고, 어떻게 극복했나요?",
    hint: "의도: 테스트 자동화 경험과 문제 해결 능력을 평가.\n관련 이력서 내용: Coconuts 리뉴얼, Cypress Studio 기반 E2E 테스트로 QA 인입 50% 감소.",
  },
  {
    question:
      "프로젝트 중 예상치 못한 기술적 문제를 마주했을 때, 어떻게 대처했는지 구체적인 사례를 들어 설명해 주세요.",
    hint: "의도: 문제 해결 능력과 논리적 접근 방식을 확인.\n관련 이력서 내용: Toodee 배포환경 개선(Node 호환성 이슈 해결), Coconuts CORS 에러 추적 및 해결.",
  },
  {
    question: "팀원 간의 소통 미스로 인해 프로젝트 지연이 발생한 경험이 있다면, 이를 어떻게 해결했는지 말씀해 주세요.",
    hint: "의도: 팀 협업 능력과 소통 문제를 해결한 경험을 평가.\n관련 이력서 내용: R&R 명확화로 소통 미스 감소, 프론트엔드 파트장으로서 협업 주도.",
  },
  {
    question:
      "우리 회사에서 프론트엔드 개발자로서 어떤 기여를 할 수 있다고 생각하시나요? 특히 이력서에 나오는 본인의 성과를 어떻게 활용할 계획인가요?",
    hint: "의도: 회사와 직무에 대한 이해도 및 지원자의 기여 가능성을 확인.\n관련 이력서 내용: 퍼포먼스 개선(로드 속도 30%, LCP 48% 감소), QA 인입 50% 감소, CI/CD 최적화.",
  },
  {
    question:
      "프론트엔드 개발 트렌드 중 최근 주목하고 있는 기술이나 방법론은 무엇이며, 이를 어떻게 적용할 수 있다고 생각하나요?",
    hint: "의도: 최신 기술 트렌드에 대한 이해와 실무 적용 가능성을 평가.\n관련 이력서 내용: Next.js App Router, Webpack Module Federation, Storybook, React-Query 등 최신 기술 활용.",
  },
  {
    question:
      "이력서에서 팀 협업과 소통을 중요시한다고 하셨는데, 팀 내 갈등 상황에서 어떻게 대처하시나요? 구체적인 사례를 들어 설명해 주세요.",
    hint: "의도: 조직 문화 적합성과 갈등 관리 능력을 확인.\n관련 이력서 내용: 지속적인 논의를 통해 R&R 명확화, 소통 미스로 인한 소요 시간 감소.",
  },
]

export default function Scripts() {
  const [currentQuestion, setCurrentQuestion] = useState<{ question: string; hint: string } | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const generateRandomQuestion = () => {
    setIsAnimating(true)
    setShowHint(false) // 새 질문 생성시 힌트 숨기기

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * questions.length)
      setCurrentQuestion(questions[randomIndex])
      setIsAnimating(false)
    }, 300)
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Quote className="h-8 w-8 text-indigo-600" />
              랜덤 면접 질문 생성기
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* 질문 표시 영역 */}
            <div className="min-h-[120px] flex items-center justify-center">
              {currentQuestion ? (
                <div
                  className={`space-y-4 transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                >
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 text-center leading-relaxed">
                    "{currentQuestion.question}"
                  </blockquote>
                  {showHint && (
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-sm text-gray-600 whitespace-pre-line">{currentQuestion.hint}</p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 text-lg text-center">버튼을 클릭해서 면접 질문을 확인해보세요</p>
              )}
            </div>

            {/* 버튼 */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={generateRandomQuestion}
                disabled={isAnimating}
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <RefreshCw className={`h-5 w-5 mr-2 ${isAnimating ? "animate-spin" : ""}`} />
                새로운 질문
              </Button>

              {currentQuestion && (
                <Button
                  onClick={toggleHint}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 bg-transparent"
                >
                  {showHint ? "힌트 숨기기" : "힌트 보기"}
                </Button>
              )}
            </div>

            {/* 통계 정보 */}
            <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
              총 {questions.length}개의 면접 질문
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
