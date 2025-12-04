import React from 'react';
import { NavItem } from '../types';
import { HomeIcon, CompassIcon, CloverIcon, LightbulbIcon } from './Icons';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ha-icon': any;
    }
  }
}

interface SidebarProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeId, onSelect }) => {
  
  // Helper to render the correct icon based on string ID or mdi: prefix
  const renderIcon = (iconName: string, isActive: boolean) => {
    const className = `w-7 h-7 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'}`;

    // 1. Check for Home Assistant standard icons (mdi:...)
    if (iconName.startsWith('mdi:')) {
      return (
        <ha-icon 
          icon={iconName} 
          className={className}
          style={{ 
            // ha-icon sometimes needs explicit style for color inheritance
            color: isActive ? 'white' : undefined,
            '--mdc-icon-size': '28px' 
          }} 
        />
      );
    }

    // 2. Fallback to internal fancy SVGs
    switch (iconName) {
      case 'home': return <HomeIcon className={className} />;
      case 'explore': return <CompassIcon className={className} />;
      case 'automations': return <CloverIcon className={className} />;
      case 'lights': return <LightbulbIcon className={className} />;
      default: return <HomeIcon className={className} />; // Fallback
    }
  };

  return (
    <nav className="bg-white rounded-[50px] shadow-lg py-4 px-2 w-[80px] flex flex-col items-center gap-6 h-fit shrink-0 select-none">
      {items.map((item) => {
        const isActive = activeId === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              relative flex items-center justify-center 
              w-full aspect-[4/7] max-h-[100px] min-h-[80px]
              transition-all duration-300 ease-in-out
              group focus:outline-none cursor-pointer
              -webkit-tap-highlight-color-transparent
            `}
            aria-label={item.label}
          >
            {/* Active Pill Background */}
            <div
              className={`
                absolute inset-x-1 inset-y-0
                rounded-[40px]
                transition-all duration-300
                ${isActive ? 'bg-[#00b0ff] opacity-100 scale-100' : 'bg-transparent opacity-0 scale-90'}
              `}
            />

            {/* Icon Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
              {renderIcon(item.icon, isActive)}
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default Sidebar;