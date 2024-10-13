import React from 'react';
import './Footer.css'; // Asegúrate de tener estilos separados si deseas

const Footer = () => {
    return (
        <footer className="footer">
            <p>Desarrollado por <strong>adriangz10</strong></p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/adriiangomez10" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/adriangz10" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
