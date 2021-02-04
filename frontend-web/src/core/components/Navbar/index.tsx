import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAcessTokenDecoded, logout } from '../../utils/auth';
import './styles.scss';

const Navbar = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAcessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav" >
            <div className="col-6 nav-logo-text">
                <Link to="/">
                    <h4 className="logo-text font-weight-bold">MovieFlix</h4>
                </Link>
            </div>

            <div className="col-6 text-right">

                {currentUser && (
                    <>
                        {currentUser}
                        <a href="#logout"
                            className="nav-link active d-inline"
                            onClick={handleLogout}>
                            <text className="text-logout" >
                                Sair
                            </text>
                        </a>
                    </>
                )
                }
                {!currentUser && (
                    <Link to="/home/auth/login" className="nav-link active">

                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;