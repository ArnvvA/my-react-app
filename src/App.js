import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.webp'; // If logo is in src

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);


    //login logic here


  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <header className="App-header">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Store Number:
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
