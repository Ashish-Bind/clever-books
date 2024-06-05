import { useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icons'

const testimonials = [
  {
    name: 'Diksha Pandey',
    position: 'Cofounder, Samosa Party',
    desc: 'D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and thats the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.',
  },
  {
    name: 'Kriti Goel',
    position: 'Cofounder, P-TAL',
    desc: 'As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.',
  },
]

const Card = ({ desc, position, name, val }) => {
  return (
    <div className="flex gap-2 flex-col">
      <div>
        <p className="text-gray-700">{desc}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={`/u-${val}.jpg`}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h1 className="font-bold">{name}</h1>
            <p>{position}</p>
          </div>
        </div>
        <img
          src={`/logo-${val}.jpg`}
          alt=""
          className="w-14 h-14 rounded-full"
        />
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState(testimonials[0])
  const [open, setOpen] = useState(0)

  const increment = () => {
    if (open < testimonials.length - 1) {
      setOpen(open + 1)
      setTestimonial(testimonials[open + 1])
    }
  }

  const decrement = () => {
    if (open > 0) {
      setOpen(open - 1)
      setTestimonial(testimonials[open - 1])
    }
  }

  return (
    <section className="w-full flex justify-center items-center flex-col my-8 md:my-24">
      <div className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-14">
        Hear out from some of the customers
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 mx-auto w-full md:w-3/4 gap-4">
        <section className="max-w-6xl mx-auto">
          <Card
            desc={testimonial.desc}
            name={testimonial.name}
            position={testimonial.position}
            val={open + 1}
          />
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={decrement}
              className="p-3 md:p-4 border rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={increment}
              className="p-3 md:p-4 border rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </section>
        <img
          src={`./test-${open + 1}.jpg`}
          alt="Testimonial"
          className="w-full md:h-auto border rounded-xl"
        />
      </div>
    </section>
  )
}

export default Testimonials
