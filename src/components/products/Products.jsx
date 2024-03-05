import React from "react";
import Card from "../card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Products.css";
import { useSelector } from "react-redux";
import products from "../../data/data";
const Products = ({ title }) => {
  // const products = useSelector((state) => state.products.products);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="products">
      <h2>{title}</h2>
      <p>The Best Online Sales to Shop This Weekend</p>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
