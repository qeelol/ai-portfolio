import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800"></div>

        {/* Flashing overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-400/30 to-primary-400/30 animate-pulse"></div>

        {/* Wave animations */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.1)">
                  <animate attributeName="stop-color"
                    values="rgba(147, 197, 253, 0.1);rgba(196, 181, 253, 0.15);rgba(147, 197, 253, 0.1)"
                    dur="4s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="rgba(196, 181, 253, 0.08)">
                  <animate attributeName="stop-color"
                    values="rgba(196, 181, 253, 0.08);rgba(147, 197, 253, 0.12);rgba(196, 181, 253, 0.08)"
                    dur="4s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.08)">
                  <animate attributeName="stop-color"
                    values="rgba(168, 85, 247, 0.08);rgba(59, 130, 246, 0.12);rgba(168, 85, 247, 0.08)"
                    dur="6s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)">
                  <animate attributeName="stop-color"
                    values="rgba(59, 130, 246, 0.1);rgba(168, 85, 247, 0.15);rgba(59, 130, 246, 0.1)"
                    dur="6s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
            </defs>

            {/* First wave */}
            <path fill="url(#wave1)" opacity="0.7">
              <animate attributeName="d"
                values="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z;
                        M0,500 C300,400 600,300 1200,500 L1200,800 L0,800 Z;
                        M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
                dur="8s" repeatCount="indefinite"/>
            </path>

            {/* Second wave */}
            <path fill="url(#wave2)" opacity="0.5">
              <animate attributeName="d"
                values="M0,500 C300,600 600,200 1200,300 L1200,800 L0,800 Z;
                        M0,300 C300,200 600,600 1200,500 L1200,800 L0,800 Z;
                        M0,500 C300,600 600,200 1200,300 L1200,800 L0,800 Z"
                dur="10s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-200/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-secondary-200/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary-300/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
