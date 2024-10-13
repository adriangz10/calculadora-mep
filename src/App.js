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
    <div className="container">
      <header></header>
      <section className="cotizacion">
        <p>La cotización del Dólar MEP hoy es:</p>
        <div className="precio">${valorVenta}</div>
        <p className="variacion">Ultima actualizacion {valorFecha}</p>
        {/* <button className="whatsapp-btn">Unite al WhatsApp Dólar Hoy</button> */}
      </section>
      <section className="conversor">
        <h2>Conversor de Dólar MEP a pesos</h2>
        <input
          type="number"
          value={montoDolares}
          placeholder="Ingresa monto en dólares"
          onChange={enviarDato}
        />
        <table>
          <thead>
            <tr>
              <th>Tipo de Dólar</th>
              <th>Equivalente en Pesos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dólar MEP</td>
              <td>{equivalentePesos}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer /> {Footer}
    </div>
  );
};

export default App;
