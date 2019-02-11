import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../counter/counter';
const Splash = ({ currentUser}) => {
  // debugger; 
  const counter = () => (
    <div className="splash-counter">
      <Counter/>
    </div>
  );

  const splash = () => (
    <div>
      <h1>Splash Component</h1>
      <h2>Login/Signup to use increment feature</h2>
    </div>
  );

  return currentUser ? counter() : splash();
};

export default Splash;