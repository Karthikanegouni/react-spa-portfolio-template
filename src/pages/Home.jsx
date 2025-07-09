import { motion } from 'framer-motion'
import userData from '../data/userData'
import TypingAnimation from '../components/TypingAnimation'

const {
  name,
  location,
  description,
  intro,
  shortNote,
  skills,
  images: { user, laptop },
  resumeLink,
} = userData

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:justify-center px-10 py-10 select-none overflow-hidden font-josefin"
    >
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-zinc-300 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <main className="w-full max-w-[1246px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <section
          className="dark:text-white text-center md:text-left flex flex-col  justify-center order-0 lg:order-0"
          aria-label="Introduction"
        >
          <header className="max-w-[100%] mx-auto md:mx-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 intro">
              {intro}
              <motion.span
                className="inline-block [transform-origin:70%_70%]"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                👋
              </motion.span>
            </h1>
            <p className="md:text-lg text-md lg:text-3xl  mb-2 lg:mt-10">{description}</p>
            <p className="text-sm lg:text-2xl light  mt-6">{shortNote}</p>
          </header>
        </section>

        <motion.figure
          animate={{ y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8, ease: 'easeOut' },
            x: { duration: 0.8, ease: 'easeOut' },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="relative w-full max-w-[800px] mx-auto z-10"
        >
          <img
            src={laptop}
            alt="Laptop with developer overlay"
            className="w-full h-auto object-contain"
          />

          <figcaption
            className="absolute"
            style={{
              top: '5%',
              left: '10%',
              width: '80%',
              height: '85%',
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-blue-900 dark:to-zinc-800 text-black dark:text-white bg-opacity-90 rounded p-4 flex flex-col justify-center items-center">
              <img src={user} alt="user-logo" className="w-[20%] rounded-full md:mb-2" />
              <h2 className="text-sm md:text-lg lg:text-2xl font-bold md:mb-1">{name}</h2>
              <TypingAnimation />
              <div className=" hidden md:block text-[10px] md:text-xs font-semibold bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black px-3 py-1 rounded-full mb-1">
                Quality in every keystroke.
              </div>
              <p className="hidden lg:block text-xs text-zinc-500 font-bold dark:text-zinc-300 mt-1">
                {skills.join(' • ')}
              </p>
              <p className="text-xs md:text-xs lg:text-[1rem] mt-1 lg:mt-3">{location}</p>
            </div>
          </figcaption>
        </motion.figure>
      </main>
      <div className="flex flex-row md:flex-row justify-center items-center gap-3 md:gap-6 lg:mt-16 mt-6 ">
        <a href="#projects">
          <button className="custom-btn">View Projects</button>
        </a>
        <a href={resumeLink} target="_blank">
          <button className="custom-btn">Download Resume</button>
        </a>
      </div>
    </section>
  )
}
