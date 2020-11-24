import React from "react";
import "./index.css";

const NavBar = ({score,topScore}) => {
    return (
        <>
            <nav className = "navbar navbar-light bg-dark justify-content-center">
            <ul className = "nav col-md-12">
             <li className = "nav-item col-md-4">Clicky Game</li>
             <li className = "nav-item col-md-4">Click any image to begin!</li>
             <li className = "nav-item col-md-4">Score:{score} Top Score:{topScore}</li>
            </ul>
            </nav>

        </>
    );
};

export default NavBar;