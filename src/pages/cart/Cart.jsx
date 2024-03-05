import React, { useState } from 'react'
import './Cart.css'

import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../feature/cart/cartSlice';

const Cart = () => {


  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()


  const handelIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }

  const handelDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }

  if (cartItems.length == 0) {
    return (
      <div className="cart">
        <h3>your cart is empty</h3>
      </div>
    )
  }
  return (
    <div className='cart'>
      <h3>Shopping Cart</h3>
      <hr />
      {
        cartItems.map((item) => (
          <div className="cart-container" key={item.id}>
            <div className="cart-item">
              <div className="cart-image">
                <img src={item?.image} alt={item?.title} />
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-details">
                <p className='cart-title'>{item?.title}</p>
                <p>color: {item?.color}</p>
                <p>size: <span>{item?.size}</span></p>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-price">
                <p>Rs. {item?.price}</p>
              </div>
            </div>
            <div className="cart-item">

              <div className="cart-quantity ">
                <div className="cart-btn-quantity" onClick={() => handelDecrement(item.id)}>
                  <FaMinus />
                </div>
                <input
                  type="text"
                  value={item.quantity}

                />
                <div
                  className="cart-btn-quantity"
                  onClick={() => handelIncrement(item.id)}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-price">
                <p>Rs.{item.price * item.quantity}</p>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-delete">
                <AiFillDelete onClick={() => dispatch(removeFromCart(item.id))} />
              </div>
            </div>
          </div>
        ))
      }
      <hr />
      <div className="grant-total">
        <h4>Total: <span>Rs.{cartItems.reduce((acc, item) => item.price * item.quantity + acc, 0)}</span></h4>
        <div className="checkout">

          <Link to="/checkout" className='checkout-btn'>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart