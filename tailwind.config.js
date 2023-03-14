/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "660px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Images/heropng.png')",
        "signin-up": 'url("/src/assets/Images/signinsignupBg.jpg")',
        "authBg": "url('/src/assets/Images/signinsignupBg.jpg')"
      },
      colors: {
        brown: "#A1745D",
        fill: "#F1F1EF",
        fillT: "rgba(241, 241, 239, 0.8)",
        natural: "#F8F9FD",
        white: "#fff",
        whiteT: 'rgba(255, 255, 255, 0.1)',
        light:'#E9E9E0'
      },
    },
  },
  plugins: [],
};
