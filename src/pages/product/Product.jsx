import React, { useEffect, useState } from "react";
import "./Product.css";
import "../../components/banner/Banner";
import Banner from "../../components/banner/Banner";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addToCart } from "../../feature/cart/cartSlice";
import products from "../../data/data";


const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('white');
  const [size, setSize] = useState('xl')
  const [showDesc, setShowDesc] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [imageIndex, setImageIndex] = useState(0)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [, productId] = id.split("=");

  const product = products.find((product) => product.id === Number(productId))


  const handelShipping = () => {
    setShowShipping(true);
    setShowDesc(false);
    setShowFAQ(false);
    setShowReview(false);
  };
  const handelDesc = () => {
    setShowShipping(false);
    setShowDesc(true);
    setShowFAQ(false);
    setShowReview(false);
  };
  const handelFaq = () => {
    setShowShipping(false);
    setShowDesc(false);
    setShowFAQ(true);
    setShowReview(false);
  };
  const handelReview = () => {
    setShowShipping(false);
    setShowDesc(false);
    setShowFAQ(false);
    setShowReview(true);
  };
  const faq = [
    {
      id: 1,
      question: "Why is this neccessary ?",
      ans: "We need to do this given how fast AWS is continuing to grow; we will start to run low on IDs for certain EC2 and EBS resources within a year or so. In order to enable the long-term, uninterrupted creation of new instances, reservations, volumes, and snapshots, we need to introduce a longer ID format for these resources. Additional identifiers might need to expand within the next few years as well.",
    },
    {
      id: 2,
      question: "How does this impact me ?",
      ans: "We need to do this given how fast AWS is continuing to grow; we will start to run low on IDs for certain EC2 and EBS resources within a year or so. In order to enable the long-term, uninterrupted creation of new instances, reservations, volumes, and snapshots, we need to introduce a longer ID format for these resources. Additional identifiers might need to expand within the next few years as well.",
    },
    {
      id: 3,
      question: "Will this effecting existing system ?",
      ans: "We need to do this given how fast AWS is continuing to grow; we will start to run low on IDs for certain EC2 and EBS resources within a year or so. In order to enable the long-term, uninterrupted creation of new instances, reservations, volumes, and snapshots, we need to introduce a longer ID format for these resources. Additional identifiers might need to expand within the next few years as well.",
    },
  ];
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };




  return (
    <div className="product">
      <Banner title="product" />
      <div className="product-item">
        <div className="left-product">
          <div className="product-image">
            <img
              src={product && product.images[imageIndex]}
              alt={product && product.title}
            />
          </div>
          <div className="sub-image">
            {
              product && product.images.map((img, index) => {
                return (
                  <img src={img}
                    alt={img} onClick={() => setImageIndex(index)} key={img} />
                )
              })
            }
          </div>
        </div>
        <div className="right-product">
          <h2>{product && product.title}</h2>
          <div className="review">
            <div className="star-icon">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfAlt className="star" />
            </div>
            <span> 1 Review</span>
          </div>
          <div className="stock">
            <p>stock: {product && product.stock ? "instcok" : "out of stock"}</p>
          </div>
          <div className="div-category">
            <p>Category : <span>  {product && product.category} </span></p>
          </div>
          <div className="product-price">
            <p>
              Rs. {product && product.price} <span>1500</span>
            </p>
          </div>
          <div className="product-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non
              quis odit numquam, soluta eaque quidem exercitationem quos
              repellat cupiditate eum incidunt assumenda culpa quia, et facere!
              Tenetur, rem eveniet.
            </p>
          </div>
          <div className="color">
            {
              product && product.color.map((color) => {
                return (

                  <div className="div" style={{ background: `${color}` }} key={color} onClick={() => setColor(color)}></div>
                )
              })
            }
          </div>
          <div className="size-box">
            {
              product && product.size.map((size) => {

                return (
                  <div className="size" key={size} onClick={() => setSize(size)}>
                    <span>{size}</span>
                  </div>
                )
              })
            }

          </div>
          <div className="cart-btn">

            <div className="product-quantity">
              <div className="quantity-btn" onClick={decQuantity}>
                <FaMinus />
              </div>
              <input
                type="text"
                value={quantity}
                onChange={() => setQuantity(Number(e.target.value))}
              />
              <div
                className="quantity-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FaPlus />
              </div>
            </div>
            <button className="btn cart-button" onClick={() => dispatch(addToCart({ quantity: Number(quantity), id: product.id, price: product.price, image: product.images[0], title: product.title, color: color, size: size }))}>Add to cart</button>
          </div>
        </div>
        <div className="middle-product">
          <div className="middle-product-title">
            <h2
              onClick={handelDesc}
              style={showDesc ? { color: "#fa869b" } : { color: "#444444" }}
            >
              description
            </h2>
            <h2
              onClick={handelShipping}
              style={showShipping ? { color: "#fa869b" } : { color: "#444444" }}
            >
              shipping & returns
            </h2>
            <h2
              onClick={handelFaq}
              style={showFAQ ? { color: "#fa869b" } : { color: "#444444" }}
            >
              faq
            </h2>
            <h2
              onClick={handelReview}
              style={showReview ? { color: "#fa869b" } : { color: "#444444" }}
            >
              reviews
            </h2>
          </div>
          <div className="about-product-desc">
            {showDesc && (
              <div className="product-description">
                <p>
                  This midi dress is made with a beautiful chiffon. The wrap
                  silhouette and sunburst pleats make for a flattering, flirty
                  fit. Feel free to throw this one in the wash — the permanent
                  pleats will keep their shape.
                </p>
                <p>
                  The Babaton classic — now in luxe vegan leather that's soft
                  and supple. Just like the original, this version has intricate
                  pleats that feel beautifully feminine.
                </p>
                <div className="list">
                  <h3>Sample Unordered List</h3>
                  <ul>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                  </ul>
                </div>
                <div className="list">
                  <h3>Sample Unordered List</h3>
                  <ol>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                    <li>Vestibulum sit amet lobortis</li>
                  </ol>
                </div>
              </div>
            )}
            {showShipping && (
              <div className="shiiping-return">
                <div className="shipping">
                  <h4>retrun policy</h4>
                  <p>
                    You may return most new, unopened items within 30 days of
                    delivery for a full refund. We'll also pay the return
                    shipping costs if the return is a result of our error (you
                    received an incorrect or defective item, etc.). You should
                    expect to receive your refund within four weeks of giving
                    your package to the return shipper, however, in many cases
                    you will receive a refund more quickly. This time period
                    includes the transit time for us to receive your return from
                    the shipper (5 to 10 business days), the time it takes us to
                    process your return once we receive it (3 to 5 business
                    days), and the time it takes your bank to process our refund
                    request (5 to 10 business days). If you need to return an
                    item, simply login to your account, view the order using the
                    'Complete Orders' link under the My Account menu and click
                    the Return Item(s) button. We'll notify you via e-mail of
                    your refund once we've received and processed the returned
                    item.
                  </p>
                </div>
                <div className="shipping">
                  <h4>shipping</h4>
                  <p>
                    We can ship to virtually any address in the world. Note that
                    there are restrictions on some products, and some products
                    cannot be shipped to international destinations. When you
                    place an order, we will estimate shipping and delivery dates
                    for you based on the availability of your items and the
                    shipping options you choose. Depending on the shipping
                    provider you choose, shipping date estimates may appear on
                    the shipping quotes page. Please also note that the shipping
                    rates for many items we sell are weight-based. The weight of
                    any such item can be found on its detail page. To reflect
                    the policies of the shipping companies we use, all weights
                    will be rounded up to the next full pound.
                  </p>
                </div>
              </div>
            )}

            {showFAQ && (
              <div className="faq">
                {faq.map((item, index) => {
                  return (
                    <div className="faq" key={item.id}>
                      <h2>
                        {index + 1} {item.question}
                      </h2>
                      <p>{item.ans}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {
              showReview &&
              <div className="customer-review-container">
                <h2>Customer Reviews</h2>
                <div className="product-review">
                  <div className="star-icon">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                  </div>
                  <div className="reviewr-details">
                    <h4>test</h4> <p>Nice Product I ❤️ it</p>
                  </div>

                </div>
                <div className="product-review">
                  <div className="star-icon">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                  </div>
                  <div className="reviewr-details">
                    <h4>test</h4> <p>Nice Product I ❤️ it</p>
                  </div>

                </div>
                <div className="product-review">
                  <div className="star-icon">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                  </div>
                  <div className="reviewr-details">
                    <h4>test</h4> <p>Nice Product I ❤️ it</p>
                  </div>

                </div>
                <div className="product-review">
                  <div className="star-icon">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                  </div>
                  <div className="reviewr-details">
                    <h4>test</h4> <p>Nice Product I ❤️ it</p>
                  </div>

                </div>
              </div>
            }
          </div>

        </div>
        <div className="related-products">
          <Products title="realted products" />
        </div>
      </div>
    </div>
  );
};

export default Product;
