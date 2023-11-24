import React from "react";
import NavBarScroll from "/components/NavBarScroll.jsx";

export default function About() {
  return (
    <div className="about-section">
      <NavBarScroll />
      <div className="about-text">
        <h1>Our mission</h1>
        <p>
          This Project is aiming at creating something beautiful. It was created
          by Anh, Mo, Shavkat & Phil We would like to introduce the best
          destinations for travelling around the world. Our mission is providing
          all necessary information, including name, address, ranking, details
          information about how to travel there, the best sightseeing
          destinations, and the best local food.
        </p>
        <br />
        <p>Enjoy your journey with us!</p>
      </div>
    </div>
  );
}
