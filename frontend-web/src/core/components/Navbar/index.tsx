import React from 'react';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav" >
            <div className="col-2 nav-logo-text">
                <a href="link">
                    <h4 className="logo-text">MovieFlix</h4>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;