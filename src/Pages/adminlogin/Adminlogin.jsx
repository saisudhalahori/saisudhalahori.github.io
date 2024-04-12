// Login.js
import React, { useState } from 'react';
import './Adminlogin.scss';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authDeclined, authorized } from '../../Redux/Authentication';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
      console.log(user)

        dispatch(authorized(true));
        navigate('/admin');
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
          setError('Incorrect password. Please try again.');
        } else if (errorCode === 'auth/user-not-found') {
          setError('User not found. Please check your email.');
        } else {
          setError(errorMessage);
          dispatch(authDeclined(errorCode));
        }
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login <br/><img src="\leafimage.png"/></h2>
     
        <div className="input-group">
        {error && <p className="error-message">{error}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
