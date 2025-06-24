 
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => (
  <div className="bg-white rounded-2xl shadow p-4">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    <p className="text-sm text-gray-600 mb-2">{description}</p>
    {children}
  </div>
);
export default Card
