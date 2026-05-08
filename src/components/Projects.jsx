import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern shopping experience with seamless checkout and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Portfolio Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    tags: ['Figma', 'React', 'D3.js']
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and intuitive mobile banking with biometric authentication.',
    tags: ['React Native', 'Firebase']
  },
  {
    id: 4,
    title: 'Social Media Platform',
    category: 'Full Stack',
    description: 'Community-driven platform with real-time messaging and content sharing.',
    tags: ['Next.js', 'GraphQL', 'AWS']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-tag">Our Work</span>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">Showcasing our best work and creative solutions</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </span>
                </div>
                <div className="project-overlay">
                  <button className="view-btn">View Project</button>
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
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="view-all-btn">View All Projects</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects