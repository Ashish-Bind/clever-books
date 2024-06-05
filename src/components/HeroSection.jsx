function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row gap-10 px-8 lg:px-44 lg:py-24 h-screen bg-[#181512] rounded-br-2xl rounded-bl-2xl -z-10 pt-20">
      <div className="space-y-10 flex-1 text-white">
        <h1 className="text-4xl font-bold">
          Unlock Your Future with{' '}
          <span className="gradient-text">AI-Powered Career Guidance.</span>
        </h1>
        <p>
          At CleverBooks, we're dedicated to helping you navigate your career
          journey with precision and confidence. Leveraging advanced AI
          technology, we provide personalized guidance tailored to your unique
          skills and aspirations. Whether you're just starting out or looking to
          advance, CleverBooks ensures you're always on the right path.
        </p>
        <button className="gradient-border bg-white text-gray-800 font-bold py-2 px-4 rounded-full">
          Start Your Career Journey
        </button>
      </div>
      <div className="flex-1">
        <img src="/hero.svg" alt="" className="w-full lg:h-full h-[40%]" />
      </div>
    </main>
  )
}

export default HeroSection
