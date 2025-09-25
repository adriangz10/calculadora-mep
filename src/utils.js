export const formatFecha = (fechaISO) => {
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
