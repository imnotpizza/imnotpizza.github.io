"use client"

import AnimatedSection from "./AnimatedSection"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <AnimatedSection animation="fade-up" delay={200} className="w-full lg:w-1/2">
            <div className="flex justify-center lg:block">
              {/* Mobile: Circular image, Desktop: Rectangle image */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MbTBIrkoB6yGi4f1slktzrPNV3LxsL.png"
                alt="Profile"
                className="w-[20rem] h-[20rem] p-6 bg-white shadow-lg rounded-full object-cover
                         lg:w-full lg:h-auto lg:p-0 lg:rounded-2xl lg:transform lg:hover:scale-105 lg:transition-transform lg:duration-500"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-up" delay={400} className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">고보빈</span>입니다
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              본질에 집중하여 회사의 성장에 기여하는 개발자입니다
            </p>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto lg:mx-0">
              반복적이고 불필요한 작업을 최소화하는 대신, 서비스에 진정으로 필요한 일에 집중하는 것과 그 과정을 좋아하는
              프론트엔드 개발자입니다.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
