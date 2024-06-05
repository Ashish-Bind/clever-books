function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row gap-10 px-8 lg:px-44 lg:py-24 h-screen bg-black rounded-br-2xl rounded-bl-2xl -z-10">
      <div className="space-y-10 flex-1 text-white">
        <h1 className="text-4xl font-bold">
          Every order fulfilled,<span className="gradient-text"> on time.</span>
        </h1>
        <p>
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </p>
        <button className="gradient-border bg-white text-gray-800 font-bold py-2 px-4 rounded-full">
          Get Started with CarrerBooks
        </button>
      </div>
      <div className="flex-1">
        <img src="/hero.svg" alt="" className="w-full lg:h-full" />
      </div>
    </main>
  )
}

export default HeroSection
