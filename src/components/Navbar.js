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

class Navbar extends React.Component {
  state = {
    count: 0,
    top: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <nav class="navbar navbar-light bg-info">
        <span class="navbar-brand mb-0 h1 text-white">Clicky Game</span>
        <span class="navbar-brand mb-0 h1 text-white">Click an image to begin!</span>
        <span class="navbar-brand mb-0 h1 text-white">Score: {this.state.count} | Top Score: {this.state.top} </span>
      </nav>
    );
  }
}

export default Navbar;
