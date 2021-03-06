import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className="ui padded segment">
        <h1 className="ui olive center aligned header">
          Welcome to Parks in React Redux!
        </h1>
        <h5 className="ui center aligned header">
          By Tiffany Siu, Adela Darmansyah, Krista Rutz, Andriy Veremyeyev
        </h5>
        <h6>Note: If you get a NetworkError, please download and turn on a CORS Unblock extension in your browser!</h6>
        <div className="ui center aligned divider"></div>
      </div>
    </React.Fragment>
  )
}

export default Header;