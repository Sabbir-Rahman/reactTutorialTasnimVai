import React from "react";

const Navbar=() =>{
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo" style={{marginLeft:20}}>Movie DB</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Movies</a></li>
                    <li><a href="badges.html">Tv Show</a></li>
                    <li><a href="collapsible.html">Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar