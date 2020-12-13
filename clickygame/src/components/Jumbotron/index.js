import React from "react";
import "./index.css";
import logo from  "./SMlogo.png";

function Header (props) {
    return (
        <div className = "jumbotron jumbotron-fluid">
            <div className="container">
              <img src = {logo} alt = {props} />

              <h4 className = 'jumbo-text text-white'>Click on an image to earn point,
               but don't click on any more than once!</h4>
            </div>

    </div>
    )
};

export default Header;