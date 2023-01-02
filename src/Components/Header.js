import React from 'react';

// Import menu component
import Menu from './Menu';

/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments*/

//Display header
function Header() {
    return (
        <div className="heading">
            <nav class="navbar navbar-dark bg-dark">
            
            <h1>Flags and Mines</h1>
            <Menu />
            </nav>
            
                
            </div>
            
     
    );
}

// Export component so it can be used by App.js
export default Header;