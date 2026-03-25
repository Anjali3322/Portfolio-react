import React from 'react'

const SkillsCard = ({data}) => {
  return (
    
        <div className="skill-card">
            <span className="skill-icon">{data.icon}</span>
            <span className="skill-name">{data.name}</span>
        </div>
    
  )
}

export default SkillsCard
