const router = require("express").Router();
const Model = require("./exoplanet-model");

/**
 * @api {get} api/exoplanets/all
 * @apiGroup Gets Entire exoplanets table
 * @apiDescription This endpoint gets all of the data from the exoplanets table.
 */
router.get("/all", (req, res) => {
  Model.findAllData()
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error_message: err });
    });
});

/**
 * @api {get} api/exoplanets/planet/${id}
 * @apiGroup Find Planet By ID
 * @apiParam {id} id The id
 * @apiDescription Gets a planet by id
 */
router.get("/planet/:id", (req, res) => {
  let { id } = req.params;
  if (id !== null || id !== undefined) {
    Model.findPlanetByID(id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ error_message: err });
      });
  }
});
/**
 * @api {get} api/exoplanets/facilities
 * @apiGroup Get Facilities
 * @apiDescription Get all of the facilites that found each planet
 */
router.get("/facilities", (req, res) => {
  Model.findAllFacilities()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});

/**
 * @api {get} api/exoplanets/orbitalrange
 * @apiGroup Get orbital periods
 * @apiDescription get Planet Orbital Value with the higher and lower uncertainty. Includes Planet name
 */
router.get("/orbitalrange", (req, res) => {
  Model.findOrbitalPeriodValueRange()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});

/**
 * @api {get} api/exoplanets/findcolumn/${column}/${table}
 * @apiGroup Search
 * @apiParam column_name
 * @apiDescription Search the database for a column in a table
 */
router.get("/findcolumn/:column", (req, res) => {
  let { column } = req.params;
  Model.searchDatabaseForColumn(column.toString())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
/**
 * @api {get} api/exoplanets/finditem/${column}/${table}/${id}
 * @apiGroup Search
 * @apiParam column_name id
 * @apiDescription Find an item in the database by column, table and id
 */
router.get("/finditem/:column/:id", (req, res) => {
  let { column, id } = req.params;
  Model.searchDatabaseForItem(column.toString(), id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
/**
 *
 * @api {get} api/exoplanets/search
 * @apiGroup Search
 * @apiParam ${?q=somesearchterm}
 * @apiDescription Search the database using sql queries in the url
 */
router.get("/search", (req, res) => {
  let db_query = req.query.q;
  Model.findAllData(db_query)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
/**
 * @api {get} api/exoplanets/query?q=Kepler-153
 * @apiGroup Search
 * @apiParam ${?q=pl_hostname}
 * @apiDescription search the database by hostname
 */
router.get("/query", (req, res) => {
  let db_query = req.query.q;
  console.log(db_query);
  Model.findPlanetByHostName(db_query)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});

/**
 * @api {get} api/exoplanets/maxaxisvaluerange
 * @apiGroup Planet Axis Range
 * @apiDescription Planet Orbital Semi-Major Axis Value [AU]
 */
router.get("/maxaxisvaluerange", (req, res) => {
  Model.findOrbitalMaxAxisValueRange()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
/**
 * @api {get} api/exoplanets/maxaxisvaluerange/${id}
 * @apiParam {id} id of planet you are trying to get the axis data for
 * @apiGroup One Planets Axis Range
 * @apiDescription Planet Orbital Semi-Major Axis Value [AU]
 */
router.get("/maxaxisvaluerange/:id", (req, res) => {
  let { id } = req.params;
  Model.findOrbitalMaxAxisValueRangeById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});

/**
 * @api {get} api/exoplanets/
 * @apiGroup Exoplanets
 * @apiDescription gets a list of planet hostnames
 */
router.get("/", (req, res) => {
  Model.findAllPlanetNames()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
/**
 * @api {get} api/exoplanets/planetsum/:id
 * @apiGroup Planet Data Summary
 * @apiParam {id} id of planet you are trying to get a sumary of
 * @apiDescription gets a bunch of valuable columns for the threeJS renderer will take in on the frontend
 * "pl_hostname","pl_name","pl_orbper","pl_orbsmax","pl_orbincl","pl_bmassj"
 * "pl_dens","pl_radj","st_dist","st_teff","st_mass","st_rad","pl_facility"
 */
router.get("/planetsum/:id", (req, res) => {
  let id = req.params.id;
  Model.findPlanetSummary(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error_message: err });
    });
});
module.exports = router;
