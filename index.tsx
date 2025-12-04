import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardConfig } from './types';
import './index.css'; // Import Tailwind styles

class HaSidebarCard extends HTMLElement {
  private _config?: CardConfig;
  private _hass?: any;
  private root?: ReactDOM.Root;
  private mountPoint?: HTMLDivElement;

  // Home Assistant method: Set configuration
  setConfig(config: CardConfig) {
    if (!config.items) {
      // We can allow defaults, but it's good practice to validate
      // throw new Error("You need to define 'items' in your configuration");
    }
    this._config = config;
    this.render();
  }

  // Home Assistant method: Receive hass object (state, etc)
  set hass(hass: any) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      // Adding a class for scoping if needed, though Tailwind uses specific classes
      this.mountPoint.className = 'ha-sidebar-card-root'; 
      this.appendChild(this.mountPoint);
      this.root = ReactDOM.createRoot(this.mountPoint);
    }
    this.render();
  }

  render() {
    if (!this._config || !this.root || !this._hass) return;

    this.root.render(
      <React.StrictMode>
        {/* We pass the hass object to App if needed for state, but mainly config for nav */}
        <App config={this._config} hass={this._hass} />
      </React.StrictMode>
    );
  }

  // Define card size (optional, helps HA layout)
  getCardSize() {
    return 6;
  }
}

// Register the custom element
const customElementName = 'ha-sidebar-card';
if (!customElements.get(customElementName)) {
  customElements.define(customElementName, HaSidebarCard);
}

// Add card to picker in UI (optional)
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: customElementName,
  name: "Sidebar Navigation Card",
  preview: true,
  description: "A vertical sidebar navigation card inspired by HA designs."
});