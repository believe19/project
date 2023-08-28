/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});


// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ],
//   content: [
//       // ...
//       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ]

// }



// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// export default tailwind.Config;