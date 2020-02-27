define({ "api": [
  {
    "type": "get",
    "url": "api/exoplanets/",
    "title": "",
    "group": "Exoplanets",
    "description": "<p>gets a list of planet names</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Exoplanets",
    "name": "GetApiExoplanets"
  },
  {
    "type": "get",
    "url": "api/exoplanets/planet/${id}",
    "title": "",
    "group": "Find_Planet_By_ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "$",
            "description": "<p>{id} type float</p>"
          }
        ]
      }
    },
    "description": "<p>Gets a planet by id</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Find_Planet_By_ID",
    "name": "GetApiExoplanetsPlanetId"
  },
  {
    "type": "get",
    "url": "api/exoplanets/all",
    "title": "",
    "group": "Gets_Entire_exoplanets_table",
    "description": "<p>This endpoint gets all of the data from the exoplanets table.</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Gets_Entire_exoplanets_table",
    "name": "GetApiExoplanetsAll"
  },
  {
    "type": "get",
    "url": "api/exoplanets/query?q=Kepler-153",
    "title": "",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "$",
            "description": "<p>{?q=pl_hostname}</p>"
          }
        ]
      }
    },
    "description": "<p>make a database query with sql</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Search",
    "name": "GetApiExoplanetsQueryQKepler153"
  },
  {
    "type": "get",
    "url": "api/exoplanets/search",
    "title": "",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "$",
            "description": "<p>{?q=somesearchterm}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Search",
    "name": "GetApiExoplanetsSearch"
  }
] });
