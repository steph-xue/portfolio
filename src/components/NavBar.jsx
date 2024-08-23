import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

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

    // Add an event listener to the window object to listen for scroll events to change the navbar
    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    }, []);

    return (
        <nav className="navbar" >
            <ul className={navbarActive ? "navbar-list navbar-list-active" : "navbar-list"}>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar-list-link nav-active" : "navbar-list-link"} 
                        to="/">
                        Homepage
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar-list-link nav-active" : "navbar-list-link"} 
                        to="/about">
                        About
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar-list-link nav-active" : "navbar-list-link"} 
                        to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar-list-link nav-active" : "navbar-list-link"} 
                        to="/experiences">
                        Experiences
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink 
                        className={({ isActive }) => isActive ? "navbar-list-link nav-active" : "navbar-list-link"} 
                        to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;