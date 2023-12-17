import React from "react";
import Header from "../components/Header";
import "../styles/error.css";

const Error = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="error">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
      </main>
    </div>
  );
};

export default Error;