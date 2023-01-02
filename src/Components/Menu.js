import React from 'react';
import {  
    Link
  } from "react-router-dom";


  /*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/

function Menu () {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/MainGame" className="menuLink">Play game</Link></li>
                <li><Link to="/Help" className="menuLink">Game help</Link></li>
            </ul>
        </div>
    );
}





// Export component so it can be used by Header component
export default Menu;