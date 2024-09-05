import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.itemTitle}</h2>
            <div className="product-images">
                {product.imgs.map((img, index) => (
                    <img key={index} src={img} alt={product.itemTitle} />
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
