var seeder = require('knex-csv-seeder').default
const path = require('path')
let file = path.join('data/exoplanets.csv')


exports.seed = seeder({
  table: 'exoplanet_data',
  file: file,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});