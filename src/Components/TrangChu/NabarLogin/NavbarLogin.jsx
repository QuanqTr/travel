import React, { useContext, useState } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import Img from '../../../Assets/Logo.png';
import './navbar.scss';
import { UserContext } from '../../../Context/UserContext';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
    const [active, setActive] = useState('navBar');
    const { user } = useContext(UserContext);

    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <Link to="/home" className="logo flex">
                        <img src={Img} alt="" className="icon" />
                        <h2>HueTour.</h2>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="/" className="navLink">Home</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/destination" className="navLink">Destination</Link>
                        </li>


                        <li className="navItem">
                            <Link to="/about" className="navLink">About</Link>

                        </li>

                        <li className="navItem">
                             <Link to="/contact" className="navLink">Contact</Link>
                        </li>

                        <Link to="/account" className="user-btn">
                            <FaUserCircle className="user" />
                            {!!user && <span className="user-name">{user.email.slice(0, -10)}</span>}
                        </Link>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default NavbarLogin;