import React from "react";
import "./Navigation.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__layer">
        {/* left hand side */}
        <div className="nav__left">
          <ul className="nav__list">
            <NavLink to="#">
              <li className="nav__list-item">Women</li>
            </NavLink>
            <NavLink to="#">
              <li className="nav__list-item">Men</li>
            </NavLink>
            <NavLink to="#">
              <li className="nav__list-item">Stores</li>
            </NavLink>
          </ul>
          <form className="nav__form">
            <label className="nav__form-label" htmlFor="search">
              <input
                className="nav__form-input"
                type="text"
                name="search"
                placeholder="Search"
              />
            </label>
          </form>
        </div>

        {/* center side */}
        <div className="nav__center">
          <NavLink to="#">
            <h1 className="nav__logo">TopBoy</h1>
          </NavLink>
        </div>

        {/* right hand side */}
        <div className="nav__right">
          <ul className="nav__list">
            <NavLink to="#">
              <li className="nav__list-item">Register</li>
            </NavLink>
            <NavLink to="#">
              <li className="nav__list-item">Sign In</li>
            </NavLink>
            <NavLink to="#">
              <div className="nav__basket-container">
                <li className="nav__list-item nav__list-item-basket">Basket</li>
                <ShoppingCartOutlinedIcon />
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
