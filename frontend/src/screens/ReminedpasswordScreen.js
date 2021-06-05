import React from "react";
import styled from "styled-components";

export default function ReminedpasswordScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
    /*TODO: remined e-mail password*/
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Wrapper>
          <label htmlFor="email">
            Podaj adres e-mail użyty podczas rejestracji. Następnie zostanie do
            Ciebie wysłane nowe hasło.
          </label>
          <input
            type="email"
            id="email"
            placeholder="Wpisz e-mail"
            required
          ></input>
        </Wrapper>
        <Wrapper>
          <button type="submit">WYŚLIJ</button>
        </Wrapper>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;

  input {
    padding: 4px;
    width: 100%;
  }

  label {
    padding: 6px;
  }

  button {
    width: 100%;
    margin: 20px;
    background-color: #52ba31;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
`;
