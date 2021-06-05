import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <nav>
      <Menu>
        <ButtonMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerBox>
            <HamburgerInner isMenuOpen={isMenuOpen}></HamburgerInner>
          </HamburgerBox>
        </ButtonMenu>
        <div>FitApp</div>
        {userInfo ? (
          <div>
            <Link to="#"> {userInfo.name}</Link>
            <ul>
              <li>
                <Link to="profil">Profil</Link>
              </li>
              <li>
                <Link to="/wyloguj" onClick={signoutHandler}>
                  Wyloguj się
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div>
          <SearchIcon fontSize="large"></SearchIcon>
        </div>
      </Menu>
      <Navigation isMenuOpen={isMenuOpen}>
        <NavigationUl>
          <NavigationLi>
            <NavLink
              to="/logowanie"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <PersonIcon fontSize="large"></PersonIcon>
              <span>Zaloguj</span>
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink
              to="/rejestracja"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <PersonAddIcon fontSize="large"></PersonAddIcon>
              <span>Zarejestruj</span>
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink
              to="/przepisy"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <MenuBookIcon fontSize="large"></MenuBookIcon>
              <span>Przepisy</span>
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink
              to="/dieta"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <RestaurantIcon fontSize="large"></RestaurantIcon>
              <span>Dziennik dietetyczny</span>
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink
              to="/trening"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <DirectionsRunIcon fontSize="large"></DirectionsRunIcon>
              <span>Dziennik treningowy </span>
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink
              to="/premium"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <MonetizationOnIcon fontSize="large"></MonetizationOnIcon>
              <span>Premium </span>
            </NavLink>
          </NavigationLi>
        </NavigationUl>
      </Navigation>
    </nav>
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  padding: 8px;
  background-color: #52ba31;
  color: white;
`;

const ButtonMenu = styled.button`
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform 0.3s 0.1s ease-in-out;
`;

const HamburgerBox = styled.span`
  width: 30px;
  height: 15px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 50%;
  transition: background-color 0.4s 0.1s ease-in-out;
  background-color: ${(props) => (props.isMenuOpen ? "transparent" : "")};

  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    top: 8px;
    transform: ${(props) =>
      props.isMenuOpen ? "translateY(-8px) rotate(-45deg)" : ""};
  }
  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    top: -8px;
    transform: ${(props) =>
      props.isMenuOpen ? "translateY(8px) rotate(45deg)" : ""};
  }
`;

const Navigation = styled.div`
  top: 42px; /*height menu 24px + 2x8px padding*/
  height: calc(100vh - 42px);
  width: 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: transform 0.3s 0.1s ease-in-out;
  visibility: ${(props) => (props.isMenuOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isMenuOpen ? "translateX(0px)" : "translateX(-250px)"};
`;

const NavigationUl = styled.ul`
  padding-left: 10px;
  margin-top: 20px;
  list-style: none;
`;

const NavigationLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
`;
