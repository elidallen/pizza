import React from "react";
import BannerImage from "../assets/pizza123.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Eli Pizza</h1>
        <p> PIZZA FOR EVERYBODY </p>
          <button> ORDER NOW </button>
        
      </div>
    </div>
    
  );
}

export default Home;
