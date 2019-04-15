import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads


function Header() {
  return (
    <div class="jumbotron jumbotron-fluid main-header">
      <div class="container">
        <h1 class="display-4 d-flex justify-content-center main-header-font">Clicky Game!</h1>
        <h2 class="lead d-flex justify-content-center main-text">Click an image to earn points, but don't click it more than once!</h2>
      </div>
    </div>
  );
}

export default Header;
