import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar-container">
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search for products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-bar-button">
                <SearchIcon />
            </button>
        </form>
    );
}

export default SearchBar;
