import React from "react";
import "./Home.css";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import Service from "../../components/service/Service";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Category />
      <Service />
      <Products title="New Arrival" />
      <Products title="Best Sale" />
    </div>
  );
};

export default Home;
