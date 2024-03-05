import React, { useState } from 'react'
import a1 from "../../assets/products/a1.jpg"
import './Order.css'
import { IoIosStar } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const Order = () => {
  const [showWriteReview, setWriteReview] = useState(false)
  return (
    <div className='orders'>
      <div className="order-left">
        <div className="order-information">
          <div className="order-details">
            <div className="order-image">
              <img src={a1} alt="" />
            </div>
            <div className="order-text">
              <p>Name : sjdhfsfsdfs</p>
              <p>Color: Red</p>
              <p>Size: m</p>
              <p>price : Rs.120</p>
              <p>Quantity: 2</p>
              <p>Total: rs240</p>
            </div>
            <div className="order-status">
              <span>Delivered</span>
            </div>
            <button className='order-btn' onClick={() => setWriteReview(true)}>Write review</button>
          </div>
          <div className="order-details">
            <div className="order-image">
              <img src={a1} alt="" />
            </div>
            <div className="order-text">
              <p>Name : sjdhfsfsdfs</p>
              <p>Color: Red</p>
              <p>Size: m</p>
              <p>price : Rs.120</p>
              <p>Quantity: 2</p>
              <p>Total: rs240</p>
            </div>
            <div className="order-status">
              <span>Delivered</span>
            </div>
            <button className='order-btn' onClick={() => setWriteReview(true)}>Write review</button>
          </div>
          <div className="order-details">
            <div className="order-image">
              <img src={a1} alt="" />
            </div>
            <div className="order-text">
              <p>Name : sjdhfsfsdfs</p>
              <p>Color: Red</p>
              <p>Size: m</p>
              <p>price : Rs.120</p>
              <p>Quantity: 2</p>
              <p>Total: rs240</p>
            </div>
            <div className="order-status">
              <span>Delivered</span>
            </div>
            <button className='order-btn' onClick={() => setWriteReview(true)}>Write review</button>
          </div>
        </div>
      </div>
      {
        showWriteReview && <div className="write-review">
          <form action="">
            <div className="give-star">
              <IoIosStar className='give-rating' />
              <IoIosStar className='give-rating' />
              <IoIosStar className='give-rating' />
              <IoIosStar className='give-rating' />
              <IoIosStar className='give-rating' />
            </div>
            <div className="write-review-input">
              <input type="text" placeholder='Write Review' />
              <button className='order-btn'>Submit</button>
            </div>
            <RxCross2 className='close-rating' onClick={() => setWriteReview(false)} />
          </form>
        </div>
      }
    </div>
  )
}

export default Order