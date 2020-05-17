import React from "react"
import styled from "styled-components"

const Text = ({ message, id, rows, placeholder, label1, labelName }) => {
  return (
    <ContText>
      <label htmlFor={label1}>{labelName}</label>
      <textarea name={message} id={id} rows={rows} placeholder={placeholder} />
    </ContText>
  )
}

const ContText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  label {
    color: white;
    padding: 5px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }

  textarea {
    margin-top: 10px;
    margin-right: 38px;
    width: 50%;
    border-radius: 15px;
    border: 2px solid orange;
  }

  @media only screen and (max-width: 530px) {
    flex-direction: column;
    textarea {
      width: 90%;
      margin-right: 0px;
    }
  }
`

export default Text
