const Interests = () => {
  const interests = [
    {
      title: "Coding & Development",
      description: "Passionate about creating innovative solutions through code, exploring new technologies and frameworks.",
      icon: "💻",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Artificial Intelligence",
      description: "Fascinated by AI's potential to transform how we work and live, particularly in automation and productivity.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Work Automation",
      description: "Interested in developing AI solutions that enable people to 'work' without traditional labor constraints.",
      icon: "⚡",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Innovation & Technology",
      description: "Always exploring cutting-edge technologies and their applications in solving real-world problems.",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            My <span className="text-yellow-400 font-bold">Interests</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Exploring the intersection of technology, innovation, and human potential
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${interest.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {interest.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{interest.title}</h3>
                </div>
              </div>
              <p className="text-black leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">My Vision</h3>
            <p className="text-lg text-black leading-relaxed">
              I believe in leveraging technology, particularly AI, to create a future where people can focus on creativity,
              innovation, and meaningful work while intelligent systems handle routine tasks. My goal is to contribute to
              developing solutions that enhance human potential rather than replace it.
            </p>
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop"
                alt="Technology and innovation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests