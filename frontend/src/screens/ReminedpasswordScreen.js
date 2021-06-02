import React from "react";

export default function ReminedpasswordScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
    /*TODO: remined e-mail password*/
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="form">
          <label htmlFor="email">
            Podasj adres e-mail użyty podczas rejestracji. Następnie zostanie do
            Ciebie wysłane nowe hasło.
          </label>
          <input
            type="email"
            id="email"
            placeholder="Wpisz e-mail"
            required
          ></input>
        </div>
		<div className="form">
          <button className="primary" type="submit">
            WYŚLIJ
          </button>
        </div>
      </form>
    </div>
  );
}
