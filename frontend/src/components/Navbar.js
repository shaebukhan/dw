import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/home.svg";
import MessageIcon from "../assets/images/message-icon.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../Context/authContext";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
const Navbar = () => {

    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ""
        });
        Cookies.remove("token"); // Removes the 'token' cookie
        Cookies.remove("auth");  // Removes the 'auth' cookie

        toast.info("Logged out");
        navigate('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (


        <>
            <div className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="logo" />
                        <h2 className="logo-text">DWELLY FIX</h2>
                    </Link>
                </div>
                <div id="sidemenu" className={`navbar-left ${isMenuOpen ? 'active-menu' : ''}`}>
                    <button className="close-btn" onClick={closeMenu}>
                        <IoClose />
                    </button>

                    <Link className="nav-link" to="/">Hem</Link>
                    <Link className="nav-link" to="/renovation">Renovering </Link>
                    <Link className="nav-link" to="/services">Tjänster </Link>
                    <Link className="nav-link" to="/contact">Kontakt </Link>
                    <Link className="nav-link" to="/about">Om oss  </Link>
                    <Link className="five-six-appear" to="/login">Login  </Link>
                    <Link className="five-six-appear" to="/register">Sign Up  </Link>
                </div>
                <div className="nav-right">
                    <div className="message-icon">
                        <img src={MessageIcon} alt="" />
                    </div>
                    {
                        !auth.user ? (<>  <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/register" className="reg-btn">Sign up</Link>   </>) : (<>

                                <div className="custom-nav-item">
                                    <button
                                        className="acc-circle border-0"
                                        onClick={toggleDropdown}
                                        aria-expanded={dropdownOpen}
                                    >

                                        {auth?.user?.name && auth.user.name[0].toUpperCase()}
                                    </button>
                                    {dropdownOpen && (
                                        <ul className="custom-dropdown-menu">
                                            <li>
                                                <NavLink
                                                    className="custom-dropdown-item"
                                                    to={`/dashboard/${auth?.user.role === 1 ? "admin" : "user"}`}
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className="custom-dropdown-item"
                                                    onClick={() => {
                                                        handleLogout();
                                                        setDropdownOpen(false);
                                                    }}
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </>)
                    }

                    <button className="open-nav" onClick={openMenu}>
                        <FaBarsStaggered />
                    </button>
                </div>

            </div>

        </>
    );
};

export default Navbar;
