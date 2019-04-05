// import {select} from 'd3';

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

const transDataPromise = d3.csv('../data/table_1.csv', parsetransData);
// const geoidPromise = d3.json('../data/geoid_20m.json');

  Promise.all([
    transDataPromise
    // geoidPromise,    
    ])



.then((transData) => {
    console.log(transData);
    // console.log(geoid);

   });


// const ageComposition = d3.map



//   }



//set up the svg's parameters
const w = 300,
  h = 300,
  r = w/2,
  color = d3.scale.category20c();



//draw a pie chart to show worker's age composition of a certain county
function pieChart() {

let svg = d3.select('#pie_chart')
              .append('svg')
              .attr('width', w)
              .attr('height', h)
              .append('g')
              .attr('transform', 'translate(' + (w/2) + ',' + (h/2) + ')');

// const arc = d3.svg
//               .arc()
//               .outerRadius


// }



//a bar chart to show composition of earnings
function barChart() {
  let svg = d3.select('#bar_chart')
                    .append('svg')
                    .attr('width', w)
                    .attr('height', h);
                    
                    

}


// //a tree map to show occupation composition
// function treeMap() {

// }


// //a bubble chart to show worker's travel time to work 
// function bubbleChart {

// }


// //a donut chart to show means of transportation
// function donutChart {

  }







