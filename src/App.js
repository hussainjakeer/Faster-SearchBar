import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Fast Finder</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
