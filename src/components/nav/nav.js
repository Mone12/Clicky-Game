import React from "react";
import "./style.css";

const Nav = props => (
  <nav className= "navbar navbar-expand-lg navbar-dark justify-content-center">
    
      <a className="navbar-brand "href="/clicky-game">{props.title}</a>
      
      <ul className= "nav justify-content-center">

    <li className= "nav-item text-light">Click any image to begin!</li>

      <li className= "nav-item scoreitem text-light" id="rw">{props.correctIncorrect}</li>

      <li className=" nav-item  scoreitem text-light score-num">Current Score: {props.score}</li>

      <li className="nav-item scoreitem text-light score-num top">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;