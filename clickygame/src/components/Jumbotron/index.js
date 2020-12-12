import React from "react";
import "./index.css";
import logo from  "./SMlogo.png";

function Header () {
    return (
        <div className = "jumbotron jumbotron-fluid">
            <div className="container">
              <img src = {logo} />
            </div>

    </div>
    )
};

export default Header;