import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Products.css";
import { Link, useLocation } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import cateData from "../../assets/category/cateData";
import Pagination from "../../components/pagination/Pagination";
import Banner from "../../components/banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { filteredByPrice, filtredByCate } from "../../feature/products/productSlice";
import products from "../../data/data";
const Products = () => {
  const [showcate, setShowcate] = useState(false);
  const [showPrice, setShoPrice] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const filtredProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  return (
    <div className="products-page">
      <Banner title="products" />
      <div className="mobile-responsive">
        <div className="m-category">
          <h2 onClick={() => setShowcate((prev) => !prev)}>
            Category
            <span>{!showcate ? <GoChevronDown /> : <GoChevronUp />}</span>
          </h2>
          {showcate && (
            <div className="category-items">
              <ul>
                {cateData.map((items) => {
                  return (
                    <Link
                      to={`?category=${items.category}`}
                      key={items.category}

                    >
                      <li>
                        {items.title} <span>19</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="filter">
          <h2 onClick={() => setShoPrice((prev) => !prev)}>
            short by price
            <span>{!showPrice ? <GoChevronDown /> : <GoChevronUp />}</span>
          </h2>
          {showPrice && (
            <div className="sort">
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(200))} /> <span >Rs. 0 - 200</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(500))} /> <span>Rs. 200 - 500</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(1000))} /> <span>Rs. 500 - 1000</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(2000))} /> <span>Rs. 1000 - 2000</span>
              </div>
            </div>
          )}
        </div>
        <div className="filter">
          <h2 onClick={() => setShowSize((prev) => !prev)}>
            Filter by size
            <span>{!showSize ? <GoChevronDown /> : <GoChevronUp />}</span>
          </h2>
          {showSize && (
            <div className="sort">
              <div>
                <input type="radio" name="size" /> <span>M</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>X</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>XL</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>2XL</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>3XL</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="products-wrapper">
        <div className="product-category">
          <h2>Categories</h2>
          <div className="category-items">
            <ul>
              {cateData.map((items) => {
                return (
                  <Link to={`?category=${items.category}`} key={items.category}
                  >
                    <li>
                      {items.title} <span>19</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="filter">
            <h2>short by price</h2>
            <div className="sort">
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(200))} /> <span >Rs. 0 - 200</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(500))} /> <span>Rs. 200 - 500</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(1000))} /> <span>Rs. 500 - 1000</span>
              </div>
              <div>
                <input type="radio" name="sort" onChange={() => dispatch(filteredByPrice(2000))} /> <span>Rs. 1000 - 2000</span>
              </div>
            </div>
          </div>
          <div className="filter-size">
            <h2>Filter by size</h2>
            <div className="sort">
              <div>
                <input type="radio" name="size" /> <span>M</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>X</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>XL</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>2XL</span>
              </div>
              <div>
                <input type="radio" name="size" /> <span>3XL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="top-products">
          <div className="product-page">
            {
              filtredProducts.length > 0 ? filtredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))
                : products.map((product) => (
                  <Card key={product.id} product={product} />
                ))
            }

          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Products;
