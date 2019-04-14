import * as d3 from 'd3';
import {
     ageG
} from '../data';

//a barchart about age composition by county
function barChart(ageG){


    function exportFunction(data, rootDOM, key){

        //define fundamental parameter
        const W = rootDOM.clientWidth;
        const H = rootDOM.clientHeight;
        const margin = 60;
        const innerWidth = W - 1.5 * margin;
        const innerHeight = H - 1.5 * margin;

        console.log(margin);

     //    //setup XY scale
     //    const yScale = d3.scaleLinear()
     //                     .domain([0,100])
     //                     .range([innerHeight, 0]);
        

     //    const xScale = d3.scaleBand()
     //                     .domain(ageG.map((d) => d.key))
     //                     .range([0, innerWidth])                         
     //                     .padding(0.2);

        


     //    const chart = svg.append('g')
          //                .attr('transform', `translate(${margin}, ${margin})`);

          //     chart.append('g')
          //          .call(d3.axisLeft(yScale));

        

          //     chart.append('g')
          //          .attr('transform', `translate(0, ${height})`)
          //          .call(d3.axisBottom(xScale));


          //     chart.selectAll()
          //          .data(goals)
          //          .enter()
          //          .append('rect')
          //          .attr('x', (s) => xScale(s.language))
          //          .attr('y', (s) => yScale(s.value))
          //          .attr('height', (s) => height - yScale(s.value))
          //          .attr('width', xScale.bandwidth())



        

        




          

    }

    return exportFunction;




}

export default barChart;