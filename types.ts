import React from 'react';

export interface NavItemConfig {
  id: string; 
  icon?: string; // Can be 'home', 'explore', or 'mdi:account'
  path: string; // The URL path
  label?: string; // Tooltip/Label
}

export interface CardConfig {
  type: string;
  items?: NavItemConfig[]; // User defined items from YAML
}

export interface NavItem {
  id: string;
  icon: string; // Changed from React.FC to string to support both presets and MDI
  label: string;
  path: string;
}

export enum ThemeColors {
  ActiveBlue = '#03A9F4',
  InactiveGray = '#444444',
  CardBg = '#FFFFFF',
}