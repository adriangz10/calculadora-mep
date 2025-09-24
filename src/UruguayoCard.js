import React, { useState } from 'react';

const UruguayoCard = ({ rate }) => {
  const [montoUruguayos, setMontoUruguayos] = useState('');
  const [equivalentePesos, setEquivalentePesos] = useState('-');

  const convert = (amount, rateValue) => {
    if (!amount || isNaN(amount)) {
      setMontoUruguayos(amount);
      setEquivalentePesos('-');
    } else {
      setMontoUruguayos(amount);
      const equivalente = (amount * rateValue).toFixed(2);
      setEquivalentePesos(equivalente);
    }
  }

  const handleAmountChange = (event) => {
    const valor = event.target.value;
    convert(valor, rate.venta);
  };

  const formatFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return fecha.toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow mb-5 dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 mb-5 dark:text-white">
        Cotizacion del {rate.nombre} hoy es:
      </h2>
      <div className="text-5xl font-bold text-gray-800 my-5 dark:text-white">
        ${rate.venta.toLocaleString('es-ES')}
      </div>
      <p className="text-base text-gray-600 dark:text-white">
        Última actualización:{" "}
        <span className="text-blue-500 font-bold">
          {formatFecha(rate.fechaActualizacion)}
        </span>
      </p>
      <div className="conversor mt-5">
        <input
          type="number"
          className="w-full p-2 mb-2 border border-gray-300 rounded text-base dark:bg-gray-700 dark:text-white"
          value={montoUruguayos}
          placeholder="Ingresa monto en uruguayos"
          onChange={handleAmountChange}
        />
        <p className="text-lg text-gray-600 dark:text-white">Equivalente en Pesos:</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          {equivalentePesos === '-' ? equivalentePesos : Number(equivalentePesos).toLocaleString('es-ES')}
        </p>
      </div>
    </div>
  );
};

export default UruguayoCard;