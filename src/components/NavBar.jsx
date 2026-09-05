import React from "react"
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import navLinks from "@/nav-data/nav-links";

// A single navigation link, shared between the desktop navbar and the mobile menu
function NavItem(props) {
    return (
        <li className="navbar-list-item">
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? props.darkMode
                            ? "navbar-list-link-dark navbar-list-link-active-dark"
                            : "navbar-list-link-light navbar-list-link-active-light"
                        : props.darkMode
                            ? "navbar-list-link-dark"
                            : "navbar-list-link-light"
                }
                to={props.to}
                onClick={props.onClick}
            >
                {props.label}
            </NavLink>
        </li>
    );
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

// The light/dark mode toggle switch, shared between the desktop navbar and the mobile header
function ThemeToggle(props) {
    return (
        <div className={props.className ? `toggler ${props.className}` : "toggler"}>
            <FontAwesomeIcon className={props.darkMode ? "tog-sun tog-symb-dark" : "tog-sun tog-symb-light"} icon={faSun} />
            <div className={props.darkMode ? "tog-slider tog-slider-dark" : "tog-slider tog-slider-light"} onClick={props.toggleDarkMode}>
                <div className={props.darkMode ? "tog-circle tog-circle-dark" : "tog-circle tog-circle-light"}></div>
            </div>
            <FontAwesomeIcon className={props.darkMode ? "tog-moon tog-symb-dark" : "tog-moon tog-symb-light"} icon={faMoon} />
        </div>
    );
}

ThemeToggle.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
    className: PropTypes.string,
};

function NavBar(props) {

    // Set the initial state of the navbar to be inactive when not scrolling (not highlighted)
    const [navbarActive, setNavbarActive] = React.useState(false);

    // Set the initial state of the mobile menu to be closed
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Function to change the navbar based on the user's scroll position
    function changeNavbar() {
        if (window.scrollY > 0) {
            setNavbarActive(true);
        } else {
            setNavbarActive(false);
        }
    }

    // Function to reset the scroll position to the top of the page and close the mobile menu
    function resetTop() {
        window.scrollTo(0, 0);
        setMenuOpen(false);
    }

    // Add an event listener to the window object to listen for scroll events to change the navbar
    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    }, []);

    // Close the mobile menu on escape key press and lock background scrolling while it is open
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Render the NavBar component
    return (
        <nav className="navbar">

            {/* Hamburger button - toggles the mobile menu (mobile screens only) */}
            <button
                className={props.darkMode ? "hamburger hamburger-dark" : "hamburger hamburger-light"}
                onClick={() => setMenuOpen(prevOpen => !prevOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
            >
                <span className={menuOpen ? "hamburger-line hamburger-line-top-open" : "hamburger-line"}></span>
                <span className={menuOpen ? "hamburger-line hamburger-line-middle-open" : "hamburger-line"}></span>
                <span className={menuOpen ? "hamburger-line hamburger-line-bottom-open" : "hamburger-line"}></span>
            </button>

            {/* Desktop navbar (mobile screens hide this in favor of the hamburger menu below) */}
            <ul
                className={
                    `navbar-list ${navbarActive ? (props.darkMode ? "navbar-list-active-dark" : "navbar-list-active-light") : ""}`
                }
            >
                {navLinks.map(link => (
                    <NavItem key={link.to} to={link.to} label={link.label} darkMode={props.darkMode} onClick={resetTop} />
                ))}

                <ThemeToggle darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
            </ul>

            {/* Standalone theme toggle - stays reachable on mobile without opening the menu */}
            <ThemeToggle className="mobile-toggler" darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />

            {/* Mobile menu backdrop - closes the menu when clicked */}
            <div
                className={menuOpen ? "mobile-menu-backdrop mobile-menu-backdrop-open" : "mobile-menu-backdrop"}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Mobile menu panel */}
            <div
                className={
                    menuOpen
                        ? `mobile-menu ${props.darkMode ? "mobile-menu-dark" : "mobile-menu-light"} mobile-menu-open`
                        : `mobile-menu ${props.darkMode ? "mobile-menu-dark" : "mobile-menu-light"}`
                }
            >
                <ul className="mobile-menu-list">
                    {navLinks.map(link => (
                        <NavItem key={link.to} to={link.to} label={link.label} darkMode={props.darkMode} onClick={resetTop} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}

// Prop validation for NavBar component.
// Ensures `darkMode` controls styling correctly and `toggleDarkMode` is a function
// used to switch between light/dark themes from the toggle UI.
NavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default NavBar;
