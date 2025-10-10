import { motion } from 'framer-motion'
import Project from '../components/Project' // The corrected import path
import { projects } from '../data/projectsData' // Import the project data from the data folder

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5 sm:py-20 px-4 sm:px-10  font-josefin relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-zinc-300 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto mt-10"
      >
        <motion.h2
          variants={containerVariants}
          className="text-4xl font-bold text-center dark:text-white mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
