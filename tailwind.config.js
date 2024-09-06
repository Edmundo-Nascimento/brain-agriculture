/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o modo escuro usando uma classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5ea487', // Verde principal
          dark: '#41725E',   // Verde escuro (para texto ou acentos)
        },
        secondary: {
          DEFAULT: '#262626', // Cinza escuro para textos
        },
        accent: {
          red: '#EF4444',     // Vermelho para gráficos e alertas
          orange: '#F97316',  // Laranja para gráficos e alertas
          yellow: '#F59E0B',  // Amarelo para gráficos e alertas
        },
        background: '#F9FAFB', // Fundo geral
        card: '#FFFFFF', // Fundo dos cartões
      },
    },
  },
  plugins: [],
}

