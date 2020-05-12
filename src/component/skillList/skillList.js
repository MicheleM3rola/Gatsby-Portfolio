import React from "react"
import "./skillList.scss"
import Skill from "../skills/skill"
import Skills from "../../constants/skills"

const SkillList = ({ showSkill }) => {
  return (
    <div className="wrapperList">
      <ul className="container-skills">
        {Skills.map(({ name, width, index }) => (
          <li>
            <Skill
              key={index}
              level={width}
              skill={name}
              showSkill={showSkill}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillList
