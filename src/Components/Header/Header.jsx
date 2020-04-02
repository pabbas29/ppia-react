import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <div className='header'>
                <div className="logo">
                    <Link to="/">
                        <img src="http://ppia.feb.ui.ac.id/wp-content/uploads/2015/09/logoppia.png" alt="PPIA" />
                    </Link>
                </div>    
            </div>
            
        </header>
    )
}

export default Header