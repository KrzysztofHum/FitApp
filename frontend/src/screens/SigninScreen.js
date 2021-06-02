import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>LOGOWANIE</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <div className="form">
          <label htmlFor="email">Podaj adres e-mail: </label>
          <input
            type="email"
            id="email"
            placeholder="Wpisz e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label htmlFor="password">Podaj hasło: </label>
          <input
            type="password"
            id="password"
            placeholder="Wpisz hasło"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <button className="primary" type="submit">
            ZALOGUJ
          </button>
        </div>
        <div className="margin20">
          <div>
            Nowy Użytkownik ?{" "}
            <Link to={`/rejestracja?redirect=${redirect}}`}>
              Stwórz swoje konto
            </Link>
          </div>
		  <div>
			  <Link className="navigation-link margin20" to="przypomnieniehasla">ZAPOMNIAŁEM HASŁA</Link>
		  </div>
        </div>
      </form>
    </div>
  );
}
