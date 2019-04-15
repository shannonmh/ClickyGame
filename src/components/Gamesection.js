import React from "react";
//import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// const styles = {
//   section: {
//     background: "white",
//     textAlign: "center"
//   },
//   sectionh2: {
//     fontSize: "2.5em",
//     paddingTop: "50px",
//     paddingBottom: "25px"
//   }
//};


function Section(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Section;
