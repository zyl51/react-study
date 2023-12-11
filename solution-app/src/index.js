import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Solution from './components/solution.jsx';
import Navbar from './components/navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Navbar />
      <Solution />
    </div>
  </React.StrictMode>
);