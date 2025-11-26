import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#0ea5e9',
        color: 'white',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </button>
  );
}
