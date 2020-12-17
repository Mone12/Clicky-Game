import React from "react";
import "./index.css";
import img from "./SMlogo2.png";

const NavBar = (props) => {
    return (
        <>
            <nav className = "shadow navbar fixed-top navbar-light bg-dark justify-content-center">
            <ul className = "nav col-md-12">
             <li className = "nav-item col-md-4 title">
                <img className= "nav-logo" src = {img} alt = {props}/>
                 Clicky Game
            </li>
             <li className = "nav-item col-md-4 list-position">Click any image to begin!</li>
             <li className = "nav-item col-md-4 list-position">Score:{props.current} Top Score:{props.high}</li>
            </ul>
            </nav>

        </>
    );
};

export default NavBar;