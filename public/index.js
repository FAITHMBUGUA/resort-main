import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Lazy-load App for faster initial loading
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={
      <div style={{
        color: 'white', 
        textAlign: 'center', 
        marginTop: '50px', 
        fontSize: '20px'
      }}>
        Loading Faith Resort...
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);
