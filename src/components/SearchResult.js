import React from 'react';

const SearchResult = ({ item }) => {
  return (
    <div className="search-result">
      <h3>{item.country}</h3>
      <p><strong>Capital:</strong> {item.capital}</p>
      <p><strong>Population:</strong> {item.population.toLocaleString()}</p>
      <p><strong>Language:</strong> {Array.isArray(item.official_language) ? item.official_language.join(', ') : item.official_language}</p>
      <p><strong>Currency:</strong> {item.currency}</p>
    </div>
  );
};

export default SearchResult;
