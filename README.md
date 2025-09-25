1. Descripción General

  Esta es una aplicación web de una sola página (SPA) desarrollada en React que funciona como una
  "Calculadora de cotizaciones de distintas divizas". Su objetivo principal es proporcionar al usuario la cotización en tiempo real
  del Dólar y permitirle convertir un monto de dólares a pesos argentinos según esa cotización.

  2. Características

   * Cotización en Tiempo Real: Muestra el valor de venta actualizado del Dólar.
   * Fecha de Actualización: Indica la fecha y hora de la última actualización de la cotización.
   * Conversor de Moneda: Permite a los usuarios ingresar un monto en dólares estadounidenses (USD) para ver
     su equivalente en pesos argentinos (ARS).
   * Interfaz Limpia: Utiliza Tailwind CSS para un diseño simple, moderno y responsivo.

  3. Tecnologías Utilizadas

   * React: Biblioteca de JavaScript para construir la interfaz de usuario.
   * Axios: Cliente HTTP para realizar la solicitud a la API de cotizaciones.
   * Tailwind CSS: Framework de CSS para el diseño y estilo de la aplicación.
   * dolarapi.com: API externa utilizada para obtener los datos de la cotización.
   * Custom Hooks: para la logica de la conversion de la mondea.

  4. API de Referencia

  La aplicación consume datos del siguiente endpoint:

   * URL: https://dolarapi.com/v1/dolares/bolsa
   * Método: GET
   * Respuesta (Ejemplo):

   1     {
   2       "moneda": "USD",
   3       "casa": "bolsa",
   4       "nombre": "Bolsa",
   5       "compra": 1234.56,
   6       "venta": 1239.99,
   7       "fechaActualizacion": "2024-05-16T15:49:00.000Z"
   8     }
      La aplicación utiliza los campos venta y fechaActualizacion.

  5. Estructura del Proyecto

    dolar-mep/
    ├── public/ # Archivos estáticos y HTML principal
    ├── src/
    │   ├── components/ # Componentes de React
    │   │   ├── CurrencyCard.js # Componente genérico para mostrar la cotización
    │   │   ├── DarkModeToggle.js # Componente para el botón de modo oscuro
    │   │   ├── Footer.js # Componente del pie de página
    │   │   ├── Header.js # Componente de la cabecera
    │   │   └── InstallPWAButton.js # Componente para el botón de instalación de PWA
    │   ├── hooks/ # Custom hooks de React
    │   │   └── useCurrencyConverter.js # Hook para la lógica de conversión de moneda
    │   ├── App.css # Estilos específicos para App.js
    │   ├── App.js # Componente principal de la aplicación
    │   ├── index.css # Estilos globales
    │   ├── index.js # Punto de entrada de la aplicación
    │   ├── api.js # Centraliza las llamadas a la API
    │   └── utils.js # Funciones de utilidad
    ├── .gitignore # Archivos ignorados por Git
    ├── package.json # Dependencias y scripts del proyecto
    ├── README.md # Documentación del proyecto
    └── tailwind.config.js # Configuración de Tailwind CSS


  6. Scripts Disponibles

  En el directorio del proyecto, puedes ejecutar:

  npm start

  Ejecuta la aplicación en modo de desarrollo.
  Abre http://localhost:3000 (http://localhost:3000) para verla en tu navegador.

  npm test

  Lanza el corredor de pruebas en modo interactivo.

  npm run build

  Construye la aplicación para producción en la carpeta build.