import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from './SearchBar'; // Import SearchBar component
import india from '../assets/flag.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    let onSearch = props.onSearch; // Receive onSearch prop

    return (
        <nav className='navbar'>
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>

            <div className="deliver-button">
                <LocationOnIcon className="deliver-icon" />
            </div>
            <div className='deliver-location'>
                <div className='top'>Delivering to Lucknow 226002</div>
                <div className='bottom'>Update Location</div>
            </div>

            <select className="search-dropdown">
                <option value="all">All</option>
                <option value="elec">Electronics</option>
                <option value="book">Books</option>
                <option value="fash">Fashion</option>
            </select>

            {/* Pass onSearch to SearchBar */}
            <SearchBar onSearch={onSearch} />

            <img src={india} className='indian flag' />

            <div>
                <select className='language'>
                    <option value="EN">EN</option>
                    <option value="LA">LA</option>
                    <option value="GE">GE</option>
                    <option value="HI">HI</option>
                    <option value="KO">KO</option>
                </select>
            </div>

            <div className='login'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>
                            Hello, sign in 
                        </button>
                    </Link>
                }
            </div>
            <div className='return'>
                <div className='topreturn'>Return &</div>
                <div className='bottomreturn'>Orders</div>
            </div>
            <Link to="/cart" className="cart-button">
                <button>
                    <ShoppingCartIcon className="cart-icon" />
                    Cart
                </button>
            </Link>
        </nav>
    );
}

export default Navbar;
