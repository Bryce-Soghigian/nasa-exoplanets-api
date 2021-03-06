define({ "api": [
  {
    "type": "get",
    "url": "planetsumbyname/:name",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "pl_hostname",
            "description": "<p>planethostname</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "group": "/Users/lambda_school_loaner_126/Desktop/nasa-exoplanets-api/routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "/Users/lambda_school_loaner_126/Desktop/nasa-exoplanets-api/routers/exoplanet-router/exoplanet-router.js",
    "name": "GetPlanetsumbynameName"
  },
  {
    "type": "get",
    "url": "api/exoplanets/",
    "title": "",
    "group": "Exoplanets",
    "description": "<p>gets a list of planet hostnames</p>",
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
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p>"
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
    "url": "api/exoplanets/facilities",
    "title": "",
    "group": "Get_Facilities",
    "description": "<p>Get all of the facilites that found each planet</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Get_Facilities",
    "name": "GetApiExoplanetsFacilities"
  },
  {
    "type": "get",
    "url": "api/exoplanets/orbitalrange",
    "title": "",
    "group": "Get_orbital_periods",
    "description": "<p>get Planet Orbital Value with the higher and lower uncertainty. Includes Planet name</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Get_orbital_periods",
    "name": "GetApiExoplanetsOrbitalrange"
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
    "url": "api/exoplanets/maxaxisvaluerange/${id}",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>of planet you are trying to get the axis data for</p>"
          }
        ]
      }
    },
    "group": "One_Planets_Axis_Range",
    "description": "<p>Planet Orbital Semi-Major Axis Value [AU]</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "One_Planets_Axis_Range",
    "name": "GetApiExoplanetsMaxaxisvaluerangeId"
  },
  {
    "type": "get",
    "url": "api/exoplanets/maxaxisvaluerange",
    "title": "",
    "group": "Planet_Axis_Range",
    "description": "<p>Planet Orbital Semi-Major Axis Value [AU]</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Planet_Axis_Range",
    "name": "GetApiExoplanetsMaxaxisvaluerange"
  },
  {
    "type": "get",
    "url": "api/exoplanets/allsum",
    "title": "",
    "group": "Planet_Data_Summary",
    "description": "<p>Gets A summarized version of the /all endpoint  that returns the same fields as /planetsum</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Planet_Data_Summary",
    "name": "GetApiExoplanetsAllsum"
  },
  {
    "type": "get",
    "url": "api/exoplanets/planetsum/:id",
    "title": "",
    "group": "Planet_Data_Summary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>of planet you are trying to get a sumary of</p>"
          }
        ]
      }
    },
    "description": "<p>gets a bunch of valuable columns for the threeJS renderer will take in on the frontend &quot;pl_hostname&quot;,&quot;pl_name&quot;,&quot;pl_orbper&quot;,&quot;pl_orbsmax&quot;,&quot;pl_orbincl&quot;,&quot;pl_bmassj&quot; &quot;pl_dens&quot;,&quot;pl_radj&quot;,&quot;st_dist&quot;,&quot;st_teff&quot;,&quot;st_mass&quot;,&quot;st_rad&quot;,&quot;pl_facility&quot;</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Planet_Data_Summary",
    "name": "GetApiExoplanetsPlanetsumId"
  },
  {
    "type": "get",
    "url": "api/exoplanets/findcolumn/${column}",
    "title": "",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "column_name",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>Search the database for a column in a table</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Search",
    "name": "GetApiExoplanetsFindcolumnColumn"
  },
  {
    "type": "get",
    "url": "api/exoplanets/finditem/${column}/${id}",
    "title": "",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "column_name",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "description": "<p>Find an item in the database by column and id</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Search",
    "name": "GetApiExoplanetsFinditemColumnId"
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
    "description": "<p>search the database by hostname</p>",
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
    "description": "<p>Search the database using sql queries in the url</p>",
    "version": "0.0.0",
    "filename": "routers/exoplanet-router/exoplanet-router.js",
    "groupTitle": "Search",
    "name": "GetApiExoplanetsSearch"
  }
] });
