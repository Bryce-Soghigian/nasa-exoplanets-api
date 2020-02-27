const db = require("../../config/knex-config")

module.exports = {
    findAllData
}
function findAllData(){
    return db.select('*').from('exoplanets' );
}