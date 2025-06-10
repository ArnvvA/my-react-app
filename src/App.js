import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.webp';
import SecondPage from './SecondPage';

function LoginPage({ onLogin, storeNumber, setStoreNumber, password, setPassword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <header className="App-header">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Store Number:
            <input
              type="text"
              value={storeNumber}
              onChange={e => setStoreNumber(e.target.value)}
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
  );
}

function App() {
  const [storeNumber, setStoreNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    setStoreNumber('');
    setPassword('');
  };

  return (
    <Router>
      <div className="App">
        <img src={logo} alt="Logo" className="logo" />
        {loggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            LOG OUT
          </button>
        )}
        <Routes>
          <Route
            path="/login"
            element={
              loggedIn
                ? <Navigate to="/details" />
                : <LoginPage
                    onLogin={() => setLoggedIn(true)}
                    storeNumber={storeNumber}
                    setStoreNumber={setStoreNumber}
                    password={password}
                    setPassword={setPassword}
                  />
            }
          />
          <Route
            path="/details"
            element={
              loggedIn
                ? <SecondPage />
                : <Navigate to="/login" />
            }
          />
          {/* Redirect root to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
