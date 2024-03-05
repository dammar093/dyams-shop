import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import cateData from "../../assets/category/cateData";

const Category = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <p>Choose your best</p>
      <div className="category">
        {cateData.map((category) => (
          <Link
            to={`products?category=${category.category}`}
            key={category.category}
          >
            <div className="cate-products">
              <img src={category.image} alt="" />
              <h5>{category.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
