import { useState } from 'react'
import Accordion from './Accordian'

const lorem = [
  'Our comprehensive skill assessment tools help you identify your strengths and areas for improvement. Based on your results, we provide personalized recommendations for skill development. Access a wide range of resources, including online courses, workshops, and expert advice to enhance your abilities and stay competitive in the job market.',
  "Gain valuable insights and advice from seasoned industry professionals. Our network of experts is here to help you navigate your career path with confidence. From resume building and interview preparation to career advancement strategies, you'll receive the guidance you need to achieve your goals.",
  "Our AI-powered job matching service connects you with opportunities that align with your skills, experience, and career aspirations. We work with top employers to provide you with exclusive access to job openings. Our placement services ensure you're not just applying, but landing the right job for your career growth.",
  'CleverBooks offers a wealth of resources and tools to support your career journey. From career planning guides and industry reports to networking events and webinars, we provide everything you need to stay informed and ahead of the curve.',
]

const Target = () => {
  const [open, setOpen] = useState(1)

  const changeOpen = (val) => {
    setOpen(val)
  }

  return (
    <section className="w-full flex justify-center items-center flex-col my-24 px-4">
      <div className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-14 text-center">
        Ever seen a book that can make your career
      </div>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="gradient-bg rounded-xl p-4 flex-grow mb-4 md:mb-0">
            <img
              src={`./target-${open}.webp`}
              alt="Target"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <section className="text-center">
            <Accordion
              title="Detailed skill assessment"
              content={lorem[0]}
              val={1}
              changeOpen={changeOpen}
            />
            <Accordion
              title="Goal setting and tracking"
              content={lorem[1]}
              val={2}
              changeOpen={changeOpen}
            />
            <Accordion
              title="Step-by-step action plans"
              content={lorem[2]}
              val={3}
              changeOpen={changeOpen}
            />
            <Accordion
              title="Regular progress reviews"
              content={lorem[3]}
              val={4}
              changeOpen={changeOpen}
            />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Target
