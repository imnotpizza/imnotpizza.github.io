import { Github, Linkedin, Mail, Heart } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{"<고보빈 />"}</h3>
              <p className="text-gray-400 mb-4">
                Frontend Developer passionate about creating beautiful and functional web experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Web Development
                </li>
                <li className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  UI/UX Design
                </li>
                <li className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Responsive Design
                </li>
                <li className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Performance Optimization
                </li>
                <li className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Consulting
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="mx-1 h-4 w-4 text-red-500 animate-pulse" /> by Alex Johnson © 2024
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
