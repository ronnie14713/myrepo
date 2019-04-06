// import

//Utility functions for parsing transData
function parsetransData(d){
    return {
      // geoid: d.geoid,
      // geoid_2: d.geoid_2,
      geography: d.geo_display,
      total_population: +d.HC01_EST_VC01,
      // drive_alone: +d.HC02_EST_VC01,
      // carpooled: +d.HC03_EST_VC01,
      // public_transportation: +d.HC04_EST_VC01,
      age_16_19: +d.HC01_EST_VC03,
      age_20_24: +d.HC01_EST_VC04,
      age_25_44: +d.HC01_EST_VC05,
      age_45_54: +d.HC01_EST_VC06,
      age_55_59: +d.HC01_EST_VC07,
      age_60: +d.HC01_EST_VC08
      
    }
  }

  export {
      parsetransData
  }