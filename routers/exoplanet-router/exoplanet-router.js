const router = require('express').Router();
const Model = require("./exoplanet-model")

/**
 * @api {get} api/exoplanets/all
 * @apiGroup Gets Entire exoplanets table
 * @apiDescription This endpoint gets all of the data from the exoplanets table.
 */
router.get("/all",(req,res) => {
    Model.findAllData()
    .then(data => {
        res.status(200).json({data})
    }).catch(err => {
 
        res.status(500).json({error_message:err})
    })
})

/** 
 * @api {get} api/exoplanets/planet/${id}
 * @apiGroup Find Planet By ID
 * @apiParam ${id} type float
 * @apiDescription Gets a planet by id
 */
router.get("/planet/:id",(req,res) => {
    let {id} = req.params;
    if(id !== null || id !== undefined){
        Model.findPlanetByID(id)
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json({error_message:err})
        })
    }


})

/**
 * 
 * @api {get} api/exoplanets/search
 * @apiGroup Search
 * @apiParam ${?q=somesearchterm}
 * @apiDescription Search the database using sql queries in the url
 */
router.get("/search",(req,res) => {
    let db_query = req.query.q
    Model.findAllData(db_query)
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})
/**
 * @api {get} api/exoplanets/query?q=Kepler-153
 * @apiGroup Search
 * @apiParam ${?q=pl_hostname}
 * @apiDescription search the database by name
 */
router.get("/query", (req,res) => {
    let db_query = req.query.q
    console.log(db_query)
    Model.findPlanetByHostName(db_query)
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})


/**
 * @api {get} api/exoplanets/
 * @apiGroup Exoplanets
 * @apiDescription gets a list of planet names
 */
router.get("/",(req,res) => {
    Model.findAllPlanetNames()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})
module.exports = router;
