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
                src="/assets/mypic.webp"
                alt="Profile"
                className="w-[20rem] lg:w-[40rem] aspect-square bg-white shadow-lg rounded-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-up" delay={400} className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">고보빈</span>입니다
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              본질에 집중하여 회사의 빠른 성장에 기여하고자 하는 개발자입니다
            </p>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto lg:mx-0">
              서비스의 성공과 성장에 실질적으로 기여하는 '본질'에 집중할 수 있는 환경을 만드는 것을 가장 중요하게
              생각하며, 이를 통해 회사에 최고의 성과를 내고자 합니다. <br />
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
