import React from "react"
import styled from "styled-components"

const Input = ({ label1, labelName, type, name, id, placeholder, value }) => {
  return (
    <ContainerInput>
      <label htmlFor={label1}>{labelName}</label>

      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="input"
      />
    </ContainerInput>
  )
}

const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  label {
    color: white;

    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }

  .input {
    padding: 10px;
    margin: 10px;
    width: 70%;
    border-radius: 15px;
    border: 1px solid orange;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    .input {
      width: 90%;
    }
  }

  @media (min-width: 531px) and (max-width: 1024px) {
    flex-direction: column;

    .input {
      width: 60%;
    }
  }
`

export default Input
