import { navItems } from '../data/navItems'
import { House, User, Code, Mail } from 'lucide-react'

const iconMap = {
  House,
  User,
  Code,
  Mail,
}

export default function Header({ active }) {
  const iconClass = `
    w-full h-full p-2
  `.trim()

  const tooltipClass = `
    absolute top-full left-1/2 -translate-x-1/2
    mb-2 px-2 py-1 text-xs rounded
    bg-gray-800 text-white
    dark:bg-gray-900 dark:text-gray-300
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    whitespace-nowrap z-10
  `.trim()

  const navbarClass = `
    fixed z-50 w-[90%] md:w-[60%] left-1/2 -translate-x-1/2
    bottom-5 md:top-5 md:bottom-auto
    px-5 py-3 bg-amber-100/40
    dark:bg-gray-900/40
    backdrop-blur-sm rounded-full shadow-xl
    flex items-center justify-center md:justify-between
  `.trim()

  return (
    <nav className={navbarClass}>
      <a href="#home" className="hidden md:block">
        <h1 className="size-12 md:size-16 rounded-full bg-white dark:bg-gray-100 shadow-lg flex justify-center items-center text-red-600 font-bold text-[1.2rem] md:text-[1.5rem]">
          K.
        </h1>
      </a>

      <ul className="flex gap-4 md:gap-10 items-center text-white justify-between">
        {navItems.map(({ id, label, icon }) => {
          const Icon = iconMap[icon]
          const isActive = active === id

          const wrapperClass = `
            w-[clamp(2.75rem,5vw,3.5rem)]
            h-[clamp(2.75rem,5vw,3.5rem)]
            rounded-full flex items-center justify-center
            ${isActive ? 'bg-gray-800/20 dark:bg-black/30' : 'bg-transparent'}
          `.trim()

          const iconColor = isActive ? 'text-black dark:text-white' : ''

          return (
            <li
              key={id}
              className="relative group transition duration-500 ease-in-out hover:scale-110"
            >
              <a href={`#${id}`} className={wrapperClass}>
                <Icon className={`${iconClass} ${iconColor}`} />
              </a>
              <div className={tooltipClass}>{label}</div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
