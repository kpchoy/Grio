import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  // debugger; 
  const sessionLinks = () => (
    <nav>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Sign up!</Link>
      </div>
    </nav>
  );

  const personalGreeting = () => (
    <div>
      <h2>Welcome, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
