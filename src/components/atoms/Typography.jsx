import React from 'react';

export const Typography = ({ variant = 'p', children, className = '', ...props }) => {
  const Component = variant;
  
  let baseStyles = '';
  if (variant === 'h1') baseStyles = 'text-3xl font-bold mb-4';
  if (variant === 'h2') baseStyles = 'text-2xl font-bold mb-3';
  if (variant === 'h3') baseStyles = 'text-xl font-semibold mb-2';
  if (variant === 'p') baseStyles = 'text-base mb-4';
  if (variant === 'span') baseStyles = 'text-base';
  
  return (
    <Component className={`${baseStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
};
