import React from 'react';

const InstallPWAButton = ({ onInstallClick, onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 flex items-center justify-between shadow-lg z-50">
      <p className="text-sm md:text-base">¿Quieres instalar esta aplicación en tu dispositivo?</p>
      <div className="flex items-center">
        <button
          onClick={onInstallClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Instalar
        </button>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default InstallPWAButton;
