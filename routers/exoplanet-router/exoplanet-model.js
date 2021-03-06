const db = require("../../config/knex-config")

module.exports = {
    findAllData,
    findPlanetByID,
    findPlanetByHostName,
    findAllPlanetNames,
    findAllFacilities,
    findOrbitalPeriodValueRange,
    findOrbitalMaxAxisValueRange,
    findOrbitalEccentricityValueRange,
    findOrbitalMaxAxisValueRangeById,
    findOrbitalPeriodValueRangeById,
    findPlanetMassOrJupiterMassById,
    findPlanetRadiusValueById,
    findPlanetSummary,
    searchDatabaseForColumn,
    searchDatabaseForItem,
    findPlanetsSummary,
    findPlanetSummaryBypl_hostname
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

function findOrbitalPeriodValueRange(){
    return db.select("pl_hostname","pl_orbper","pl_orbpererr1","pl_orbpererr2").from('exoplanets')
}
function findOrbitalPeriodValueRangeById(id){
    return db.where({id}).select("pl_hostname","pl_orbper","pl_orbpererr1","pl_orbpererr2").from('exoplanets')
}

function findOrbitalMaxAxisValueRangeById(id){
    return db.where({id}).select("pl_hostname","pl_orbsmax","pl_orbsmaxerr1","pl_orbsmaxerr2").from('exoplanets')
}

function findOrbitalMaxAxisValueRange(){
    return db.select("pl_hostname","pl_orbsmax","pl_orbsmaxerr1","pl_orbsmaxerr2").from('exoplanets')
}
function findOrbitalEccentricityValueRange(){
    return db.select("pl_hostname","pl_orbeccen","pl_orbeccenerr1","pl_orbeccenerr2").from("exoplanets")
}

function findAllPlanetNames(){
    return db.from("exoplanets").select("pl_hostname","pl_discmethod")
}
function findPlanetMassOrJupiterMassById(id){
    return db.where({id}).select("pl_hostname","pl_bmassn","pl_bmassprov").from("exoplanets")
}
function findPlanetRadiusValueById(id){
    return db.where({id}).select("pl_hostname","pl_radj","pl_radjerr1","pl_radjerr2").from("exoplanets")
}
function findAllFacilities(){
    return db.select("pl_facility").from("exoplanets")
}
function findPlanetSummary(id){
    
return db.where({id}).select("pl_discmethod","pl_name","pl_orbper","pl_orbsmax","pl_orbincl","pl_bmassj","pl_dens","pl_radj","st_dist","st_teff","st_mass","st_rad","pl_facility").from("exoplanets")
}
function findPlanetSummaryBypl_hostname(pl_hostname){

    return db.where({pl_hostname}).select("pl_discmethod","pl_name","pl_orbper","pl_orbsmax","pl_orbincl","pl_bmassj","pl_dens","pl_radj","st_dist","st_teff","st_mass","st_rad","pl_facility").from("exoplanets")
    }
function findPlanetsSummary(){
    return db.select("pl_hostname","pl_discmethod","pl_name","pl_orbper","pl_orbsmax","pl_orbincl","pl_bmassj","pl_dens","pl_radj","st_dist","st_teff","st_mass","st_rad","rowupdate","pl_facility").from("exoplanets")

}
function searchDatabaseForColumn(column_name){
    return db.select(column_name).from("exoplanets")
}
function searchDatabaseForItem(column_name,id){
    return db.where({id}).select(column_name).from("exoplanets")
}