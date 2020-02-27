const router = require('express').Router();
const Model = require("./exoplanet-model")

//==========Get All Of The Exoplanet Data===========//
router.get("/",(req,res) => {
    Model.findAllData()
    .then(data => {
        res.status(200).json({data})
    }).catch(err => {
 
        res.status(500).json({error_message:err})
    })
})
//==========Get Planet By ID===================//
router.get("/:id",(req,res) => {
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
//===========Get Planet By Name================//
router.get("/:name", (req,res) => {
    let {name} = req.params;
    Model.findPlanetByHostName(name)
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({error_message:err})
    })
})
//==========Get All Planet Names===========//
// router.get("/names/",(req,res) => {
//     Model.findAllPlanetNames()
//     .then(data => {
//         res.status(200).json(data)
//     }).catch(err => {
//         res.status(500).json({error_message:err})
//     })
// })
module.exports = router;
