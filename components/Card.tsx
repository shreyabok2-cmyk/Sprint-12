import React from 'react';

interface CardProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'disabled';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = 'primary',
}) => {
  let bgClasses = 'bg-white border-gray-200 text-gray-900';
  if (variant === 'secondary') {
    bgClasses = 'bg-gray-100 border-gray-300 text-gray-800';
  } else if (variant === 'disabled') {
    bgClasses = 'bg-gray-200 border-gray-200 text-gray-400 opacity-60 cursor-not-allowed';
  }

  return (
    <div className={`p-6 rounded-lg border shadow-sm max-w-sm ${bgClasses} dark:bg-zinc-800 dark:border-zinc-700 dark:text-white`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};