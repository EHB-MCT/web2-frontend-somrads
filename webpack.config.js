const path = require('path');

module.exports = {
  entry: {
    films: './src/films.js',
    myList: './src/myList.js',
    people: './src/people.js',
    planets: './src/planets.js'
  },

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  mode: 'production'
};