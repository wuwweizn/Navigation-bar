import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { NavItem, CardConfig } from './types';

interface AppProps {
  config?: CardConfig;
  hass?: any;
}

const App: React.FC<AppProps> = ({ config, hass }) => {
  const [activeId, setActiveId] = useState('');

  // Transform config items into NavItems
  // If config is provided, use it. Otherwise use defaults.
  const navItems: NavItem[] = config?.items && config.items.length > 0
    ? config.items.map(item => ({
        id: item.id || item.path, // fallback id to path if missing
        icon: item.icon || 'home',
        label: item.label || 'Link',
        path: item.path
      }))
    : [
        // Default Demo Items
        { id: 'home', icon: 'home', label: 'Home', path: '/lovelace/0' },
        { id: 'explore', icon: 'explore', label: 'Explore', path: '/lovelace/map' },
        { id: 'automations', icon: 'automations', label: 'Automations', path: '/config/automation' },
        { id: 'lights', icon: 'lights', label: 'Lights', path: '/lovelace/lights' },
      ];

  // Sync active state with URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      // Find the item that best matches the current path
      // We check if the current path *starts with* the item path to handle sub-views if needed,
      // or exact match. Exact match is usually safer for tabs.
      const found = navItems.find(item => currentPath === item.path);
      
      if (found) {
        setActiveId(found.id);
      } else if (navItems.length > 0 && !activeId) {
        // Optional: default to first item if nothing matches? 
        // Or keep empty to show no selection.
        // setActiveId(navItems[0].id);
      }
    }
  }, [window.location.pathname, navItems]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    
    const item = navItems.find(n => n.id === id);
    if (item && item.path) {
      // Home Assistant Navigation
      window.history.pushState(null, '', item.path);
      const event = new Event('location-changed', {
        bubbles: true,
        composed: true,
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Sidebar 
        items={navItems} 
        activeId={activeId} 
        onSelect={handleSelect} 
      />
    </div>
  );
};

export default App;