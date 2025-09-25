import React from 'react';
import { useCurrencyConverter } from '../hooks/useCurrencyConverter';
import { formatFecha } from '../utils';

const CurrencyCard = ({ rate, currencyName, currencyPlaceholder }) => {
  const { amount, convertedAmount, handleAmountChange } = useCurrencyConverter(rate.venta);

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
          value={amount}
          placeholder={`Ingresa monto en ${currencyPlaceholder}`}
          onChange={handleAmountChange}
        />
        <p className="text-lg text-gray-600 dark:text-white">Equivalente en Pesos:</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          {convertedAmount === '-' ? convertedAmount : Number(convertedAmount).toLocaleString('es-ES')}
        </p>
      </div>
    </div>
  );
};

export default CurrencyCard;
