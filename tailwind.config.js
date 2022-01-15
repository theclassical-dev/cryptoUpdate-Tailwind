module.exports = {
  content: [
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "c-purple": "#5267DF",
        "c-black": "#000000",
        "c-white": "#f7f7f7",
        "c-red": "#FA5959",
        "c-blue": "#243A45",
        "c-gray": "#9194A2",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
}
