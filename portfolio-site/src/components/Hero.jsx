const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Hello, I'm{' '}
            <span className="text-yellow-400 font-bold">
              Nelson Jonathan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed">
            Student at Nanyang Polytechnic, currently on an exchange programme at Woosong University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Get In Touch
            </button>
            <button className="px-8 py-3 border-2 border-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300">
              View My Work
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="/profile.png"
                alt="Nelson Jonathan"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
              👋
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero