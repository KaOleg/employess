import React from "react";
import "./Menu.css";
import {NavLink} from "react-router-dom"
function Menu() {
    return <nav className="menu">
        <NavLink to="/add">Add</NavLink>
        <NavLink to="/">Employees</NavLink>
    </nav>;
}

export default Menu;
