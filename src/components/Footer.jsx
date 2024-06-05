const Footer = () => {
  return (
    <footer className="bg-[#151218] p-8 md:p-14">
      {/* CTA */}
      <section className="grid place-items-center text-white bg-gradient-to-r from-violet-500 to-red-300 animate-moveGradient p-8 md:p-14 w-full md:w-3/4 mx-auto rounded-xl bg-[length:200%_200%] gap-6 md:gap-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Accelerate Your Career Growth with CleverBooks
        </h1>
        <p className="text-xs md:text-sm w-full md:w-2/3">
          Unlock your potential and achieve your career aspirations faster with
          CleverBooks. Our AI-powered platform provides the tools and guidance
          you need to succeed in today's competitive job market. Join us today
          and take the first step towards a brighter future.
        </p>
        <button className="bg-black text-white rounded-full px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-semibold">
          Get started with CleverBooks
        </button>
      </section>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-14">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold">CleverBooks</h1>
          <p className="text-light text-sm md:text-base">
            CleverBooks is an AI-powered supply chain software that provides
            companies tools for demand forecasting, inventory planning and more.
            This helps them have the right amount of stock, optimize space and
            fulfill every order.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="font-medium text-base md:text-lg">
            Contact CleverBooks
          </h1>
          <p className="text-light text-sm md:text-base">
            sales@getCleverBooks.ai
          </p>
          <p className="text-light text-sm md:text-base">
            Registered Office: 1507, Incubex, 11th cross road, 19th Main Road,
            Bengaluru, India. 560102
          </p>
          <p className="text-light text-sm md:text-base">
            Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross,
            Sector - 6, HSR Layout, Bengaluru, India. 560102
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
