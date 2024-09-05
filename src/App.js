import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SearchResults from './components/SearchResults';
import homeProduct from './data/homeProduct.json';  // Correct file name
import { CartProvider } from './pages/CartContext'; // Import CartProvider

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [results, setResults] = useState([]);

    const handleSearch = (query) => {
      console.log('Handling search with query:', query); // Debug log
  
      const filteredResults = homeProduct.product.filter((product) =>
          product.itemTitle.toLowerCase().includes(query.toLowerCase())
      );
      
      console.log('Search results:', filteredResults); // Debug log
  
      setResults(filteredResults);
  };

    return (
    <CartProvider>
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/product/:id" element={<ProductDetails />} /> 
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/search-results" element={<SearchResults results={results} />} />
            </Routes>
        </Router>
        </CartProvider>
    );
}

export default App;
