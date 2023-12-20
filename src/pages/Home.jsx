import React from "react";

import "../styles/main.css";

import Gallery from "../components/Gallery";
import Header from "../components/Header";

function Home() {
  return (
    <main>
      <Header />

      <Gallery />
    </main>
  );
}

export default Home;
