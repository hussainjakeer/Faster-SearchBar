import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import data from '../data/list.json';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredSuggestions = data.filter(item =>
        item.country.toLowerCase().includes(query.toLowerCase()) ||
        item.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((item, index) => (
            <SearchResult key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
