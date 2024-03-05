import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoIosHome, IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import cateData from "../../assets/category/cateData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="footer-logo">
          <Link to="/" className="logo">
            dyams
          </Link>
          <div className="footer-text">
            <p>
              <IoIosHome /> Bimdatta-18 Katan, Nepal
            </p>
            <p>
              <IoIosCall /> +977-9809498493
            </p>
            <p>
              <MdEmail /> dammarrana093@gmail.com
            </p>
          </div>
        </div>
        <div className="footer-details">
          <h5>Categories</h5>
          <div className="footer-text">
            <div className="footer-links">
              {cateData.map((item, index) => {
                if (index <= 4) {
                  return (
                    <Link to={`products?category=${item.title}`} key={item.id}>
                      {item.title}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="footer-details">
          <h5>Information</h5>
          <div className="footer-text">
            <div className="footer-links">
              <Link to="about">About Us</Link>
              <Link to="#">search</Link>
              <Link to="order">Delivery Information</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Condition</Link>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h5>Follo Me</h5>

          <div className="footer-text">
            <div className="social">
              <Link to="https://www.facebook.com/dammarrana093">
                <FaFacebook />
              </Link>
              <Link to="https://www.instagram.com/dyams_singh/">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/dammar-rana-983077238/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2024 Dyams. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
