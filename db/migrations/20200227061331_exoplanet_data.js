
exports.up =  function(knex) {
    return knex.schema.createTable('exoplanets',(exoplanet_data) => {
    // exoplanet_data.increments("exoplanet_id")

    exoplanet_data.string('pl_hostname')
    exoplanet_data.string('pl_letter')
    exoplanet_data.string('pl_name')
    exoplanet_data.string('pl_discmethod')
    exoplanet_data.decimal('pl_controvflag')
    exoplanet_data.decimal('pl_pnum')
    exoplanet_data.float("pl_orbper", 64)
    exoplanet_data.float("pl_orbpererr1",64)
    exoplanet_data.float('pl_orbpererr2',64)
    exoplanet_data.float('pl_orbperlim',64)
    exoplanet_data.float("pl_orbpern",64)
    exoplanet_data.float("pl_orbsmax",64)
    exoplanet_data.float("pl_orbsmaxerr1",64)
    exoplanet_data.float("pl_orbsmaxerr2",64)
    exoplanet_data.float("pl_orbsmaxlim", 64)
    exoplanet_data.integer("pl_orbsmaxn")
    exoplanet_data.float("pl_orbeccen")
    exoplanet_data.float("pl_orbeccenerr1")
    exoplanet_data.float("pl_orbeccenerr2")
    exoplanet_data.float("pl_orbeccenlim")
    exoplanet_data.integer("pl_orbeccenn")
    exoplanet_data.float("pl_orbincl")
    exoplanet_data.float("pl_orbinclerr1")
    exoplanet_data.float("pl_orbinclerr2")
    exoplanet_data.float("pl_orbincllim")
    exoplanet_data.integer("pl_orbincln")
    exoplanet_data.float("pl_bmassj")
    exoplanet_data.float("pl_bmassjerr1")
    exoplanet_data.float("pl_bmassjerr2")
    exoplanet_data.float("pl_bmassjlim")
    exoplanet_data.integer("pl_bmassn")
    exoplanet_data.string("pl_bmassprov")
    exoplanet_data.float("pl_radj")
    exoplanet_data.float("pl_radjerr1")
    exoplanet_data.float("pl_radjerr2")
    exoplanet_data.float("pl_radjlim")
    exoplanet_data.integer("pl_radn")
    exoplanet_data.float("pl_dens")
    exoplanet_data.float("pl_denserr1")
    exoplanet_data.float("pl_denserr2")
    exoplanet_data.float("pl_denslim")
    exoplanet_data.integer("pl_densn")
    exoplanet_data.integer("pl_ttvflag")
    exoplanet_data.integer("pl_kepflag")
    exoplanet_data.integer("pl_k2flag")
    exoplanet_data.string("ra_str")
    exoplanet_data.string("dec_str")
    exoplanet_data.float("ra")
    exoplanet_data.float("st_raerr")
    exoplanet_data.float("dec")
    exoplanet_data.float("st_decerr")
    exoplanet_data.integer("st_posn")
    exoplanet_data.float("st_dist")
    exoplanet_data.float("st_disterr1")
    exoplanet_data.float("st_disterr2")
    exoplanet_data.float("st_distlim")
    exoplanet_data.integer("st_distn")
    exoplanet_data.float("st_optmag")
    exoplanet_data.float('st_optmagerr')
    exoplanet_data.float("st_optmaglim")
    exoplanet_data.string("st_optband")
    exoplanet_data.float("gaia_gmag")
    exoplanet_data.float("gaia_gmagerr")
    exoplanet_data.float("gaia_gmaglim")
    exoplanet_data.float("st_teff")
    exoplanet_data.float("st_tefferr1")
    exoplanet_data.float("st_tefferr2")
    exoplanet_data.float("st_tefflim")
    exoplanet_data.integer("st_teffn")
    exoplanet_data.float("st_mass")
    exoplanet_data.float("st_masserr1")
    exoplanet_data.float("st_masserr2")
    exoplanet_data.float("st_masslim")
    exoplanet_data.integer("st_massn")
    exoplanet_data.float("st_rad")
    exoplanet_data.float("st_raderr1")
    exoplanet_data.float("st_raderr2")
    exoplanet_data.float("st_radlim")
    exoplanet_data.integer("st_radn")
    exoplanet_data.integer("pl_nnotes")
    exoplanet_data.string("rowupdate")
    exoplanet_data.string("pl_facility")
//=========Information on each table column pulled from the nasa db
/*


\ pl_hostname 
\ ___ Planet Host Star Name
\ pl_letter 
\ ___ Planet Letter
\ pl_name 
\ ___ Planet Common Name
\ pl_discmethod 
\ ___ Method of Discovery String for Display
\ pl_controvflag 
\ ___ Planet Controversy Flag (0=no, 1=yes)
\ pl_pnum 
\ ___ Number of Planets in System
\ pl_orbper (days) 
\ ___ Planet Orbital Period Value [days]
\ pl_orbpererr1 (days) 
\ ___ Planet Orbital Period Upper Uncertainty [days]
\ pl_orbpererr2 (days) 
\ ___ Planet Orbital Period Lower Uncertainty [days]
\ pl_orbperlim 
\ ___ Planet Orbital Period Limit Flag (0="=", +1=">", -1="<")
\ pl_orbpern 
\ ___ Planet Orbital Period Number of Measurements
\ pl_orbsmax (AU) 
\ ___ Planet Orbital Semi-Major Axis Value [AU]
\ pl_orbsmaxerr1 (AU) 
\ ___ Planet Orbital Semi-Major Axis Upper Uncertainty [AU]
\ pl_orbsmaxerr2 (AU) 
\ ___ Planet Orbital Semi-Major Axis Lower Uncertainty [AU]
\ pl_orbsmaxlim 
\ ___ Planet Orbital Semi-Major Axis Limit Flag (0="=", +1=">", -1="<")
\ pl_orbsmaxn 
\ ___ Planet Orbital Semi-Major Axis Number of Measurements
\ pl_orbeccen 
\ ___ Planet Orbital Eccentricity Value
\ pl_orbeccenerr1 
\ ___ Planet Orbital Eccentricity Upper Uncertainty
\ pl_orbeccenerr2 
\ ___ Planet Orbital Eccentricity Lower Uncertainty
\ pl_orbeccenlim 
\ ___ Planet Orbital Eccentricity Limit Flag (0="=", +1=">", -1="<")
\ pl_orbeccenn 
\ ___ Planet Orbital Eccentricity Number of Measurements
\ pl_orbincl (degrees) 
\ ___ Planet Orbital Inclination Value [deg]
\ pl_orbinclerr1 (degrees) 
\ ___ Planet Orbital Inclination Upper Uncertainty [deg]
\ pl_orbinclerr2 (degrees) 
\ ___ Planet Orbital Inclination Lower Uncertainty [deg]
\ pl_orbincllim 
\ ___ Planet Orbital Inclination Limit Flag (0="=", +1=">", -1="<")
\ pl_orbincln 
\ ___ Planet Orbital Inclination Number of Measurements
\ pl_bmassj (Mjup) 
\ ___ Planet Mass or Msini Value [Jupiter mass]
\ pl_bmassjerr1 (Mjup) 
\ ___ Planet Mass or Msini Upper Uncertainty [Jupiter mass]
\ pl_bmassjerr2 (Mjup) 
\ ___ Planet Mass or Msini Lower Uncertainty [Jupiter mass]
\ pl_bmassjlim 
\ ___ Planet Mass or Msini [Jupiter mass] Limit Flag (0="=", +1=">", -1
\ pl_bmassn 
\ ___ Planet Mass or Msini Number of Measurements
\ pl_bmassprov 
\ ___ Planet Mass or Msini Provenance
\ pl_radj (Rjup) 
\ ___ Planet Radius Value [Jupiter radii]
\ pl_radjerr1 (Rjup) 
\ ___ Planet Radius Upper Uncertainty [Jupiter radii]
\ pl_radjerr2 (Rjup) 
\ ___ Planet Radius Lower Uncertainty [Jupiter radii]
\ pl_radjlim 
\ ___ Planet Radius [Jupiter radii] Limit Flag (0="=", +1=">", -1="<")
\ pl_radn 
\ ___ Planet Radius Number of Measurements
\ pl_dens (g/cm**3) 
\ ___ Planet Density Value [g/cm**3]
\ pl_denserr1 (g/cm**3) 
\ ___ Planet Density Upper Uncertainty [g/cm**3]
\ pl_denserr2 (g/cm**3) 
\ ___ Planet Density Lower Uncertainty [g/cm**3]
\ pl_denslim 
\ ___ Planet Density Limit Flag (0="=", +1=">", -1="<")
\ pl_densn 
\ ___ Planet Density Number of Measurements
\ pl_ttvflag 
\ ___ Is the planet known to have TTV? (1 = yes, 0 = no)
\ pl_kepflag 
\ ___ Is the planet in the Kepler Field? (1 = yes, 0 = no)
\ pl_k2flag 
\ ___ Is the planet in the K2 Mission? (1 = yes, 0 = no)
\ ra_str 
\ ___ RA Value [sexagesimal]
\ dec_str 
\ ___ Dec Value [sexagesimal]
\ ra (degrees) 
\ ___ RA Value [decimal degrees]
\ st_raerr (degrees) 
\ ___ RA Uncertainty [decimal degrees]
\ dec (degrees) 
\ ___ Dec Value [decimal degrees]
\ st_decerr (degrees) 
\ ___ Dec Uncertainty [decimal degrees]
\ st_posn 
\ ___ Number of Position Measurements
\ st_dist (pc) 
\ ___ Distance Value [pc]
\ st_disterr1 (pc) 
\ ___ Distance Upper Uncertainty [pc]
\ st_disterr2 (pc) 
\ ___ Distance Lower Uncertainty [pc]
\ st_distlim 
\ ___ Distance Limit Flag (0="=", +1=">", -1="<")
\ st_distn 
\ ___ Number of Distance Measurements
\ st_optmag (mags) 
\ ___ Stellar Optical Magnitude Value [mags]
\ st_optmagerr (mags) 
\ ___ Stellar Optical Magnitude Uncertainty
\ st_optmaglim 
\ ___ Stellar Optical Magnitude Limit Flag (0="=", +1=">", -1="<")
\ st_optband 
\ ___ Stellar Optical Magnitude Band Name
\ gaia_gmag (mags) 
\ ___ Gaia G-band Magnitude Value
\ gaia_gmagerr (mags) 
\ ___ Gaia G-band Magnitude Uncertainty
\ gaia_gmaglim 
\ ___ Gaia G-band Magnitude Limit Flag (0="=", +1=">", -1="<")
\ st_teff (K) 
\ ___ Stellar Effective Temperature Value [K]
\ st_tefferr1 (K) 
\ ___ Stellar Effective Temperature Upper Uncertainty [K]
\ st_tefferr2 (K) 
\ ___ Stellar Effective Temperature Lower Uncertainty [K]
\ st_tefflim 
\ ___ Stellar Effective Temperature Limit Flag (0="=", +1=">", -1="<")
\ st_teffn 
\ ___ Stellar Effective Temperature Number of Measurements
\ st_mass (Msun) 
\ ___ Stellar Mass Value [Solar mass]
\ st_masserr1 (Msun) 
\ ___ Stellar Mass Upper Uncertainty [Solar mass]
\ st_masserr2 (Msun) 
\ ___ Stellar Mass Lower Uncertainty [Solar mass]
\ st_masslim 
\ ___ Stellar Mass Limit Flag (0="=", +1=">", -1="<")
\ st_massn 
\ ___ Stellar Mass Number of Measurements
\ st_rad (Rsun) 
\ ___ Stellar Radius Value [Solar radii]
\ st_raderr1 (Rsun) 
\ ___ Stellar Radius Upper Uncertainty [Solar radii]
\ st_raderr2 (Rsun) 
\ ___ Stellar Radius Lower Uncertainty [Solar radii]
\ st_radlim 
\ ___ Stellar Radius Limit Flag (0="=", +1=">", -1="<")
\ st_radn 
\ ___ Stellar Radius Number of Measurements
\ pl_nnotes 
\ ___ Number of Planet Notes
\ rowupdate 
\ ___ Row last update
\ pl_facility 
\ ___ Discovery Facility



*/




  })
};

exports.down = function(knex,Promise) {

  return knex.schema.dropTableIfExists('exoplanets')

};
