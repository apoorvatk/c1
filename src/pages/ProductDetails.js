// src/pages/ProductDetails.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import newProducts from '../data/newProducts.json';
import { CartContext } from '../pages/CartContext';

function ProductDetails() {
  const { id } = useParams(); // Extract id from URL
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Find the product by id
    const foundProduct = newProducts.products.find(p => p.id === id);
    setProduct(foundProduct);

    if (foundProduct) {
      // Fetch similar products by category
      setSimilarProducts(newProducts.products.filter(p => p.category === foundProduct.category && p.id !== id));
    }
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.itemTitle} added to cart`);
  };

  if (!product) return <div>Product not found</div>;

  return (
  
      <div className='similarProducts'>
        <h2>Similar Products</h2>
        <div className='productDetails'>
      <div className='productDetailsInfo'>
        <img src={product.imgs[0]} alt={product.itemTitle} className='productImage'/>
        <div className='productDetailsText'>
          <h1>{product.itemTitle}</h1>
          <p>{product.description}</p>
          <p>Price: Rs{product.price}</p>
          <button className='addToCartButton' onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
        <div className='productList'>
          {similarProducts.map((item) => (
            <div key={item.id} className='product'>
              <img src={item.imgs[0]} alt={item.itemTitle} className='productImage'/>
              <div className='productText'>
                <h3>{item.itemTitle}</h3>
                <p>Description: {item.description}</p>
                <p>Price: Rs{item.price}</p>
                <button className='addToCartButton' onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
