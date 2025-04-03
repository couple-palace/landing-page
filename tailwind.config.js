export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      borderRadius: {
        'button': '9999px'
      }
    },
  },
  plugins: [],
}