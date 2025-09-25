import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InstallPWAButton from "./components/InstallPWAButton";
import CurrencyCard from "./components/CurrencyCard";
import { getRates } from "./api";

const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|ipad|iphone|ipod/i.test(userAgent);
};

const App = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("ars");
  const [isDarkMode, setDarkMode] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (isMobile()) {
        setShowInstallButton(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  const handleCloseInstallBanner = () => {
    setShowInstallButton(false);
  };


  const obtenerDatos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRates(selectedCurrency);
      setRates(data);
    } catch (error) {
      setError(`Error al obtener las cotizaciones de ${selectedCurrency}.`);
      console.error(`Error al obtener datos de ${selectedCurrency}:`, error);
    } finally {
      setLoading(false);
    }
  }, [selectedCurrency]);

  useEffect(() => {
    obtenerDatos();
  }, [selectedCurrency, obtenerDatos]);

  const renderContent = () => {
    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    const currencyPlaceholders = {
      ars: "dólares",
      brl: "reales",
      uyu: "uruguayos",
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rates.map((rate) => (
          <CurrencyCard
            key={rate.casa}
            rate={rate}
            currencyPlaceholder={currencyPlaceholders[selectedCurrency]}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''} dark:bg-gray-900 dark:text-white`}>
      <Header selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto max-w-7xl text-center text-2xl px-4 flex justify-center">
          {renderContent()}
        </div>
      </main>
      <Footer />
      {showInstallButton && (
        <InstallPWAButton
          onInstallClick={handleInstallClick}
          onClose={handleCloseInstallBanner}
        />
      )}
    </div>
  );
};

export default App;
