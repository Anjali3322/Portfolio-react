const ProjectsCard = ({data}) => {

  return (
    <div className="project-card reveal reveal-delay-2 visible">

    <div className="project-top">
        <span className="project-folder">{data.icon}</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">{data.link1}</a>
          <a href="#" className="project-link" title="GitHub">{data.link2}</a>
        </div>
      </div>
      <div  className="project-name">{data.title}</div>

      <p className="project-desc">{data.desc}</p>

      <div className="project-tags">
        {data.tech.map((t , i)=>(
          <span className="tag" key={i}>{t}</span>
        ))}
      </div>

    </div>
  )

}

export default ProjectsCard