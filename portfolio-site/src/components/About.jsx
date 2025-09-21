const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-yellow-400 font-bold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">My Journey</h3>
            <p className="text-lg text-black mb-6 leading-relaxed">
              I'm currently a student at Nanyang Polytechnic, exploring the world through an exciting exchange programme
              at Woosong University. This experience has broadened my perspective and allowed me to immerse myself in
              different cultures while pursuing my passion for technology.
            </p>
            <p className="text-lg text-black mb-6 leading-relaxed">
              My journey in technology is driven by a fascination with coding and the endless possibilities it offers.
              I'm particularly interested in the intersection of artificial intelligence and human productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">Student</span>
              <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">Exchange Programme</span>
              <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">Tech Enthusiast</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-lg">
              <img
                src="/ai-portfolio/study-environment.png"
                alt="Study environment"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                  NP
                </div>
                <div>
                  <p className="font-semibold text-black">Nanyang Polytechnic</p>
                  <p className="text-sm text-black">Exchange at Woosong University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About