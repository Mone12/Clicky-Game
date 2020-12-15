import React from "react";
import './index.css';

function Card(props) {
  return (
      <div className="card col-md-2 p-1">
    <div className="img-container">
      <img alt={props} src={props.image} id = {props.id} onClick={props.handleIncrement}/>

    </div>
    
  </div>
  )
}

export default Card;