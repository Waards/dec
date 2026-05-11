import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern shopping experience with seamless checkout and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    number: '02',
    title: 'Portfolio Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    tags: ['Figma', 'React', 'D3.js']
  },
  {
    id: 3,
    number: '03',
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and intuitive mobile banking with biometric authentication.',
    tags: ['React Native', 'Firebase']
  },
  {
    id: 4,
    number: '04',
    title: 'Social Media Platform',
    category: 'Full Stack',
    description: 'Community-driven platform with real-time messaging and content sharing.',
    tags: ['Next.js', 'GraphQL', 'AWS']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-border-top"></div>
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-label">OUR WORK</div>
          <h2 className="projects-title">
            FEATURED<br />PROJECTS
          </h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, x: -8, zIndex: 10 }}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-grid">
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                  </div>
                  <span className="project-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="project-overlay">
                  <button className="view-btn">VIEW PROJECT</button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.5 }}
        >
          <div className="cta-line"></div>
          <button className="view-all-btn">VIEW ALL PROJECTS</button>
          <div className="cta-line"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects