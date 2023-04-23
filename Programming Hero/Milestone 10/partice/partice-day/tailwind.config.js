/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor: "#F9A826"
      },
    },
    fontFamily:{
      display:['Nunito',"sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}

