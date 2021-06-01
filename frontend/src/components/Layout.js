import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="menu">
        <button
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="nav-title">FitApp</div>
        <div className="search">
          <SearchIcon fontSize="large"></SearchIcon>
        </div>
      </div>
      <div className={`navigation ${isMenuOpen ? "navigation-active" : ""}`}>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link className="navigation-link" to="/logowanie">
              <PersonIcon fontSize="large"></PersonIcon>
              <span>Zaloguj</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/rejestracja">
              <PersonAddIcon fontSize="large"></PersonAddIcon>
              <span>Zarejestruj</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/pzepisy">
              <MenuBookIcon fontSize="large"></MenuBookIcon>
              <span>Przepisy</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/dieta">
              <RestaurantIcon fontSize="large"></RestaurantIcon>
              <span>Dziennik dietetyczny</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/trening">
              <DirectionsRunIcon fontSize="large"></DirectionsRunIcon>
              <span>Dziennik treningowy </span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/premium">
              <MonetizationOnIcon fontSize="large"></MonetizationOnIcon>
              <span>Premium </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
