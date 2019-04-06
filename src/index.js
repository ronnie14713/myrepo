  // import 'bootstrap/dist/css/bootstrap.css';
  import './index.css';
  import * as d3 from 'd3';

  import {
    transDataPromise    
  } from './data';




// const ageComposition = d3.map



//   }



//set up the svg's parameters
const w = 300,
  h = 300,
  r = w/2;
  // color = scale.category20c();



//draw a pie chart to show worker's age composition of a certain county
function pieChart() {

let svg = select('#pie_chart')
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
  let svg = select('#bar_chart')
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







