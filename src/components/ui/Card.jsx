import React from 'react';

export function Card({ children, style, ...props }) {
  return (
    <div
      {...props}
      style={{
        background: 'rgba(255,255,255,0.15)',
        padding: '18px',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 8px 25px rgba(0,0,0,0.25)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div style={{ marginBottom: '12px' }}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 style={{ marginBottom: '5px', fontSize: '1.25rem' }}>{children}</h3>;
}

export function CardDescription({ children }) {
  return <p style={{ color: '#eee', marginBottom: '5px' }}>{children}</p>;
}

export function CardContent({ children }) {
  return <div style={{ marginBottom: '12px' }}>{children}</div>;
}

export function CardFooter({ children }) {
  return <div>{children}</div>;
}
