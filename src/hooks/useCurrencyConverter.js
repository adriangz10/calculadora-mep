import { useState } from 'react';

export const useCurrencyConverter = (rateValue) => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('-');

  const convert = (value) => {
    if (!value || isNaN(value)) {
      setAmount(value);
      setConvertedAmount('-');
    } else {
      setAmount(value);
      const equivalent = (value * rateValue).toFixed(2);
      setConvertedAmount(equivalent);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    convert(value);
  };

  return {
    amount,
    convertedAmount,
    handleAmountChange,
  };
};
