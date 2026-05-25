import React from 'react';
import './Card.css';

export const Card = ({ children, className = '', onClick, active, style, ...props }) => {
  return (
    <div 
      className={`card ${active ? 'card-active' : ''} ${className} ${onClick ? 'card-clickable' : ''}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
