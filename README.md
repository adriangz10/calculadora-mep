<div align="center">

# 💵 Calculadora de Dólar MEP

**Cotización del Dólar MEP en tiempo real y conversor de dólares a pesos argentinos.**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Create React App](https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=createreactapp&logoColor=white)

</div>

---

## 📌 Sobre el proyecto

En Argentina, el **Dólar MEP** (Mercado Electrónico de Pagos, o "dólar bolsa") es una de las cotizaciones de referencia más usadas para ahorrar, cobrar servicios del exterior o calcular precios. Esta aplicación web permite consultar su valor actualizado al instante y convertir cualquier monto en dólares a su equivalente en pesos, sin registros ni publicidad.

## ✨ Funcionalidades

- **Cotización en vivo**: obtiene el valor de venta del Dólar MEP desde [DolarAPI](https://dolarapi.com) al cargar la página.
- **Fecha de última actualización**: muestra cuándo se actualizó la cotización, con formato legible en español.
- **Conversor USD → ARS**: calcula el equivalente en pesos a medida que el usuario escribe.
- **Formato numérico local**: separador de miles y decimales al estilo hispano (ej. `1.250.000,50`).
- **Validación de entrada**: si el campo está vacío o no es un número, se muestra un guion (`-`) en lugar de `NaN`.
- **Diseño responsive**: interfaz limpia construida con Tailwind CSS, adaptada a móvil y escritorio.
- **Páginas legales**: Términos y Condiciones y Política de Privacidad con un enrutado liviano propio, sin dependencias extra.

## 🛠️ Tecnologías

| Área | Herramientas |
| --- | --- |
| Frontend | React 18 (hooks: `useState`, `useEffect`) |
| Estilos | Tailwind CSS 3 |
| Peticiones HTTP | Axios |
| Datos | [DolarAPI](https://dolarapi.com) – endpoint `/v1/dolares/bolsa` |
| Tooling | Create React App, ESLint, Jest + Testing Library |

## 🧠 Qué aprendí / puntos técnicos

- Consumo de una **API REST pública** con `async/await` y manejo de errores.
- Manejo de **estado en React** para sincronizar la entrada del usuario con el resultado calculado.
- **Formateo de fechas y números** con la API de internacionalización (`toLocaleString`, `toLocaleDateString`).
- **Ruteo simple por `pathname`** para servir páginas estáticas sin agregar React Router.
- Componentes reutilizables (`Footer`, `Legal`, `Seccion`) para mantener un layout consistente.

## 📂 Estructura

```
src/
├── App.js          # Cotización + conversor (componente principal)
├── Footer.js       # Pie de página con redes y enlaces legales
├── Legal.js        # Layout reutilizable para páginas legales
├── Terminos.js     # Términos y Condiciones
├── Privacidad.js   # Política de Privacidad
└── index.js        # Punto de entrada y ruteo por URL
```

## 🚀 Cómo ejecutarlo

**Requisitos:** Node.js 16 o superior y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/adriangz10/calculadora-mep.git
cd calculadora-mep

# 2. Instalar dependencias
npm install

# 3. Levantar en modo desarrollo (http://localhost:3000)
npm start
```

Otros scripts disponibles:

| Comando | Descripción |
| --- | --- |
| `npm run build` | Genera la versión optimizada para producción en `build/` |
| `npm test` | Ejecuta los tests en modo interactivo |

## 🔮 Próximas mejoras

- [ ] Agregar otras cotizaciones (oficial, blue, CCL, cripto).
- [ ] Conversión inversa (pesos → dólares).
- [ ] Modo oscuro.
- [ ] Indicadores de carga y de error cuando la API no responde.
- [ ] Gráfico con la evolución histórica de la cotización.

## ⚠️ Aviso

Los valores provienen de DolarAPI y tienen fines **informativos**. No constituyen asesoramiento financiero.

## 👤 Autor

**Adrián Gómez** · [@adriangz10](https://github.com/adriangz10)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adriiangomez10)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/adriangz10)

---

<div align="center">⭐ Si te resultó útil, dejale una estrella al repo.</div>
