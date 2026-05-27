
import { FiExternalLink } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"

const ProjectsCard = ({data}) => {

  return (
    <div className="project-card reveal reveal-delay-2 visible">

    <div className="project-top">
        <span className="project-folder">{data.icon}</span>
        <div className="project-links">
          <a href="#" className="project-link" title="Live Demo">{<FiExternalLink/>}</a>
          <a href="#" className="project-link" title="GitHub">{<FiGithub/>}</a>
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