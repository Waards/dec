import { useEffect, useRef } from 'react'
import { motion, useSpring, useScroll, useTransform, motionValue } from 'framer-motion'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const decorationsRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scrollCircleY = useTransform(scrollYProgress, [0, 1], [0, -250])
  const scrollCircleX = useTransform(scrollYProgress, [0, 1], [0, 150])
  const scrollSquareY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scrollSquareX = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scrollTriangleY = useTransform(scrollYProgress, [0, 1], [0, -350])
  const scrollLineScale = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scrollLineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const mouseCircleX = useSpring(0, { stiffness: 200, damping: 20 })
  const mouseCircleY = useSpring(0, { stiffness: 200, damping: 20 })
  const mouseSquareX = useSpring(0, { stiffness: 250, damping: 25 })
  const mouseSquareY = useSpring(0, { stiffness: 250, damping: 25 })
  const mouseTriangleX = useSpring(0, { stiffness: 220, damping: 22 })
  const mouseTriangleY = useSpring(0, { stiffness: 220, damping: 22 })

  const combinedCircleX = useTransform([scrollCircleX, mouseCircleX], (values) => 
    values[0] + values[1]
  )
  const combinedCircleY = useTransform([scrollCircleY, mouseCircleY], (values) => 
    values[0] + values[1]
  )
  const combinedSquareX = useTransform([scrollSquareX, mouseSquareX], (values) => 
    values[0] + values[1]
  )
  const combinedSquareY = useTransform([scrollSquareY, mouseSquareY], (values) => 
    values[0] + values[1]
  )
  const combinedTriangleX = useTransform([scrollTriangleY, mouseTriangleX], (values) => 
    values[0] + values[1]
  )
  const combinedTriangleY = useTransform([scrollLineScale, mouseTriangleY], (values) => 
    values[0] + values[1]
  )

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = decorationsRef.current?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / 50
        const deltaY = (e.clientY - centerY) / 50
        
        mouseCircleX.set(-deltaX * 3)
        mouseCircleY.set(-deltaY * 3)
        mouseSquareX.set(deltaX * 2)
        mouseSquareY.set(deltaY * 2.5)
        mouseTriangleX.set(deltaX * 1.5)
        mouseTriangleY.set(deltaY * 2)
      }
    }

    const decorations = decorationsRef.current
    if (decorations) {
      decorations.addEventListener('mouseleave', () => {
        mouseCircleX.set(0)
        mouseCircleY.set(0)
        mouseSquareX.set(0)
        mouseSquareY.set(0)
        mouseTriangleX.set(0)
        mouseTriangleY.set(0)
      })
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseCircleX, mouseCircleY, mouseSquareX, mouseSquareY, mouseTriangleX, mouseTriangleY])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={containerRef}>
      <div className="hero-border"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bauhaus-tag"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="tag-bar"></div>
          <span>Digital Agency</span>
        </motion.div>

        <h1 ref={textRef} className="hero-title">
          <motion.span 
            className="hero-line"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Create
          </motion.span>
          <motion.span 
            className="hero-line hero-accent"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Build
          </motion.span>
          <motion.span 
            className="hero-line"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Innovate
          </motion.span>
        </h1>

        <div className="hero-divider">
          <div className="hero-divider-line"></div>
          <span className="hero-divider-text">Scroll to explore</span>
        </div>

        <p className="hero-description">
          We craft functional digital experiences through the marriage of form and function. Bauhaus principles guide our design philosophy.
        </p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button 
            className="bauhaus-btn bauhaus-btn-primary"
            whileHover={{ y: -6, x: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
          <motion.button 
            className="bauhaus-btn bauhaus-btn-secondary"
            whileHover={{ y: -6, x: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="hero-visual-wrapper">
        <div className="hero-visual">
          <div className="visual-grid">
            <div className="visual-red"></div>
            <div className="visual-yellow"></div>
            <div className="visual-blue"></div>
            <div className="visual-shapes">
              <motion.div 
                className="shape-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="shape-rect"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-decorations" ref={decorationsRef}>
        <motion.div 
          className="bauhaus-circle bauhaus-red"
          style={{ 
            x: combinedCircleX, 
            y: combinedCircleY 
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        />
        <motion.div 
          className="bauhaus-square bauhaus-yellow"
          style={{ 
            x: combinedSquareX, 
            y: combinedSquareY 
          }}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.div 
          className="bauhaus-triangle bauhaus-blue"
          style={{ 
            x: mouseTriangleX, 
            y: scrollTriangleY 
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.div 
          className="bauhaus-line bauhaus-black"
          style={{ 
            scaleX: scrollLineScale,
            opacity: scrollLineOpacity
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>
    </section>
  )
}

export default Hero