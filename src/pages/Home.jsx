import React from "react";

import "../styles/main.css";
import "../styles/home.css";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

import "aos/dist/aos.css";

function Home() {
  return (
    <main>
      <Header />

      <Gallery />
    </main>
  );
}

export default Home;
