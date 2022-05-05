import React from "react";
import "./Navigation.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__layer">
        <div className="nav__left">
          <ul className="nav__list">
            <li className="nav__list-item">Women</li>
            <li className="nav__list-item">Men</li>
            <li className="nav__list-item">Stores</li>
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

        <div className="nav__center">
          <h1 className="nav__logo">TopBoy</h1>
        </div>

        <div className="nav__right">
          <ul className="nav__list">
            <li className="nav__list-item">Register</li>
            <li className="nav__list-item">Sign In</li>
            <div className="nav__basket-container">
              <li className="nav__list-item">Basket</li>
              <ShoppingCartOutlinedIcon />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
