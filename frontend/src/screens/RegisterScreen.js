import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Hasła nie są takie same");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>STWÓRZ KONTO</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <div className="form">
          <label htmlFor="name">Nazwa</label>
          <input
            type="text"
            id="name"
            placeholder="wpisz imie"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="wpisz email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            placeholder="wpisz hasło"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label htmlFor="confirmPassword">Powtórz hasło</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="wpisz hasło"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <button className="primary" type="submit">
            Rejestracja
          </button>
        </div>
        <div>
          Posiadasz konto ?{" "}
          <Link to={`/signin?redirect=${redirect}`}>Zaloguj się</Link>
        </div>
      </form>
    </div>
  );
}
