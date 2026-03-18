const ProjectsCard = ({data}) => {

  return (
    <div className="project-card reveal reveal-delay-2 visible">

    <div class="project-top">
        <span class="project-folder">{data.icon}</span>
        <div class="project-links">
          <a href="#" class="project-link" title="Live Demo">{data.link1}</a>
          <a href="#" class="project-link" title="GitHub">{data.link2}</a>
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