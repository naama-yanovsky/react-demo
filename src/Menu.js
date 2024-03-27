// Menu.js
import React from 'react';
import './Menu.css';

function Menu({ onClose }) {
  return (
    <div className="menu">
      {/* Menu content */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Menu;
