import * as d3 from 'd3';

//draw a barchart for age composition
function barChart(){


    function exportFunction(data, rootDOM, key){
        const W = rootDOM.clientWidth;
        const H = rootDOM.clientHeight;
        // // const margin = {t:32, r:32, b:64, l:64};
        // const innerWidth = W - margin.l - margin.r;
        // const innerHeight = H - margin.t - margin.b;
        const margin = 60;
        const innerWidth = W - 1.5 * margin;
        const innerHeight = H - 1.5 * margin;

        const scaleY = d3.scaleLinear()
                         .domain([0,100])
                         .range([innerHeight, 0]);

        const xScale = d3.scaleBand()
                         .range([0, innerWidth])
                        //  .domain(sample.map((s) => s.language))
                         .padding(0.2);


        const chart = svg.append('g')
                         .attr('transform', `translate(${margin}, ${margin})`);

              chart.append('g')
                   .call(d3.axisLeft(yScale));

        

              chart.append('g')
                   .attr('transform', `translate(0, ${height})`)
                   .call(d3.axisBottom(xScale));


              chart.selectAll()
                   .data(goals)
                   .enter()
                   .append('rect')
                   .attr('x', (s) => xScale(s.language))
                   .attr('y', (s) => yScale(s.value))
                   .attr('height', (s) => height - yScale(s.value))
                   .attr('width', xScale.bandwidth())



        

        






    }




}

export default barChart;