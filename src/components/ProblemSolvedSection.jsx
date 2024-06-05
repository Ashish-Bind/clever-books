const cardDetails = [
  {
    heading: 'What to order',
    desc: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
  },
  {
    heading: 'When to order',
    desc: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
  },
  {
    heading: 'How much to stock',
    desc: 'Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.',
  },
  {
    heading: 'Where to place',
    desc: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
  },
]

const Card = ({ index, heading, desc }) => {
  return (
    <div className="grid gap-2 p-8 bg-violet-100 rounded-xl">
      <img src={`/service-${index + 1}.svg`} alt="" className="size-12" />
      <h1 className="font-bold text-lg">{heading}</h1>
      <p className="font-medium">{desc}</p>
    </div>
  )
}

const ProblemSolvedSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col my-10">
      <div className="text-3xl font-extrabold mb-20">
        Four key questions answered by Crest
      </div>
      <div className="grid md:grid-cols-[1fr_1fr_1fr_1fr] gap-10 md:mx-32 mx-10">
        {cardDetails.map((val, i) => (
          <Card index={i} desc={val.desc} heading={val.heading} key={i} />
        ))}
      </div>
    </section>
  )
}

export default ProblemSolvedSection
