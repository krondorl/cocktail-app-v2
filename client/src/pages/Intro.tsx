import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="App app-intro">
      <h1 className="welcome-title">Welcome to Cocktail App v2</h1>
      <div>
        <img className="cocktail-cover-img" alt="Cocktail" src="cocktails.png"/>
      </div>
      <div>
        <Link to="/cocktail" className="enter">Enter webpage</Link>
      </div>
    </div>
  );
}

export default Intro;