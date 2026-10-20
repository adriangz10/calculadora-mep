import React from "react";
import Legal, { Seccion } from "./Legal";

const Terminos = () => {
  return (
    <Legal titulo="Términos y Servicios" actualizado="20 de octubre de 2026">
      <Seccion titulo="1. Aceptación">
        <p>
          Al usar Calculadora de Dólar MEP aceptás estos términos. Si no estás
          de acuerdo, te pedimos que no utilices el sitio.
        </p>
      </Seccion>

      <Seccion titulo="2. Descripción del servicio">
        <p>
          El sitio muestra la cotización del Dólar MEP y ofrece un conversor de
          dólares a pesos argentinos. Es un servicio gratuito y de carácter
          informativo.
        </p>
      </Seccion>

      <Seccion titulo="3. Carácter informativo">
        <p>
          Los valores provienen de dolarapi.com y pueden presentar demoras,
          errores o diferencias respecto de la cotización real de mercado. Nada
          de lo publicado constituye asesoramiento financiero, de inversión ni
          impositivo.
        </p>
      </Seccion>

      <Seccion titulo="4. Limitación de responsabilidad">
        <p>
          El servicio se ofrece "tal cual", sin garantías de disponibilidad ni
          exactitud. El desarrollador no se responsabiliza por pérdidas o daños
          derivados del uso de la información o de la imposibilidad de acceder
          al sitio.
        </p>
      </Seccion>

      <Seccion titulo="5. Uso aceptable">
        <p>
          Te comprometés a no usar el sitio para fines ilícitos, ni intentar
          vulnerarlo, sobrecargarlo o extraer su contenido de forma abusiva.
        </p>
      </Seccion>

      <Seccion titulo="6. Propiedad intelectual">
        <p>
          El diseño y el código de la aplicación pertenecen a su desarrollador,{" "}
          <strong>adriangz10</strong>. Las marcas y servicios de terceros
          mencionados pertenecen a sus respectivos titulares.
        </p>
      </Seccion>

      <Seccion titulo="7. Modificaciones">
        <p>
          Podemos modificar o discontinuar el servicio, y actualizar estos
          términos en cualquier momento. El uso continuado implica la aceptación
          de los cambios.
        </p>
      </Seccion>

      <Seccion titulo="8. Ley aplicable">
        <p>
          Estos términos se rigen por las leyes de la República Argentina.
          Consulta también nuestra{" "}
          <a href="/privacidad" className="text-blue-500">
            Política de Privacidad
          </a>
          .
        </p>
      </Seccion>
    </Legal>
  );
};

export default Terminos;
