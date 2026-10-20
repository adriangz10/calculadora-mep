import React from "react";
import Legal, { Seccion } from "./Legal";

const Privacidad = () => {
  return (
    <Legal titulo="Política de Privacidad" actualizado="20 de octubre de 2026">
      <Seccion titulo="1. Introducción">
        <p>
          Calculadora de Dólar MEP es una aplicación web gratuita que muestra la
          cotización del Dólar MEP y permite convertir montos en dólares a
          pesos argentinos. Esta política explica qué información se trata al
          usarla.
        </p>
      </Seccion>

      <Seccion titulo="2. Información que recopilamos">
        <p>
          No solicitamos registro ni datos personales. El monto que ingresás en
          el conversor se procesa únicamente en tu navegador y no se envía ni se
          almacena en nuestros servidores.
        </p>
      </Seccion>

      <Seccion titulo="3. Servicios de terceros">
        <p>
          Para obtener la cotización consultamos la API pública de
          dolarapi.com. Al hacerlo, tu navegador realiza una solicitud a ese
          servicio, que puede registrar datos técnicos como tu dirección IP. Te
          recomendamos revisar sus propias políticas.
        </p>
        <p>
          El pie de página incluye íconos alojados en icons8.com y enlaces a
          LinkedIn y GitHub, que tienen sus propias políticas de privacidad.
        </p>
      </Seccion>

      <Seccion titulo="4. Cookies y almacenamiento">
        <p>
          La aplicación no utiliza cookies propias de seguimiento ni publicidad.
          Los servicios de terceros mencionados podrían utilizar las suyas.
        </p>
      </Seccion>

      <Seccion titulo="5. Seguridad">
        <p>
          Al no almacenar datos personales, el riesgo es mínimo. Aun así, el
          sitio se sirve mediante conexión segura cuando es posible.
        </p>
      </Seccion>

      <Seccion titulo="6. Cambios en esta política">
        <p>
          Podemos actualizar esta política en cualquier momento. La fecha de
          última actualización figura al inicio de la página.
        </p>
      </Seccion>

      <Seccion titulo="7. Contacto">
        <p>
          Si tenés dudas, escribinos a través de los enlaces de LinkedIn o
          GitHub del desarrollador, <strong>adriangz10</strong>, que figuran al
          pie de la página.
        </p>
      </Seccion>
    </Legal>
  );
};

export default Privacidad;
