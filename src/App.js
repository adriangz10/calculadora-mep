import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./Footer";
import DollarCard from "./DollarCard";
import RealCard from "./RealCard";
import UruguayoCard from "./UruguayoCard";
import Header from "./Header";

const App = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("ars");
  const [isDarkMode, setDarkMode] = useState(false);

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

  const obtenerDatos = async () => {
    setLoading(true);
    setError(null);
    let apiUrl = "";
    switch (selectedCurrency) {
      case "ars":
        apiUrl = "https://dolarapi.com/v1/dolares";
        break;
      case "brl":
        apiUrl = "https://dolarapi.com/v1/cotizaciones/brl";
        break;
      case "uyu":
        apiUrl = "https://dolarapi.com/v1/cotizaciones/uyu";
        break;
      default:
        return;
    }

    try {
      const response = await axios.get(apiUrl);
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setRates(data);
    } catch (error) {
      setError(`Error al obtener las cotizaciones de ${selectedCurrency}.`);
      console.error(`Error al obtener datos de ${selectedCurrency}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, [selectedCurrency]);

  const renderContent = () => {
    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    switch (selectedCurrency) {
      case "ars":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rates.map((rate) => (
              <DollarCard key={rate.casa} rate={rate} />
            ))}
          </div>
        );
      case "brl":
        return (
          <div className="flex justify-center">
            {rates.map((rate) => (
              <div key={rate.casa} className="w-full max-w-md">
                <RealCard rate={rate} />
              </div>
            ))}
          </div>
        );
      case "uyu":
        return (
          <div className="flex justify-center">
            {rates.map((rate) => (
              <div key={rate.casa} className="w-full max-w-md">
                <UruguayoCard rate={rate} />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
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
    </div>
  );
};

export default App;
