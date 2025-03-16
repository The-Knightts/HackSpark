// src/components/ui/button.tsx
import React from 'react';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  [key: string]: any;
}

export const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  ...props 
}: ButtonProps) => {
  // Base styles
  let variantClasses = '';
  let sizeClasses = '';
  
  // Variant styles
  switch (variant) {
    case 'default':
      variantClasses = 'bg-blue-600 text-white hover:bg-blue-700';
      break;
    case 'destructive':
      variantClasses = 'bg-red-600 text-white hover:bg-red-700';
      break;
    case 'outline':
      variantClasses = 'border border-gray-300 bg-transparent hover:bg-gray-100';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 text-gray-900 hover:bg-gray-300';
      break;
    case 'ghost':
      variantClasses = 'bg-transparent hover:bg-gray-100';
      break;
    case 'link':
      variantClasses = 'bg-transparent text-blue-600 underline-offset-4 hover:underline';
      break;
    default:
      variantClasses = 'bg-blue-600 text-white hover:bg-blue-700';
  }
  
  // Size styles
  switch (size) {
    case 'default':
      sizeClasses = 'h-10 px-4 py-2';
      break;
    case 'sm':
      sizeClasses = 'h-8 px-3 text-sm';
      break;
    case 'lg':
      sizeClasses = 'h-12 px-6 text-lg';
      break;
    case 'icon':
      sizeClasses = 'h-10 w-10';
      break;
    default:
      sizeClasses = 'h-10 px-4 py-2';
  }
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};