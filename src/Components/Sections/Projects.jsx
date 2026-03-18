
import ProjectsCard from "../UI/ProjectsCard"

const Projects = () => {

  const projectsData = [
    {
      icon : "📊",
      link1: "↗",
      link2: "⌥",
      title: "Solar Energy Website",
      desc: "A modern landing page for a solar energy company with animated stats, hero section, and lead capture form. Fully responsive across all devices.",
      tech: ["React","CSS","JS"]
    },
    {
      icon : "📊",
      link1: "↗",
      link2: "⌥",
      title: "Manetor CRM Dashboard",
      desc: "A full-featured CRM dashboard with customer analytics, tracking, and interactive charts. Clean data visualization for sales teams.",
      tech: ["React","API","Charts"]
    },
    {
      icon : "🛒",
      link1: "↗",
      link2: "⌥",
      title: "E-Commerce UI",
      desc: "A clean product listing and cart interface with filters, wishlist, and checkout flow. Built with React state management and custom hooks.",
      tech: ["React","Context","CSS"]
    },
    {
      icon : "📊",
      link1: "↗",
      link2: "⌥",
      title: "Portfolio",
      desc: "I built my personal portfolio using React.js where I focused on component-based architecture and dynamic rendering of project data using map(). I also implemented reusable UI components and loading states to improve scalability and user experience.",
      tech: ["React","Context","CSS"]
    },
  ]

  return (
    <section id="projects">

      <div className="project-card reveal reveal-delay-2 visible">
        <span className="section-label">Things I've built</span>
      </div>

      <div className="reveal reveal-delay-1 visible">
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">

        {projectsData.map((project , index)=>(
          <ProjectsCard key={index} data={project}/>
        ))}

      </div>

    </section>
  )
}

export default Projects
