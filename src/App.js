import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

// dc633a53

const API_URL = 'https://www.omdbapi.com?apikey=dc633a53'

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&d=${title}`);
    const data = await response.json();


  }

  useEffect(() =>{
    searchMovies('Batman');

  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
        placeholder='Search for movies' 
        value='Batman' />
      </div>
    </div>
  );
}

export default App;
