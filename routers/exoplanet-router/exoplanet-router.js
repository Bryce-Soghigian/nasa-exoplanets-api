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
 * @api {get} api/exoplanets/facilities
 * @apiGroup Get Facilities
 * @apiDescription Get all of the facilites that found each planet
 */
router.get("/facilities",(req,res)=> {
    Model.findAllFacilities()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})

/**
 * @api {get} api/exoplanets/orbitalrange
 * @apiGroup Get orbital periods
 * @apiDescription get Planet Orbital Value with the higher and lower uncertainty. Includes Planet name
 */
router.get("/orbitalrange",(req,res) => {
    Model.findOrbitalPeriodValueRange()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
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
 * @apiDescription search the database by hostname
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
 * @api {get} api/exoplanets/maxaxisvaluerange
 * @apiGroup Planet Axis Range
 * @apiDescription Planet Orbital Semi-Major Axis Value [AU]
 */
router.get("/maxaxisvaluerange",(req,res) => {
    Model.findOrbitalMaxAxisValueRange()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})
/**
 * @api {get} api/exoplanets/maxaxisvaluerange/${id}
 * @apiParam ${id} ID of the planet you are trying to get axis data on
 * @apiGroup One Planets Axis Range
 * @apiDescription Planet Orbital Semi-Major Axis Value [AU]
 */
router.get("/maxaxisvaluerange/:id",(req,res) => {
    let {id} = req.params;
    Model.findOrbitalMaxAxisValueRangeById(id)
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})
// router.get("/pname", (req,res) => {
//     console.log("HIT THE ROUTE")
//     let db_query = req.query.q
//     if(!db_query){
//         res.status(404).json({error_message:"please type a valid query"})
//     }
//     Model.findPlanetByPLName(db_query)
//     .then(data => {
//         res.status(200).json(data)
//     }).catch(err => {
//         res.status(500).json({error_message:err})
//     })
// })

/**
 * @api {get} api/exoplanets/
 * @apiGroup Exoplanets
 * @apiDescription gets a list of planet hostnames
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
