import React, { useState } from "react";
import "./BottomNav.css";
import { Link, NavLink } from "react-router-dom";
import { SlBasket, SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import products from '../../data/data'

const BottomNav = () => {
  const [searchItms, setSearchItms] = useState('')
  const [shoeMenu, setShoeMenu] = useState(false);
  const numberOfItems = useSelector((state) => state.cart.cart)
  const [hideItems, setHideItems] = useState(false)
  const searchProducts = products.filter(item => item.title.toLocaleLowerCase().includes(searchItms.toLocaleLowerCase().trim()))
  // console.log(searchItms.length);

  const handelSearch = (e) => {
    setSearchItms(e.target.value)
    setHideItems(true)
  }
  const handelClick = () => {
    setHideItems(false)
    setSearchItms('')
  }
  return (
    <div className="bottom-nav">
      {shoeMenu && (
        <div className="m-nav">
          <div className="m-links">
            <div className="menu">
              <h3>Menu</h3>
              <div className="close-icon">
                <IoMdClose onClick={() => setShoeMenu((prev) => !prev)} />
              </div>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShoeMenu((prev) => !prev)}
            >
              Home
            </NavLink>
            <NavLink to="products" onClick={() => setShoeMenu((prev) => !prev)} preventScrollReset={false}>
              shop
            </NavLink>
            <NavLink to="order" onClick={() => setShoeMenu((prev) => !prev)}>
              Order
            </NavLink>
            <NavLink to="contact" onClick={() => setShoeMenu((prev) => !prev)}>
              contact us
            </NavLink>
            <NavLink to="about" onClick={() => setShoeMenu((prev) => !prev)}>
              about us
            </NavLink>
          </div>
        </div>
      )}

      <div className="botton-nav-left">
        <div className="logo">
          <Link to="/">Dyamss</Link>
        </div>
      </div>
      <div className="bottom-nav-mid">
        <input type="search" placeholder="search.." onChange={handelSearch} />
        {
          searchProducts.length > 0 && searchItms.trim().length > 0 && hideItems ? <div className="search-items">
            {
              searchProducts.map((item) => (
                <Link to={`/product/id=${item.id}`} onClick={handelClick}>
                  <img src={item.images[0]} alt={item.title} />
                  <span>{item.title}</span>
                </Link >
              ))
            }
          </div>
            : ''
        }
      </div>
      <div className="bottom-nav-right">

        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink to="products">shop</NavLink>
          <NavLink to="order">Order</NavLink>
          <NavLink to="contact">contact us</NavLink>
          <NavLink to="about">about us</NavLink>
        </div>

        <div className="bottom-nav-icons">
          {/* <SlMagnifier className="icon" /> */}
          <Link to="cart">
            <SlBasket />
            {numberOfItems.length > 0 && <span>{numberOfItems.length}</span>}
          </Link>
          <SlMenu
            className="menu-icon"
            onClick={() => setShoeMenu((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
