import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        
      </div>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="input-container">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="hello@reallygreatsite.com"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
