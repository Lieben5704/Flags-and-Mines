import React from 'react';
import {  
    Link
  } from "react-router-dom";


/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/


function Home() {
    return (
        <div>
        <div className="home">
            <h1>Welcome to Flags and Mines! Pick an option from the menu below</h1>
            
            <br></br>
            
        </div>
        
        <div className='home-menu'>
        <h3>Level 2 Task 12 - Capstone</h3>
        <Link to="/MainGame" className="btn btn-primary">Play game</Link>
        <Link to="/Help" className="btn btn-primary">Help Page</Link>
        </div>
        </div>
    
        
    
    );
}

// Export component so it can be used by App.js
export default Home;