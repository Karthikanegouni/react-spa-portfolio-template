import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

// Animation variants for a single project card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

const Project = ({ title, description, image, projectUrl, githubUrl }) => {
  return (
    <motion.div
      className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.01]"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="bg-zinc-200 dark:bg-zinc-700 h-7 flex items-center px-2 border-b border-zinc-300 dark:border-zinc-600 rounded-t-2xl">
        <div className="flex gap-1.5 items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-sm lg:ml-[10ch] font-semibold text-zinc-600 dark:text-zinc-400 ml-[8ch]">
            {title}
          </span>
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-800">
        <img
          src={image}
          alt={`${title} project thumbnail`}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          {/* Live Project Button */}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
            >
              View Project
            </a>
          )}

          {/* GitHub Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500 text-zinc-900 dark:text-zinc-200 font-semibold rounded-md transition-colors duration-300"
          >
            <Github />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
