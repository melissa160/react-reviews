//este archivo es el que webpack va a buscar en la raiz del proyecto
const server = require('./webpack.server.config.js');

module.exports = [
  server,
]; //se le puede exportar un array o un objeto de configuracion y va a correr todas las configutraciones al mismo tiempo
