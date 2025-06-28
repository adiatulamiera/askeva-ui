module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Quicksand', 'sans-serif']
      },
      colors: {
        primary: '#F472B6',
        secondary: '#C084FC',
        soft: '#FCE7F3'
      }
    },
  },
  plugins: [],
};
