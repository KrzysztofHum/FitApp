import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Layout() {
  return (
    <nav>
      <div className="menu">
        <button className="hamburger" aria-expanded="false">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="nav-title">FitApp</div>
        <div className="search">
          <SearchIcon fontSize="large"></SearchIcon>
        </div>
      </div>
      <div className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/signin">Zaloguj</Link>
          </li>
          <li className="navigation-item">
            <Link to="/register">Zarejestruj</Link>
          </li>
          <li className="navigation-item">
            <Link to="/diet"> Dziennik dietetyczny</Link>
          </li>
          <li className="navigation-item">
            <Link to="/training"> Dziennik treningowy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
