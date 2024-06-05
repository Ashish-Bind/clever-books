import { useState } from 'react'

const links = [
  { name: 'Product', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Industry', href: '/' },
  { name: 'Customer Stories', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-5 bg-black z-50">
      <div className="font-bold text-white text-2xl">CleverBooks</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-4 font-medium text-white cursor-pointer">
        {links.map((i) => (
          <li key={i.name} className="hover:gradient-text text-gray-200">
            <a href={i.href}>{i.name}</a>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex items-center justify-center gap-4 font-medium text-white cursor-pointer">
        <li>
          <button className="gradient-text">Login</button>
        </li>
        <li>
          <button className="px-5 py-2 gradient-bg rounded-full hover:text-black">
            Talk to us
          </button>
        </li>
      </ul>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center gap-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-6 font-medium text-white">
          {links.map((i) => (
            <li key={i.name}>
              <a href={i.href}>{i.name}</a>
            </li>
          ))}
          <li>
            <button className="gradient-text">Login</button>
          </li>
          <li>
            <button className="px-5 py-2 gradient-bg rounded-full hover:text-black">
              Talk to us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
