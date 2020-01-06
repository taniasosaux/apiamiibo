import React from "react";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";

function Home() {
  return (
    <div className="Home">
      <img className="img-fluid" src={astronauts} alt="Astronautas" />;
    </div>
  );
}

export default Home;
