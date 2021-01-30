import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-danger">
    <div className="navbar-brand">ToDo</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          Инфо
        </NavLink>
      </li>
    </ul>
  </nav>
);
