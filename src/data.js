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
  
  .then((transData, geoid) => {
      console.log(transData);
      console.log(geoid);
  
     });



export {
    transDataPromise,
    geoidPromise
}



