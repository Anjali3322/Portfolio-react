import React from 'react'

const Experience = () => {
  return (
    <section id="experience">
  <div className="reveal visible"><span className="section-label">Where I've worked</span></div>
  <div className="reveal reveal-delay-1 visible"><h2 className="section-title">Experience</h2><div className="section-line"></div></div>
  <div className="timeline">
    <div className="timeline-item reveal reveal-delay-2 visible">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <div className="timeline-role">MERN Stack Intern</div>
        <div className="timeline-company">Cut Edge Technology</div>
        <div className="timeline-date">📅 Sep 2025 – Present · Full-time</div>
        <ul className="timeline-desc">
          <li>Built and maintained responsive UI components using React.js</li>
          <li>Integrated RESTful APIs for dynamic data rendering across modules</li>
          <li>Collaborated with backend team on MERN stack features</li>
          <li>Improved page load performance by 30% through code optimization</li>
        </ul>
      </div>
    </div>
    <div className="timeline-item reveal reveal-delay-3 visible">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <div className="timeline-role">Frontend Developer (Freelance)</div>
        <div className="timeline-company">Self-Employed</div>
        <div className="timeline-date">📅 Jan 2025 – Aug 2025</div>
        <ul className="timeline-desc">
          <li>Designed and developed websites for small businesses and startups</li>
          <li>Created pixel-perfect layouts from Figma designs to React components</li>
          <li>Delivered 5+ projects with 100% client satisfaction</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Experience
