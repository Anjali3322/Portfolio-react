const Projects = () => {
  return (
    <section id="projects">
  <div className="reveal visible"><span className="section-label">Things I've built</span></div>
  <div className="reveal reveal-delay-1 visible"><h2 className="section-title">Projects</h2><div className="section-line"></div></div>
  <div className="projects-grid">

    <div className="project-card reveal reveal-delay-1 visible">
      <div className="project-top">
        <span className="project-folder">📊</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">↗</a>
          <a href="#" className="project-link" title="GitHub">⌥</a>
        </div>
      </div>
      <div className="project-name">Solar Energy Website</div>
      <p className="project-desc">A modern landing page for a solar energy company with animated stats, hero section, and lead capture form. Fully responsive across all devices.</p>
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">CSS3</span>
        <span className="tag">JavaScript</span>
      </div>
    </div>

    <div className="project-card reveal reveal-delay-2 visible">
      <div className="project-top">
        <span className="project-folder">📊</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">↗</a>
          <a href="#" className="project-link" title="GitHub">⌥</a>
        </div>
      </div>
      <div className="project-name">Manetor CRM Dashboard</div>
      <p className="project-desc">A full-featured CRM dashboard with customer analytics, tracking, and interactive charts. Clean data visualization for sales teams.</p>
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">REST API</span>
        <span className="tag">Chart.js</span>
      </div>
    </div>

    <div className="project-card reveal reveal-delay-3 visible">
      <div className="project-top">
        <span className="project-folder">🛒</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">↗</a>
          <a href="#" className="project-link" title="GitHub">⌥</a>
        </div>
      </div>
      <div className="project-name">E-Commerce UI</div>
      <p className="project-desc">A clean product listing and cart interface with filters, wishlist, and checkout flow. Built with React state management and custom hooks.</p>
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">Context API</span>
        <span className="tag">CSS Modules</span>
      </div>
    </div>

    <div className="project-card reveal reveal-delay-4 visible">
      <div className="project-top">
        <span className="project-folder">📊</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">↗</a>
          <a href="#" className="project-link" title="GitHub">⌥</a>
        </div>
      </div>
      <div className="project-name">Portfolio</div>
      <p className="project-desc"></p>
      <div className="project-tags">
        <span className="tag">JavaScript</span>
        <span className="tag">API</span>
        <span className="tag">HTML/CSS</span>
      </div>
    </div>

  </div>
</section>
  )
}

export default Projects
