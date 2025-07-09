import React, { useState, useEffect } from 'react'
import userDate from '../data/userData'

const TypingAnimation = () => {
  const { animationList } = userDate
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = animationList[textIndex]
    let typingSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1))
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000) // pause before deleting
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1))
        if (displayedText === '') {
          setIsDeleting(false)
          setTextIndex(prev => (prev + 1) % animationList.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex, animationList])

  return (
    <div className="text-xs md:text-md md:mb-1 italic lg:text-lg font-semibold">
      <span>{displayedText}</span>
      <span className="animate-blink">|</span>
    </div>
  )
}

export default TypingAnimation
