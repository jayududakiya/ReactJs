const withMT = require("@material-tailwind/react/utils/withMT");
const {nextui} = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    // single component styles
    // "./node_modules/@nextui-org/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(accordion).js'
  ],
  theme: {
    extend: {},
  }, 
   darkMode: "class",
  plugins: [nextui()],
  plugins: [],
}

