import React from "react";
import './index.css';

function Card(props) {
  return (
      <div className="card">
    <div className="img-container">
      <img alt={props} src={props.image} id = {props.id} onClick={props.handleIncrement}/>

    </div>
    
  </div>
  )
}

export default Card;