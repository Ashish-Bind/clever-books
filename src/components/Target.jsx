import { useState } from 'react'
import Accordion from './Accordian'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'

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
              title="Accurate Demand Forecasting"
              content={lorem}
              val={1}
              changeOpen={changeOpen}
            />
            <Accordion
              title="HELIX: Workflow Automation"
              content={lorem}
              val={2}
              changeOpen={changeOpen}
            />
            <Accordion
              title="Automated Purchase Planning"
              content={lorem}
              val={3}
              changeOpen={changeOpen}
            />
            <Accordion
              title="Automated Distribution Planning"
              content={lorem}
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
