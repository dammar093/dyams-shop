import React from "react";
import "./Banner.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import banner from "../../assets/other/banner.jpg";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ title }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  return (
    <div className="banner">
      <img src={banner} alt="" />

      <div className="banner-text">
        <h2>{category ? `${category} ` : title}</h2>
        <br />
        <p>
          <Link to="/">Home</Link> <MdKeyboardArrowRight />
          {category ? `${category}` : title}
        </p>
      </div>
    </div>
  );
};

export default Banner;
