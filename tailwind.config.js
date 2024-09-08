/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.css",
    "./node_modules/flowbite/dist/flowbite.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

