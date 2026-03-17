import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
  <div className="reveal visible"><span className="section-label">What I work with</span></div>
  <div className="reveal reveal-delay-1 visible"><h2 className="section-title">Skills</h2><div className="section-line"></div></div>
  <div className="flex flex-col gap-10">
    <div className="skills-group reveal reveal-delay-2 visible">
      <h3>⚡ Frontend</h3>
      <div className="skills-grid">
        <div className="skill-card"><span className="skill-icon">🌐</span><span className="skill-name">HTML5</span></div>
        <div className="skill-card"><span className="skill-icon">🎨</span><span className="skill-name">CSS3</span></div>
        <div className="skill-card"><span className="skill-icon">💛</span><span className="skill-name">JavaScript</span></div>
        <div className="skill-card"><span className="skill-icon">⚛️</span><span className="skill-name">React</span></div>
      </div>
    </div>
    <div className="skills-group reveal reveal-delay-3 visible">
      <h3>🛠 Tools &amp; Other</h3>
      <div className="skills-grid">
        <div className="skill-card"><span className="skill-icon">🔧</span><span className="skill-name">Git &amp; GitHub</span></div>
        <div className="skill-card"><span className="skill-icon">💻</span><span className="skill-name">VS Code</span></div>
        <div className="skill-card"><span className="skill-icon">🔌</span><span className="skill-name">API Integration</span></div>
        <div className="skill-card"><span className="skill-icon">📱</span><span className="skill-name">Responsive Design</span></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Skills
