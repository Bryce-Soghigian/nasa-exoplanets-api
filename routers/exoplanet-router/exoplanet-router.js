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

module.exports = router;
