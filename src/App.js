import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Gamesection";
import Footer from "./components/Footer";
import characters from "./characters.json"


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section 
        image={characters[0].image} 
      />
      <Footer />
    </div>
  );
}

export default App;
