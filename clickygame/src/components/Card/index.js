import React from "react";
import './index.css';

function Card(props) {
  return (
    <div className="container col-md-3">
    <div className="card rounded">
    <img alt={props.name} src={props.image} id = {props.id} onClick={props.handleIncrement}/>
        
     
    </div>
  </div>
  )
}

export default Card;