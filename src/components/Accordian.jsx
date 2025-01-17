import { useState } from 'react'

const minusIcon = '-'
const plusIcon = '+'

function Accordion({ title, content, changeOpen, val }) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => {
    changeOpen(val)
    setExpanded((current) => !current)
  }

  return (
    <div
      className="my-1 cursor-pointer bg-white border-b-2"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1 font-bold text-lg">{title}</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  )
}

export default Accordion
