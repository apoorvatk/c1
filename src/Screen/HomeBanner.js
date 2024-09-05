import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeBanner.css'; 
import homeProduct from '../data/homeProduct.json';

function HomeBanner() {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className='homeBanner'>
      <img 
        className='homeBannerimg' 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg" 
        alt="Home Banner" 
      />
      <div className='grayBackgroundHomeBanner'></div>
      <div className='homeBannerItem'>
        {homeProduct.product.map((item) => (
          <div 
            key={item.id} 
            className='homeBannerItemCard'
            onClick={() => handleProductClick(item)} // Handle click
          >
            <div className='homeBannerItemCardTitle'>{item.itemTitle}</div>
            <div className='imghomeBannerItemCard'>
              {item.imgs.map((it, index) => (
                <div key={index} className='imgBannerHome'>
                  <img className='imgBannerHomeImg' src={it} alt={`product-image-${index}`} />
                  <div className='imgBannerImgName'>Lightning solutions & more</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBanner;
