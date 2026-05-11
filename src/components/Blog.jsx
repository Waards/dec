import { motion } from 'framer-motion'
import { useRef } from 'react'
import gsap from 'gsap'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    number: '01',
    title: 'Modern Web Design Trends',
    excerpt: 'Exploring the latest design patterns and techniques shaping the future of web interfaces.',
    date: 'Dec 15, 2024',
    category: 'Design',
    readTime: '5 min'
  },
  {
    id: 2,
    number: '02',
    title: 'Building Performant React Apps',
    excerpt: 'Best practices for optimizing React applications for speed and user experience.',
    date: 'Dec 10, 2024',
    category: 'Development',
    readTime: '8 min'
  },
  {
    id: 3,
    number: '03',
    title: 'Creative Animation Techniques',
    excerpt: 'How to implement smooth animations that enhance rather than distract.',
    date: 'Dec 5, 2024',
    category: 'Animation',
    readTime: '6 min'
  }
]

const Blog = () => {
  const sectionRef = useRef(null)

  return (
    <section id="blog" className="blog-section" ref={sectionRef}>
      <div className="blog-border-top"></div>
      <div className="blog-container">
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-label">OUR BLOG</div>
          <h2 className="blog-title">
            LATEST<br />ARTICLES
          </h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, x: -8 }}
            >
              <div className="card-number">{post.number}</div>
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{post.category}</span>
                  <span className="card-divider">|</span>
                  <span className="card-read-time">{post.readTime} READ</span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-footer">
                  <span className="card-date">{post.date}</span>
                  <button className="card-btn">READ MORE</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.5 }}
        >
          <div className="cta-line"></div>
          <button className="blog-view-all-btn">VIEW ALL ARTICLES</button>
          <div className="cta-line"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog