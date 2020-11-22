import React from "react";

const NavBar = ({score,topScore}) => {
    return (
        <>
            <nav className = "navbar navbar-light bg-light">
            <div className = "col-md-4 center">Clicky Game</div>
            <div className = "col-md-4 center">Click any image to begin!</div>
            <div className = "col-md-4 center">Score:{score} Top Score:{topScore}</div>
            
            </nav>

        </>
    );
};

export default NavBar;