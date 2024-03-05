import "./Card.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../feature/cart/cartSlice";
import { useDispatch } from "react-redux";



const Card = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <Link to={`/product/id=${product.id}`}>
        <div className="card-image">
          <img src={product.images[0]} alt={product.title} />
        </div>
      </Link>
      <div className="card-details">
        <h3>{product.title}</h3>
        <div className="micro-detail">
          <span>Rs.{product.price}</span>
          <strike>Rs.1200</strike>
          <span>Rating(4.5)</span>
          <span style={{ textTransform: "capitalize" }}>color: {product.color[0]}</span>
          <div className="card-size"> <span>Size: </span> <span style={{ textTransform: "uppercase" }}> {product.size[0]}</span></div>
        </div>

      </div>
      <button className="add-to-cart" onClick={() => dispatch(addToCart({ quantity: 1, id: product.id, price: product.price, image: product.images[0], title: product.title, color: product.color[0], size: product.size[0] }))}>Add to cart</button>
    </div>
  );
};

export default Card;
