 /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      square:{
        width: "20%"
      },
      extend: {
        colors: {
          primary: "#131E47 ",
          players: "#03CFD633"
        },
      },
    },
    plugins: [],
  };
    