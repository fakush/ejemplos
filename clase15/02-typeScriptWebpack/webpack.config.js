const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), //aca se pasa un path absoluto, por eso usamos path
  },
  resolve: {
    extensions: ['.ts'],
  },
};
