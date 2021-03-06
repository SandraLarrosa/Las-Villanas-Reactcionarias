import React from "react";
import "../../stylesheets/layout/header/header_design.scss";
import headerLogo from "../../images/tarjetas-molonas.png";

function Header() {
  return (
    <header className="header_design">
      <div className="wrapper">
        <a href="./index.html">
          <img className="header__photo" src={headerLogo} alt="Hola" />
        </a>
      </div>
    </header>
  );
}

export default Header;
