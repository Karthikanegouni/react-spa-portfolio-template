import { navItems } from '../data/navItems'
import { House, User, Code, Mail } from 'lucide-react'
import user from '../assets/user.jpeg'

const iconMap = {
  House,
  User,
  Code,
  Mail,
}

export default function Header({ active }) {
  return (
    <nav className="nav-bar">
      <a href="#home" className="hidden md:block flex justify-center items-center md:mr-4">
        <img src={user} alt="user-logo" className="logo" />
      </a>

      <ul className="flex flex-wrap gap-4 md:gap-10 items-center justify-center md:justify-between w-full md:w-auto">
        {navItems.map(({ id, label, icon }) => {
          const Icon = iconMap[icon]
          const isActive = active === id

          const wrapperClass = `
        w-[clamp(2.75rem,5vw,3.5rem)]
        h-[clamp(2.75rem,5vw,3.5rem)]
        rounded-full flex items-center justify-center
        ${isActive ? 'bg-white/50 dark:bg-black/30 ring-4 ring-black/30 dark:ring-white/30' : 'hover:bg-white/10'}
      `.trim()

          const iconColor = isActive && 'text-black dark:text-white'

          return (
            <li
              key={id}
              className="relative group transition duration-500 ease-in-out hover:scale-110"
            >
              <a href={`#${id}`} className={wrapperClass}>
                <Icon className={`w-full h-full p-2 ${iconColor}`} />
              </a>
              <div className="tooltip">{label}</div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
