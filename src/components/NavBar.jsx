import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function NavBar(props) {

    // Set the initial state of the navbar to be inactive when not scrolling (not highlighted)
    const [navbarActive, setNavbarActive] = React.useState(false);

    // Function to change the navbar based on the user's scroll position
    function changeNavbar() {
        if (window.scrollY > 0) {
            setNavbarActive(true);
        } else {
            setNavbarActive(false);
        }
    }

    // Function to reset the scroll position to the top of the page
    function resetTop() {
        window.scrollTo(0, 0);
    }

    // Add an event listener to the window object to listen for scroll events to change the navbar
    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    }, []);

    // Render the NavBar component
    return (
        <nav className={props.darkMode ? "navbar dark": "navbar"} >

            {/* Navbar */}
            <ul 
                className={
                    `navbar-list ${navbarActive ? (props.darkMode ? "navbar-list-active-dark" : "navbar-list-active-light") : ""}`
                }
            >
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/"
                        onClick={resetTop}
                    >
                        Homepage
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/about"
                        onClick={resetTop}
                    >
                        About
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/projects"
                        onClick={resetTop}
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/experiences"
                        onClick={resetTop}
                    >
                        Experiences
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/art"
                        onClick={resetTop}
                    >
                        Art
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => 
                            isActive 
                                ? props.darkMode 
                                    ? "navbar-list-link-dark nav-active-dark" 
                                    : "navbar-list-link-light nav-active-light"
                                : props.darkMode 
                                    ? "navbar-list-link-dark"
                                    : "navbar-list-link-light"
                        }
                        to="/contact"
                        onClick={resetTop}
                    >
                        Contact
                    </NavLink>
                </li>

                {/* Dark mode toggler */}
                <div className="toggler">
                    <FontAwesomeIcon className="toggler-light" icon={faSun} />
                    <div className="toggler-slider" onClick={props.toggleDarkMode}>
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <FontAwesomeIcon className="toggler-dark" icon={faMoon} />
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;