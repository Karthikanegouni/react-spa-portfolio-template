import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutData from '../data/aboutData'

// Import your SVG icons directly as components
import JavascriptIcon from '../assets/icons/javascript.svg'
import ReactIcon from '../assets/icons/react.svg'
import NodejsIcon from '../assets/icons/nodejs.svg'
import ExpressIcon from '../assets/icons/expressjs.svg'
import MongodbIcon from '../assets/icons/mongodb.svg'
import SqlIcon from '../assets/icons/sql.svg'
import HtmlIcon from '../assets/icons/html.svg'
import CssIcon from '../assets/icons/css.svg'
import LinuxIcon from '../assets/icons/linux.svg'

const { title, bio, education, experience, careerObjective } = aboutData

// Animation variants for the bento grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 }, // Added scale to create a "pop" effect
  visible: { y: 0, opacity: 1, scale: 1 }, // Added scale to create a "pop" effect
}

export default function About() {
  // Create a ref for the main container
  const ref = useRef(null)
  // Use useInView to detect when the container is in the viewport
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-10 py-10 sm:py-30 lg:py-20 font-josefin select-none overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-zinc-300 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <motion.h2
        variants={containerVariants}
        className="text-4xl font-bold text-center dark:text-white lg:mt-15"
      >
        Who Am I?
      </motion.h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="w-full max-w-[1246px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {/* Main Bio Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
        >
          <h2 className="text-3xl font-bold dark:text-white mb-4">{title}</h2>
          <p className="text-lg dark:text-zinc-300 leading-relaxed whitespace-pre-line">{bio}</p>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 flex flex-col justify-start"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold dark:text-white">Skills</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img src={ReactIcon} alt="React" className="w-16 h-16 mx-auto" />
            <img src={NodejsIcon} alt="Node.js" className="w-16 h-16 mx-auto" />
            <img src={ExpressIcon} alt="Express.js" className="w-16 h-16 mx-auto" />
            <img src={MongodbIcon} alt="MongoDB" className="w-16 h-16 mx-auto" />
            <img src={SqlIcon} alt="SQL" className="w-16 h-16 mx-auto" />
            <img src={LinuxIcon} alt="Linux" className="w-16 h-16 mx-auto" />
            <img src={HtmlIcon} alt="HTML" className="w-16 h-16 mx-auto" />
            <img src={CssIcon} alt="CSS" className="w-16 h-16 mx-auto" />
            <img src={JavascriptIcon} alt="JavaScript" className="w-16 h-16 mx-auto" />
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white md:col-span-2 lg:col-span-1 dark:bg-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 flex flex-col justify-start"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold dark:text-white">Education</h3>
          </div>
          <ul className="list-disc list-inside text-lg dark:text-zinc-300 leading-relaxed">
            {education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 flex flex-col justify-between"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold dark:text-white">Experience</h3>
          </div>
          <ul className="list-disc list-inside text-lg dark:text-zinc-300 leading-relaxed">
            {experience.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Career Objective Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white col-span-1 md:col-span-2 lg:col-span-3 dark:bg-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 flex flex-col justify-start"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold dark:text-white">Career Objective</h3>
          </div>
          <p className="text-lg dark:text-zinc-300 leading-relaxed whitespace-pre-line">
            {careerObjective}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
