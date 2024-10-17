import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./Footer";


const App = () => {
  const [valorVenta, setValorVenta] = useState(0);
  const [valorFecha, setFecha] = useState("");
  const [montoDolares, setMontoDolares] = useState("");
  const [equivalentePesos, setEquivalentePesos] = useState("-");

  const apiUrl = "https://dolarapi.com/v1/dolares/bolsa";

  const obtenerValorVenta = async () => {
    try {
      const response = await axios.get(apiUrl);
      setValorVenta(response.data.venta);
    } catch (error) {
      console.error("Error al obtener el valor de venta:", error);
    }
  };

  const obtenerFechaActualizacion = async () => {
    try {
      const response = await axios.get(apiUrl);
      const fechaISO = response.data.fechaActualizacion;

      const fecha = new Date(fechaISO);

      const opciones = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);

      setFecha(fechaFormateada);
    } catch (error) {
      console.error("Error al obtener el valor de la fecha", error);
    }
  };

  const enviarDato = (event) => {
    const valor = event.target.value;

    if (!valor || isNaN(valor)) {
      setMontoDolares(valor);
      setEquivalentePesos("-");
    } else {
      setMontoDolares(valor);
      const equivalente = (valor * valorVenta).toFixed(2);
      setEquivalentePesos(equivalente);
    }
  };

  useEffect(() => {
    obtenerValorVenta();
    obtenerFechaActualizacion();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl text-center text-2xl my-20 px-4">
      <header>
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Calculadora de Dólar MEP
        </h1>
      </header>
      <section className="cotizacion bg-white p-5 rounded-lg shadow mb-5">
        <p className="text-lg text-2xl text-gray-600">La cotización del Dólar MEP hoy es:</p>
        <div className="precio text-5xl font-bold text-gray-800 my-5">
          ${valorVenta.toLocaleString("es-ES")}
        </div>
        <p className="variacion text-base text-gray-600">
          Última actualización:{" "}
          <span className="text-blue-500 font-bold">{valorFecha}</span>
        </p>
      </section>
      <section className="conversor bg-white p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Conversor de Dólar MEP a pesos
        </h2>
        <input
          type="number"
          className="w-full p-2 mb-5 border border-gray-300 rounded text-base"
          value={montoDolares}
          placeholder="Ingresa monto en dólares"
          onChange={enviarDato}
        />
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 font-bold">
                Tipo de Dólar
              </th>
              <th className="border border-gray-300 p-2 font-bold">
                Equivalente en Pesos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Dólar MEP</td>
              <td className="border border-gray-300 p-2">
                {equivalentePesos === "-" ? equivalentePesos : Number(equivalentePesos).toLocaleString("es-ES")}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer /> {Footer}
    </div>
  );
};

export default App;
