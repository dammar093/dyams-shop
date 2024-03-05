import React from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux'


const Checkout = () => {

  const products = useSelector((state) => state.cart.cart)

  var config = {
    // replace the publicKey with yours
    "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    "productIdentity": "1234567890",
    "productName": "Dragon",
    "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
    "paymentPreference": [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
    "eventHandler": {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      }
    }
  };

  var checkout = new KhaltiCheckout(config);
  function khaltiPaymentGateway() {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  }

  const handelPayment = (e) => {
    e.preventDefault();
    khaltiPaymentGateway()
  }
  return (
    <div className='checkout-container'>
      <div className="left-checkout">
        {
          products.map((item) => (
            <div className="checkout-cart" key={item.id}>
              <div className="checkout-cart-container">
                <div className="checkout-image">
                  <img src={item.image} alt={item.title} />
                  <span>{item.quantity}</span>
                </div>
                <div className="checkout-cart-details">
                  <h3>{item.title}</h3>
                  <p>{item.color}</p>
                </div>

              </div>
              <div className="checkout-price">
                <p>Rs.{item.price}</p>
              </div>
            </div>
          ))
        }
        {
          products.length > 0 && <div className="checkout-total">
            <span>Total</span>
            <span>Rs.{
              products.reduce((acc, item) => item.quantity * item.price + acc, 0)
            }</span>
          </div>
        }
      </div>
      <div className="right-checkout">
        <form onSubmit={handelPayment}>
          <div className="checkout-top-from">
            <h4 className='chekout-title'>Delivery</h4>
            <div className="checkout-input-box">
              <div className="checkout-input">
                <input type="text" placeholder='First Name' className='input' />
                <input type="text" placeholder='Last Name' className='input' />
              </div>

              <div className="checkout-input">
                <input type="text" placeholder='Address' className='address' />
              </div>
              <div className="checkout-input">
                <input type="text" placeholder='City' className='input' />
                <input type="text" placeholder='ZIP Code' className='input' />
              </div>
              <div className="checkout-input">
                <input type="submit" value="PAY WITH KHALTI" className='pay-btn' />
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Checkout