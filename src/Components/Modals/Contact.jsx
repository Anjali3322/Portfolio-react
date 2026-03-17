const Contact = () => {
  return (
    <section id="contact">
  <div className="reveal visible"><span className="section-label">Get in touch</span></div>
  <div className="reveal reveal-delay-1 visible"><h2 className="section-title">Contact</h2><div className="section-line"></div></div>
  <div className="contact-wrapper">
    <div className="contact-info reveal reveal-delay-2 visible">
      <h3>Let's work together 🚀</h3>
      <p>I'm currently open to internship and full-time opportunities. Feel free to reach out — I'd love to connect!</p>
      <div className="contact-links">
        <a href="mailto:anjali@example.com" className="contact-link">
          <div className="contact-link-icon">📧</div>
          <div>
            <div style={{ fontWeight: 600, color: "var(--text)" }}>Email</div>
            <div style={{ fontSize: "0.85rem" }}>sethanjali332@gmail.com</div>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          <div className="contact-link-icon">💼</div>
          <div>
            <div style={{ fontWeight:600,color:"var(--text)" }}>LinkedIn</div>
            <div style={{ fontSize: "0.85rem" }}>https://www.linkedin.com/in/anjali-664a2a219/  </div>
          </div>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          <div className="contact-link-icon">🐙</div>
          <div>
            <div style={{ fontWeight:600,color:"var(--text)" }}>GitHub</div>
            <div style={{ fontSize: "0.85rem" }}>https://github.com/Anjali3322 </div>
          </div>
        </a>
      </div>
    </div>
    <div className="reveal reveal-delay-3 visible">
      <form className="contact-form" id="contactForm" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label>NAME</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="form-group">
          <label>SUBJECT</label>
          <input type="text" placeholder="What's this about?" required />
        </div>
        <div className="form-group">
          <label>MESSAGE</label>
          <textarea placeholder="Tell me about your project or opportunity..." required></textarea>
        </div>
        <div className="form-submit-row">
          <button type="submit" className="btn btn-primary">
            Send Message 
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
          </button>
        </div>
        <div id="form-status">✅ Message sent! I'll get back to you soon.</div>
      </form>
    </div>
  </div>
</section>
  )
}

export default Contact
