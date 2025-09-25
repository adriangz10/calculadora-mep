import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ selectedCurrency, setSelectedCurrency, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <h1 className="text-xl font-bold">Conversor de Monedas</h1>
      <div className="flex items-center">
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded mr-4"
        >
          <option value="ars">Dólares a Pesos Argentinos</option>
          <option value="brl">Reales a Pesos Argentinos</option>
          <option value="uyu">Uruguayos a Pesos Argentinos</option>
        </select>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;