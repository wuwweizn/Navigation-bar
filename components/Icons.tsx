import React from 'react';

interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    stroke="currentColor"
    strokeWidth="0" // Filled icon for home usually in active state, but outline in inactive? 
    // The image shows the active icon as white and filled/thick.
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

export const CompassIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const CloverIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 9h6v6H9z" /> {/* Center */}
    <path d="M15 9c0-3.3-2.7-6-6-6S3 5.7 3 9s2.7 6 6 6" /> {/* Top Left */}
    <path d="M9 15c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" /> {/* Bottom Left */}
    <path d="M15 9c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6" /> {/* Top Right - adjust */}
    {/* Correcting to a 4-petal look closer to image */}
    <path d="M16.17 7.83a4 4 0 1 0-5.66-5.66l-1.41 1.41 1.41 1.41 5.66 2.84z" fill="none" stroke="none"/> {/* Cleaner manual path below */}
    <path d="M12 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4-4c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm-12 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4 1.79-4 4z" />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-7 7c0 2 2 3 2 4.5V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.5c0-1.5 2-2.5 2-4.5a7 7 0 0 0-7-7z" />
  </svg>
);