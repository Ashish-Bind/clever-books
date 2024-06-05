const cardDetails = [
  {
    heading: 'Leverage the power of AI',
    desc: 'CleverBooks is an AI-powered career guidance platform designed to help individuals navigate their career paths with personalized advice, skill development.',
  },
  {
    heading: 'Progress in career',
    desc: 'We use advanced AI algorithms to analyze your skills, interests, and career goals. Based on this analysis, we generate a tailored career roadmap.',
  },
  {
    heading: 'Unlimited Resource',
    desc: 'CleverBooks offers comprehensive skill assessments that evaluate your strengths and identify areas for improvement.',
  },
  {
    heading: 'Interview & Job Preps',
    desc: 'Our AI-driven job matching service analyzes your profile, including your skills, experience, and career goals, to connect you with job opportunities that are a perfect fit.',
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
