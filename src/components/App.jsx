import React from "react";
import Header from "./Header";
import Life from "./Life";

function App(props){
  var app = {
    fontFamily: "'Poiret One', cursive"
  }
  return (
    <div style={app} className="container">
      <Header/>
      <Life/>
    </div>
  );
}

export default App;
