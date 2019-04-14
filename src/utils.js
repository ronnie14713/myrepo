// import

//Utility functions for parsing transData
function parsetransData(d){
    return {
      // geoid: d.geoid,
      // drive_alone: +d.HC02_EST_VC01,
      // carpooled: +d.HC03_EST_VC01,
      // public_transportation: +d.HC04_EST_VC01,
      geoid_2: +d.geoid_2,
      geography: d.geo_display,
      total_population: +d.HC01_EST_VC01,
      age_16_19: +d.HC01_EST_VC03,
      age_20_24: +d.HC01_EST_VC04,
      age_25_44: +d.HC01_EST_VC05,
      age_45_54: +d.HC01_EST_VC06,
      age_55_59: +d.HC01_EST_VC07,
      age_60: +d.HC01_EST_VC08,
      median_age: +d.HC01_EST_VC10,
      earnings_1_9999: +d.HC01_EST_VC42,
      earnings_10000_14999: +d.HC01_EST_VC43,
      earnings_15000_24999: +d.HC01_EST_VC44,
      earnings_25000_34999: +d.HC01_EST_VC45,
      earnings_35000_49999: +d.HC01_EST_VC46,
      earnings_50000_64999: +d.HC01_EST_VC47,
      earnings_65000_74999: +d.HC01_EST_VC48,
      earnings_75000: +d.HC01_EST_VC49,
      median_earnings: +d.HC01_EST_VC51,
      agriculture: +d.HC01_EST_VC69,
      construction: +d.HC01_EST_VC70,
      manufacturing: +d.HC01_EST_VC71,
      wholesale_trade: +d.HC01_EST_VC72,
      retail_trade: +d.HC01_EST_VC73,
      transportation_warehouse: +d.HC01_EST_VC74,
      information_finance_realestate: +d.HC01_EST_VC75,
      professional_scientific_waste_services: +d.HC01_EST_VC76,
      educational_healthcare_social_assistance: +d.HC01_EST_VC77,
      arts_entertainment_recreation_accommodation_food_services: +d.HC01_EST_VC78,
      other_services_no_public_administration: +d.HC01_EST_VC79,
      public_administration: +d.HC01_EST_VC80,
      armed_forces: +d.HC01_EST_VC81,
      travel_time_work_10: +d.HC01_EST_VC103,
      travel_time_work_10_14: +d.HC01_EST_VC104,
      travel_time_work_15_19: +d.HC01_EST_VC105,
      travel_time_work_20_24: +d.HC01_EST_VC106,
      travel_time_work_25_29: +d.HC01_EST_VC107,
      travel_time_work_30_34: +d.HC01_EST_VC108,
      travel_time_work_35_44: +d.HC01_EST_VC109,
      travel_time_work_45_59: +d.HC01_EST_VC110,
      travel_time_work_60: +d.HC01_EST_VC111,
      mean_travel_time: +d.HC01_EST_VC112      
      
    }
  }

  export {
      parsetransData
  }