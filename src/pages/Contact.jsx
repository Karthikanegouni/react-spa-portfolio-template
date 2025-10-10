import { motion, useAnimation } from 'framer-motion'
import { MailCheck } from 'lucide-react'
import { useRef, useState } from 'react'

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const controls = useAnimation()

  // This function handles form submission
  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    const accessKey = '8212fd6f-ff58-45be-a664-ef9200bc4754'

    if (!accessKey) {
      setStatusMessage('Error: Access key not found. Please add your key to the code.')
      setIsSubmitting(false)
      return
    }

    const form = e.target
    const formUrl = 'https://api.web3forms.com/submit'

    const formData = new FormData(form)
    formData.append('access_key', accessKey)

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setStatusMessage("Message received! I'll be in touch shortly.")
        form.reset()
        await controls.start({ opacity: 1, y: 0 })
      } else {
        // Handle specific API errors
        console.error('Form submission failed:', result.message || response.statusText)
        setStatusMessage(
          result.message || 'Oops! There was a problem submitting your form. Please try again.'
        )
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatusMessage(
        'Oops! There was a network error. Please check your connection and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-10 py-5 sm:py-20 font-josefin select-none overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-zinc-300 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <motion.h2
        variants={containerVariants}
        className="text-4xl font-bold text-center dark:text-white mb-10 mt-10"
      >
        Contact Me
      </motion.h2>

      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full max-w-2xl bg-white dark:bg-zinc-800 rounded-2xl p-8 sm:p-12 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold dark:text-white mb-4 text-center"
        >
          Get in Touch
        </motion.h2>

        {!submitted && (
          <motion.p
            variants={itemVariants}
            className="text-lg dark:text-zinc-300 leading-relaxed mb-6 text-center"
          >
            Have a question or want to work together? Fill out the form below.
          </motion.p>
        )}

        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center text-xl font-bold mb-6 p-4 rounded-md  flex flex-col justify-center items-center ${
              submitted
                ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900'
                : 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900'
            }`}
          >
            <MailCheck size={70} className="" />
            {statusMessage}
          </motion.div>
        )}

        {submitted ? (
          // Renders only the status message after successful submission
          <motion.div
            variants={itemVariants}
            className="text-center text-xl font-bold mb-6 p-4 rounded-md text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900"
          >
            {statusMessage}
          </motion.div>
        ) : (
          // Renders the form if not yet submitted
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-zinc-700 dark:text-zinc-300 mb-2 font-semibold">
                Name
              </label>
              <motion.input
                variants={itemVariants}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your good name"
                required
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-zinc-700 dark:text-zinc-300 mb-2 font-semibold"
              >
                Email
              </label>
              <motion.input
                variants={itemVariants}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your mail id"
                required
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-zinc-700 dark:text-zinc-300 mb-2 font-semibold"
              >
                Message
              </label>
              <motion.textarea
                variants={itemVariants}
                id="message"
                name="message"
                placeholder="Write your message here"
                required
                rows="6"
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              ></motion.textarea>
            </div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  )
}
