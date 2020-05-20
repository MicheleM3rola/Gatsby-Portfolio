import React from "react"
import Input from "./input"
import Text from "./text"
import styled from "styled-components"

const Form = () => {
  return (
    <FormStyle>
      <form
        action="https://formspree.io/mike88.merola@gmail.com"
        method="POST"
        className="form-control"
      >
        <Input
          label1="name"
          labelName="Name:"
          type="text"
          name="name"
          id="id"
          placeholder="John Smith"
        />
        <Input
          label1="email"
          labelName="Email:"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <Text
          message="message"
          id="message"
          label1="message"
          labelName="Message:"
          rows="5"
          placeholder="Leave me a message"
        />
        <div className="ctn-btn">
          <input type="submit" value="Send" className="btn-form" />
        </div>
      </form>
    </FormStyle>
  )
}

const FormStyle = styled.div`
  .form-control {
    display: flex;
    flex-direction: column;
    width: 70%;

    .ctn-btn {
      text-align: center;

      .btn-form {
        padding: 10px;
        width: 30%;
        margin-top: 20px;
        margin-left: 48px;

        border-radius: 50px;
        border: transparent;
        background-color: black;
        color: orange;
        font-family: "Nunito", sans-serif;
        font-weight: bold;
        cursor: pointer;
        box-shadow: -1px 0px 18px 4px rgba(219, 178, 13, 1);
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1024px) {
    .form-control {
      justify-content: center;
      margin: auto;
      .ctn-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .btn-form {
          margin-left: 0px;
        }
      }
    }
  }
`

export default Form
