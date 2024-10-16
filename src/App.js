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
    setMontoDolares(valor);
    const equivalente = (valor * valorVenta).toFixed(2);
    setEquivalentePesos(equivalente);
  };

  useEffect(() => {
    obtenerValorVenta();
    obtenerFechaActualizacion();
  }, []);

  return (
    <div class="container mx-auto max-w-2xl text-center text-2xl my-20 px-4">
      <header>
        <h1 class="text-2xl font-bold text-gray-800 mb-5">
          Calculadora de Dólar MEP
        </h1>
      </header>
      <section class="cotizacion bg-white p-5 rounded-lg shadow mb-5">
        <p class="text-lg text-2xl text-gray-600">La cotización del Dólar MEP hoy es:</p>
        <div class="precio text-5xl font-bold text-gray-800 my-5">
          ${valorVenta}
        </div>
        <p class="variacion text-base text-gray-600">
          Última actualización:{" "}
          <span class="text-blue-500 font-bold">{valorFecha}</span>
        </p>
        {/* <!-- <button class="whatsapp-btn bg-green-500 text-white py-2 px-4 rounded text-base mt-2 hover:bg-green-600">Unite al WhatsApp Dólar Hoy</button> --> */}
      </section>
      <section class="conversor bg-white p-5 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-5">
          Conversor de Dólar MEP a pesos
        </h2>
        <input
          type="number"
          class="w-full p-2 mb-5 border border-gray-300 rounded text-base"
          value={montoDolares}
          placeholder="Ingresa monto en dólares"
          onChange={enviarDato}
        />
        <table class="w-full border-collapse mt-2">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-2 font-bold">
                Tipo de Dólar
              </th>
              <th class="border border-gray-300 p-2 font-bold">
                Equivalente en Pesos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">Dólar MEP</td>
              <td class="border border-gray-300 p-2">{equivalentePesos}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer /> {Footer}
    </div>
  );
};

export default App;
