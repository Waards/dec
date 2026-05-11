import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-border-top"></div>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-label">GET IN TOUCH</div>
          <h2 className="contact-title">
            LET'S WORK<br />TOGETHER
          </h2>
          <div className="header-line"></div>
          <p className="contact-description">
            HAVE A PROJECT IN MIND? WE'D LOVE TO HEAR ABOUT IT. 
            SEND US A MESSAGE AND LET'S CREATE SOMETHING AMAZING.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <rect x="2" y="4" width="20" height="16" rx="0"/>
                  <polyline points="2 4 12 13 22 4"/>
                </svg>
              </div>
              <div className="contact-text">
                <span className="item-label">EMAIL</span>
                <span className="item-value">HELLO@DECSTUDIO.COM</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-text">
                <span className="item-label">LOCATION</span>
                <span className="item-value">SAN FRANCISCO, CA</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-text">
                <span className="item-label">PHONE</span>
                <span className="item-value">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="#" className="social-link">TWITTER</a>
            <a href="#" className="social-link">LINKEDIN</a>
            <a href="#" className="social-link">GITHUB</a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <h3>MESSAGE SENT!</h3>
              <p>WE'LL GET BACK TO YOU SOON.</p>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ENTER YOUR NAME"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ENTER YOUR EMAIL"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="TELL US ABOUT YOUR PROJECT..."
                  rows="6"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ y: -6, x: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact