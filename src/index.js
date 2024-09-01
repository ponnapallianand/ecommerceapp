// Correct import for createRoot
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' instead of 'react-dom'
import App from './App';

// Use createRoot from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
