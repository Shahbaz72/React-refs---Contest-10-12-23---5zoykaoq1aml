import React, { useState, useRef } from 'react';
import '../styles/App.css';

const App = () => {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayedEmail, setDisplayedEmail] = useState('');
  const [displayedPassword, setDisplayedPassword] = useState('');

  const handleSubmit = () => {
    if (!email) {
      inputEmailRef.current.focus();
    } else if (!password) {
      inputPasswordRef.current.focus();
    } else {
      setDisplayedEmail(email);
      setDisplayedPassword(password);
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
      <p id="emailText">Your Email : {displayedEmail}</p>
      <p id="passwordText">Your Password : {displayedPassword}</p>
    </div>
  );
};

export default App;
