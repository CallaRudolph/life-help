import React from "react";
import Header from "./Header";
import Life from "./Life";

function App(props){
  var app = {
    fontFamily: "'Poiret One', cursive",
    backgroundColor: "#fff8f0",
    backgroundSize: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
  }
  return (
    <div style={app} className="container">
      <Header/>
      <Life/>
    </div>
  );
}

export default App;
