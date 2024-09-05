// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../pages/CartContext';
import './Cart.css';


function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  };

  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className='cartItem'>
              <img src={item.imgs[0]} alt={item.itemTitle} className='cartItemImage' />
              <div className='cartItemDetails'>
                <div className='cartItemTitle'>{item.itemTitle}</div>
                <div className='cartItemPrice'>Rs{(item.price || 0).toFixed(2)}</div>
                <div className='quantityControl'>
                  <button
                    className='quantityButton'
                    onClick={() => updateQuantity(item.id, Math.max((item.quantity || 1) - 1, 1))}
                  >
                    -
                  </button>
                  <input
                    type='text'
                    value={item.quantity || 1}
                    readOnly
                    className='quantityInput'
                  />
                  <button
                    className='quantityButton'
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className='removeButton'
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className='priceToPay'>
            Price to Pay: <span>Rs{getTotalPrice().toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}



export default Cart;
