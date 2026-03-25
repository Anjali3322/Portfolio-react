import React from 'react'
import SkillsCard from '../UI/SkillsCard'

const Skills = () => {

  const skillsData1 = [
    { icon : "🌐",
      name: "HTML5" },
    { icon : "🎨",
      name: "CSS" },
    { icon : "💛",
      name: "JavaScript" },
    { icon : "⚛️",
      name: "React" }
  ]

    const skillsData2 = [
    { icon : "🔧",
      name: "Git & GitHub" },
    { icon : "💻",
      name: "vscode" },
    { icon : "🔌", 
      name: "API Integration" },
    { icon : "📱",
      name: "Responsive Design" }
  ]
  return (
    <section id="skills">
      <div className="reveal visible">
        <span className="section-label">What I work with</span>
      </div>
      <div className="reveal reveal-delay-1 visible">
        <h2 className="section-title">Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="skills-group reveal reveal-delay-2 visible">
          <h3>⚡ Frontend</h3>
          <div className="skills-grid">

            {skillsData1.map((skills , index)=>(
          <SkillsCard key={index} data={skills}/>
        ))}
            
          </div>
        </div>
        <div className="skills-group reveal reveal-delay-3 visible">
          <h3>🛠 Tools &amp; Other</h3>
          <div className="skills-grid">
            {skillsData2.map((skills , index)=>(
          <SkillsCard key={index} data={skills}/>
        ))}
            
          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills
