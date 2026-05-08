import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '100%', label: 'Satisfaction' }
]

const skills = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Animation', level: 88 }
]

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">About Us</span>
          <h2 className="about-title">
            We Create Digital
            <span className="highlight"> Experiences</span>
          </h2>
          <p className="about-description">
            We're a passionate team dedicated to crafting exceptional digital products. 
            With years of experience in web development and design, we transform ideas 
            into seamless, interactive experiences that captivate users.
          </p>
          <p className="about-description">
            Our approach combines creativity with technical excellence, ensuring every 
            project we undertake delivers both beauty and functionality.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="skills-card">
            <h3 className="skills-title">Our Expertise</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-decoration">
            <div className="deco-circle deco-1"></div>
            <div className="deco-circle deco-2"></div>
            <div className="deco-circle deco-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About