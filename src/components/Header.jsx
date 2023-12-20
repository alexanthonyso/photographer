// Header.js
import React, { useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

import Logo from "../assets/logo/Logo.svg";
import Logo2 from "../assets/logo/Logo2.svg";

const Header = () => {
  const [afficherTitreOriginal, setAfficherTitreOriginal] = useState(true);

  const handleClick = () => {
    setAfficherTitreOriginal(!afficherTitreOriginal);
  };

  return (
    <header>
      <div className="logo-container" onClick={handleClick}>
        {/* Utilisez un Link de react-router-dom pour gérer la navigation */}
        <Link to="/">
          {/* Utilisez l'opérateur ternaire pour choisir le logo en fonction de l'état */}
          <img
            className="logo"
            src={afficherTitreOriginal ? Logo : Logo2}
            alt="Logo"
          />
        </Link>
      </div>

      <div className={`title ${afficherTitreOriginal ? "" : "hide"}`}>
        {/* Rendre conditionnellement le titre en fonction de l'état */}
        <>
          <h1>JUN HOON</h1>
          <p>PHOTOGRAPHER</p>
        </>
      </div>

      <div
        className={`title title-transition ${
          afficherTitreOriginal ? "hide" : ""
        }`}
      >
        {/* Rendre conditionnellement le titre en fonction de l'état */}
        <>
          <h1>ABOUT</h1>
          <p>
            I LIKE <span>RED</span>
          </p>
          <h1>CONTACT</h1>
          <p>junhon@mail.com</p>
        </>
      </div>
    </header>
  );
};

export default Header;
