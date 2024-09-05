import React from 'react'
import './NavbarBanner.css'; 
import MenuIcon from '@mui/icons-material/Menu';


const NavbarBanner = () =>{
    const options = [
        {"name": "Fresh"},
        {"name": "Amazon miniTV"},
        {"name": "Sell"},
        {"name": "Best Sellers"},
        {"name": "Today's Deals"},
        {"name": "Mobiles"},
        {"name": "Electronics"},
        {"name": "Prime"},
        {"name": "Customer Services"},
        {"name": "Fashion"},
        {"name": "New Releases"},
    ]
  return (
    <div className='navbarBanner'>
        <div className='navbarBannerOptionsLeft'>
            <div className='optionsnavbarBanner'>
                <MenuIcon sx={{fontSize: "24px"}}/>
                <div className='alloptionsnavbarBanner'>
                    All
                </div>
            </div>
            {
                options.map((item,ind)=>{
                    return(
                        <div className='optionsnavbarBanner' key={ind}>
                <div className='alloptionsnavbarBanner'>
                    {item.name}
                </div>
            </div>
                    );
                })
            }
           
           
            
        </div>
        <div className='navbarBanneroptionsRight'>
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/RingsOfPower/400x39-SWM-NP._CB566063628_.jpg" alt='amazonprime'/>
        </div>
    </div>
  )
}

export default NavbarBanner