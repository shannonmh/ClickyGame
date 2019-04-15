import React from "react";
//import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  navbar: {
    background: "green",
    display: "flex",
    justifyContent: "flex-end",
    color: "white",
    fontSize: "1.3rem",
    textAlign: "center"
  }
};


function Footer() {
  return (
    <header style={styles.navbar}>
      Footer
    </header>
  );
}

export default Footer;