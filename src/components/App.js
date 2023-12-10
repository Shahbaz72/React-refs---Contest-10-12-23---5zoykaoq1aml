import React, { useState, useRef } from 'react';
import '../styles/App.css';

const App = () => {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email) {
      inputEmailRef.current.focus();
    } else if (!password) {
      inputPasswordRef.current.focus();
    }
  };

  return (
    <div id="main">
      Email
      <input
        id="inputEmail"
        type="text"
        value={email}
        ref={inputEmailRef}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      Password
      <input
        id="inputPassword"
        type="text"
        value={password}
        ref={inputPasswordRef}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id="passwordText">Your Password : {password}</p>
    </div>
  );
};

export default App;
