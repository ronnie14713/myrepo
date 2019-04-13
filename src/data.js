import {
    parsetransData
} from './utils';

import {csv, json} from 'd3';


  
const transDataPromise = csv('./data/table_1.csv', parsetransData);
const geoidPromise = json('./data/geoid_20m.json');
  
  Promise.all([
      transDataPromise,
      geoidPromise   
      ])
  
  .then(([transData, geoid]) => {
      
    let county = "Blount County, Alabama";
      console.log(transData);
      const findIt = transData.find(function (a){
        return a.geography === county;
    })
    console.log(findIt);
      
      function ageGroups(data) {
      
      const ageGroups = [
          {'age_16_19': data.age_16_19},
          {'age_20_24': data.age_20_24}
        ];
    console.log(ageGroups);
    return ageGroups;
        }


        ageGroups(findIt)
    //   ageGroups.push({
    //       'age_16_19': +data.age_16_19,

    //   })
    //   ageGroups.push({
    //     'age_20_24': +data.age_20_24,

    // })


    
// age_25_44: 42.7
// age_45_54: 20.3
// age_55_59: 8.6
// age_60: 10.6

      


  
     });

     


export {
    transDataPromise,
    geoidPromise
}



