import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
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