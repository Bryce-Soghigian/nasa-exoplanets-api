const db = require("../../config/knex-config")

module.exports = {
    findAllData,
    findPlanetByID,
    findPlanetByHostName,
    findAllPlanetNames,
    findAllFacilities
}
function findAllData(){
    return db.select('*').from('exoplanets' );
}
function findPlanetByID(id){
    return db('exoplanets').where({id}).first()
}
function findPlanetByHostName(pl_hostname){
    return db('exoplanets').where({pl_hostname}).first()
}

function findAllPlanetNames(){
    return db.from("exoplanets").select("pl_hostname")
}
function findAllFacilities(){
    return db.select("pl_facility").from("exoplanets")
}
