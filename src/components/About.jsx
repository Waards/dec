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
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="swiss-tag">About Us</div>
          <h2 className="swiss-title">
            We Create<br />
            <span className="swiss-accent">Digital</span><br />
            Experiences
          </h2>
          
          <div className="swiss-grid">
            <div className="swiss-line"></div>
            <div className="swiss-content">
              <p className="swiss-description">
                We're a passionate team dedicated to crafting exceptional digital products. 
                With years of experience in web development and design, we transform ideas 
                into seamless, interactive experiences.
              </p>
              <p className="swiss-description">
                Our approach combines creativity with technical excellence, ensuring every 
                project delivers both beauty and functionality.
              </p>
            </div>
          </div>

          <div className="swiss-stats">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="swiss-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="swiss-stat-number">{stat.number}</span>
                <span className="swiss-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <a href="/about" className="swiss-button">
            Learn More
            <span className="button-arrow">→</span>
          </a>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="swiss-skills-card">
            <div className="swiss-header">
              <h3 className="swiss-skills-title">Our Expertise</h3>
              <div className="swiss-header-line"></div>
            </div>
            <div className="swiss-skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="swiss-skill-item">
                  <div className="swiss-skill-header">
                    <span className="swiss-skill-name">{skill.name}</span>
                    <span className="swiss-skill-percent">{skill.level}%</span>
                  </div>
                  <div className="swiss-skill-bar">
                    <motion.div 
                      className="swiss-skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ amount: 0.3 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="swiss-decoration">
            <div className="swiss-square"></div>
            <div className="swiss-accent-bar"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About