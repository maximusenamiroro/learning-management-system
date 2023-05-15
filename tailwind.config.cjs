 /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '840px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        
        'xs': {'max': '580px'},
      },
      extend: {
        width:{
          '128':'24rem',
          '134':'24.4rem',
        },
       
        colors: {
          primary: "#131E47 ",
          players: "#03CFD633"
        },
        text:{
         '3xl': "2em",
         '4xl':'20px',
         '5xl': '18rem'
        },
      },
    },
      plugins: [],
  };
    