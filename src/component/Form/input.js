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
    width: 50%;
    border-radius: 15px;
    border: 1px solid orange;
  }
`

export default Input
