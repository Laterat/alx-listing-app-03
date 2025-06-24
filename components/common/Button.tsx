import React from 'react';
import { ButtonProps } from '../../interfaces';

 const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-4 py-2 rounded-2xl shadow hover:shadow-md transition disabled:opacity-50"
  >
    {label}
  </button>
);

export default Button
