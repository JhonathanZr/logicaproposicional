import React from 'react';
import './Button.css';

export const Button = ({ children, variant = 'primary', onClick, disabled, className = '', ...props }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
