import React from "react";

function Header(props) {
  var header = {
    backgroundColor: "#7D82B8",
    textAlign: "center",
    color: "white",
    textShadow: "1px 1px #D6F7A3"
  }
  return (
    <div style={header} className="container">
      <h1><em>This is a super fancy Task List. Enter your tasks and mark them complete when you do them. Keep up with it!</em></h1>
    </div>
  );
}

export default Header;
