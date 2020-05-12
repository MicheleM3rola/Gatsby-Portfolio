import React from "react"
import styled, { keyframes } from "styled-components"
import CountUp from "react-countup"

const Skill = ({ level, skill, showSkill }) => {
  return (
    <SkillWrapper>
      <div className="cont-skill">
        <h3>{skill}</h3>
        {showSkill ? (
          <CountUp
            start={0}
            end={level}
            duration={4}
            suffix="%"
            className="percentage"
          />
        ) : (
          <span className="percentage">0%</span>
        )}
      </div>
      <Bar>
        {showSkill ? (
          <Level level={level} showSkill={showSkill}>
            {" "}
          </Level>
        ) : null}
      </Bar>
    </SkillWrapper>
  )
}

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  .cont-skill {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .percentage {
      font-size: 1rem;
      color: white;
      font-weight: bold;
    }
    h3 {
      text-align: start;
      color: white;
      font-family: "Nunito", sans-serif;
    }
  }
`

const Bar = styled.div`
  width: 100%;
  border: 2px solid white;
  border-radius: 20px;
  height: 15px;
  box-shadow: -1px 0px 18px 4px rgba(219, 178, 13, 1);
`

const fillBar = level => keyframes`
0% {
        width: 0%;
      }

      50% {
        width: 50%;
      }

      100% {
        width: ${level}%;
      }

`

const Level = styled.div`
  height: 100%;
  width: ${props => props.level + "%"};
  border-radius: 20px;

  text-align: center;
  animation: ${props => fillBar(props.level)} 3s ease-in;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  background-size: 400% 400%;
  background-position: 400%;
`

export default Skill
