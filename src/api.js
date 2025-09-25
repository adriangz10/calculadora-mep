import axios from "axios";

const API_BASE_URL = "https://dolarapi.com/v1";

export const getRates = async (currency) => {
  let url = "";
  switch (currency) {
    case "ars":
      url = `${API_BASE_URL}/dolares`;
      break;
    case "brl":
      url = `${API_BASE_URL}/cotizaciones/brl`;
      break;
    case "uyu":
      url = `${API_BASE_URL}/cotizaciones/uyu`;
      break;
    default:
      throw new Error("Moneda no soportada");
  }
  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
