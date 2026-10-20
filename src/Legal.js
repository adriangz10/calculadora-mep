import React from "react";
import Footer from "./Footer";

const Legal = ({ titulo, actualizado, children }) => {
  return (
    <div className="container mx-auto max-w-2xl text-lg my-10 px-4">
      <a href="/" className="text-blue-500 text-base">
        &larr; Volver a la calculadora
      </a>
      <article className="bg-white p-5 rounded-lg shadow my-5 text-left text-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{titulo}</h1>
        <p className="text-sm text-gray-500 mb-5">
          Última actualización: {actualizado}
        </p>
        {children}
      </article>
      <Footer />
    </div>
  );
};

export const Seccion = ({ titulo, children }) => (
  <section className="mb-5">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h2>
    <div className="text-base space-y-2">{children}</div>
  </section>
);

export default Legal;
