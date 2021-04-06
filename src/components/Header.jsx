import React from "react";
import logo from "../assets/images/logoBW2.png";
import user from "../assets/images/user-icon.png";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={user} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
