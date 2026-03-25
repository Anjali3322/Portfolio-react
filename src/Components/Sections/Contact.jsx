import React, { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    setFormData({...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setLoading(true)
    setSuccess(false)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }, 1500)
  }

  return (
    <section id="contact">
      <span className="section-label">Get in touch</span>
      <h2 className="section-title">Contact</h2>

      <div className="contact-wrapper">

        <div className="contact-info">
          <h3>Let's work together 🚀</h3>
          <p>I'm currently open to internship and full-time opportunities.
            Feel free to reach out — I'd love to connect!</p>

          <div className="contact-links">
            <div className="contact-link">
              <div className="contact-link-icon">📧</div>
              <div className="pages-link">
                <strong>Email</strong>  <a href="sethanjali332@gmail.com" target="blank">sethanjali332@gmail.com</a>
              </div>
            </div>

            <div className="contact-link">
               <div className="contact-link-icon">💼</div>
              <div className="pages-link">
                <strong>LinkedIn</strong>  <a href="https://www.linkedin.com/in/anjali-664a2a219" target="blank">https://www.linkedin.com/in/anjali-664a2a219</a>
              </div>
            </div>

            <div className="contact-link">
              <div className="contact-link-icon">🐙</div>
              <div className="pages-link">
                <strong>GitHub</strong>  <a href="https://github.com/Anjali3322" target="blank">https://github.com/Anjali3322</a>
              </div>
            </div>
          </div>
        </div>

{/* <h1 class="titllle">
  Recruitment just got a 
  <span class="waveee">Glow-Up</span>
</h1> */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label >NAME</label>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label >EMAIL</label>
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label >SUBJECT</label>
            <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea name="message" placeholder="Message" required rows="5" value={formData.message} onChange={handleChange} />
          </div>

          <div className="form-submit-row">
            <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? "Sending..." : "Send Message"}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d=""></path></svg>
          </button>
          </div>

          {success && (
            <div className="form-success">
              ✅ Message Sent Successfully! I will get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact