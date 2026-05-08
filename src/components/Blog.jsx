import { motion } from 'framer-motion'
import { useRef } from 'react'
import gsap from 'gsap'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'Modern Web Design Trends',
    excerpt: 'Exploring the latest design patterns and techniques shaping the future of web interfaces.',
    date: 'Dec 15, 2024',
    category: 'Design',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Performant React Apps',
    excerpt: 'Best practices for optimizing React applications for speed and user experience.',
    date: 'Dec 10, 2024',
    category: 'Development',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Creative Animation Techniques',
    excerpt: 'How to implement smooth animations that enhance rather than distract.',
    date: 'Dec 5, 2024',
    category: 'Animation',
    readTime: '6 min read'
  }
]

const Blog = () => {
  const sectionRef = useRef(null)

  return (
    <section id="blog" className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-tag">Our Blog</span>
          <h2 className="blog-title">Latest Articles</h2>
          <p className="blog-subtitle">Insights, tutorials, and thoughts on design and development</p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{post.category}</span>
                  <span className="card-dot"></span>
                  <span className="card-read-time">{post.readTime}</span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-footer">
                  <span className="card-date">{post.date}</span>
                  <button className="card-btn">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="view-all-btn">View All Articles</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog