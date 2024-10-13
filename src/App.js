import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer';

const App = () => {
    const [valorVenta, setValorVenta] = useState(0);
    const [montoDolares, setMontoDolares] = useState('');
    const [equivalentePesos, setEquivalentePesos] = useState('-');

    const apiUrl = 'https://dolarapi.com/v1/dolares/bolsa';

    // Función para obtener el valor de venta del dólar
    const obtenerValorVenta = async () => {
        try {
            const response = await axios.get(apiUrl);
            setValorVenta(response.data.venta); // Guarda el valor de venta
        } catch (error) {
            console.error('Error al obtener el valor de venta:', error);
        }
    };

    // Función para manejar el cambio en el input
    const enviarDato = (event) => {
        const valor = event.target.value;
        setMontoDolares(valor);
        const equivalente = (valor * valorVenta).toFixed(2); // Calcula el equivalente en pesos
        setEquivalentePesos(equivalente); // Actualiza el equivalente
    };

    useEffect(() => {
        obtenerValorVenta();
    }, []);

    return (
        <div className="container">
            <header>
                
            </header>

            <section className="cotizacion">
                <p>La cotización del Dólar MEP hoy es:</p>
                <div className="precio">${valorVenta}</div>
                {/* <p className="variacion">y tiene una variación del <span>0.00%</span> con respecto al día anterior.</p>
                <button className="whatsapp-btn">Unite al WhatsApp Dólar Hoy</button> */}
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
            <Footer /> { Footer }
        </div>
    );
};

export default App;
