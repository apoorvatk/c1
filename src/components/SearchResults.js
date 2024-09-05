import React from 'react';
import ProductCard from './ProductCard';
import './SearchResults.css';

function SearchResults({ results }) {
    console.log('Search results prop:', results);  // Debugging
    return (
        <div className="search-results">
            {results.length > 0 ? (
                results.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResults;
