import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Optional: Create a root container with strict mode & suspense fallback for lazy loading
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div style={{color: 'white', textAlign: 'center', marginTop: '50px'}}>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
