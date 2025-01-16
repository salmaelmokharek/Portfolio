/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./docs/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle at center, #2954A3, #C961DE, #2F2F8A, #1C1C65, #0F103F)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

