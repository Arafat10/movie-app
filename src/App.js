import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

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
    <h1>
      Hello, World
    </h1>
  );
}

export default App;
