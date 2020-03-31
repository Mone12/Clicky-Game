import React from 'react'
import "./style.css"

function Header() {
    // Intro section
    return (
        <div className="jumbotron jumbotron-fluid text-center">
        <div className="container introcontainer">
          <h1 className="display-4 introtitle">Clicky Game!</h1>
          <h4 className="h4title">Sailor Moon Edition</h4>
          <h2 className="descrip">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
      </div>
    )
};

export default Header;