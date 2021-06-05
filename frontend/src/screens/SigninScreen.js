import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <div>
          <h1>LOGOWANIE</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <Wrapper>
          <label htmlFor="email">Podaj adres e-mail: </label>
          <input
            type="email"
            id="email"
            placeholder="Wpisz e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </Wrapper>
        <Wrapper>
          <label htmlFor="password">Podaj hasło: </label>
          <input
            type="password"
            id="password"
            placeholder="Wpisz hasło"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Wrapper>
        <Wrapper>
          <button type="submit">ZALOGUJ</button>
        </Wrapper>
        <div>
          <WrapperLink>
            Nowy Użytkownik ?
            <Link to={`/rejestracja?redirect=${redirect}}`}>
              Stwórz swoje konto
            </Link>
          </WrapperLink>
          <WrapperLink>
            <Link to="przypomnieniehasla">ZAPOMNIAŁEM HASŁA</Link>
          </WrapperLink>
        </div>
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

const WrapperLink = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
`;
