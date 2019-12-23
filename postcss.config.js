/*
Export an object that contains a key, which is an array 
of plugins that should be used to process our CSS
*/
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}