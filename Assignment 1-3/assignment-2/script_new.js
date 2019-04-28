const migrationDataPromise = d3.csv('../data/un-migration/Table 1-Table 1.csv', parseMigrationData)
	.then(data => data.reduce((acc,v) => acc.concat(v), []));
const countryCodePromise = d3.csv('../data/un-migration/ANNEX-Table 1.csv', parseCountryCode)
	.then(data => new Map(data));
const metadataPromise = d3.csv('../data/country-metadata.csv', parseMetadata);


//Import all data via parallel promises
Promise.all([
		migrationDataPromise,
		countryCodePromise,
		metadataPromise
	]).then(([migration, countryCode, metadata]) => {
		//DATA MANIPULATION

		//Convert metadata to a metadata map
		const metadata_tmp = metadata.map(d => {
			
			return [d.iso_num, d] //===[key: d.iso_num, value: d]
		});
		 const metadataMap = new Map(metadata_tmp);
		 		 

		//Let's pick a year, say 2000, and filter the migration data
		const migration_2000 = migration.filter(d => d.year === 2000);
		

		//YOUR CODE HERE
		//Nest/group migration_2000 by origin_country
		//Then sum up the total value, using either nest.rollup or array.map
		let migration_origin_by_country = d3.nest() 
											.key(d => d.origin_name)
											.rollup(a => d3.sum(a, d => d.value))
											.entries(migration_2000);
    

		//YOUR CODE HERE
		//Then, join the transformed migration data to the lngLat values in the metadata
		migration_origin_by_country = migration_origin_by_country.map(d=>{
			const code = countryCode.get(d.key); 
			//in order to transform the data, first look at what is the common part of the two arrays
			//get()) indicates array.map.get() to get the value which is under the compatible key! 
			//code:{"country name", "value"} so, countryCode.get(d.key) gets all of the 3-digit codes to variable code 
			//as a lookup dict.
			//metadataMap: {iso_num, value}. Thus, metadata get the required data.
			const metadata = metadataMap.get(code); 
			
			//Take the 3-digit code, get metadata record
			//if else to check the data condition before drawing.
			if(metadata){
				d.subregion = metadata.subregion;
				d.name_display = metadata.name_display;
				d.lngLat = metadata.lngLat;
				d.iso_a3 = metadata.iso_a3;
			}
			else{
				console.log(`${d.key},${code} not found`);
			}
			return d;
		});
		
	
		//REPRESENT
		//this function have two parameters, rootDom, data
		drawCartogram(d3.select('.cartogram').node(), migration_origin_by_country);

		//DATA MANIPULATION

	})

//YOUR CODE HERE
//Complete the drawCartogram function
//Some of the functions related to geographic representation have already been implemented, so feel free to use them
function drawCartogram(rootDom, data){
	console.log(data);
	

	//measure the width and height of the rootDom element
	const w = rootDom.clientWidth;
	const h = rootDom.clientHeight;

	//projection function: takes [lng, lat] pair and returns [x, y] coordinates
	const projection = d3.geoMercator()
		.translate([w/2, h/2])
		.scale(180);

	//Scaling function for the size of the cartogram symbols
	//Assuming the symbols are circles, we use a square root scale
	const scaleSize = d3.scaleSqrt().domain([0,1000000]).range([5,50]);

	//Complete the rest of the code here
	//Build the DOM structure using enter / exit / update
	const plot = d3.select(rootDom)
				   .append('svg')
				   .attr('width', w)
				   .attr('height', h)
				   .append('g');
	
	const nodes = plot.selectAll('.node')
					  .data(data, d => d.key);
					  
	//exit pattern
	nodes.exit().remove();
	//d3js enter pattern
	const nodesEnter = nodes.enter()
							.append('g')
							.attr('class', 'node'); //attr a class to g
	
	nodesEnter.append('text')
	          .attr('text-anchor', 'middle');
	nodesEnter.append('circle');
	
	//update pattern
	nodes.merge(nodesEnter)
		 .filter(d => d.lngLat)
		 .attr('transform', d => {
			 const pj = projection(d.lngLat);
            
			 return `translate(${pj[0]}, ${pj[1]})`; //pj has longitude and latitude, so use pj[0] to get the lng, and pj[1] to get the lat.
		 });

	nodes.merge(nodesEnter)
		 .select('circle')
		 .attr('r', d => scaleSize(d.value))
		 .style('stroke', '4c4c4c')
		 .style('fill-opacity', 0.02)
		 .style('stroke-width', '1px')
		 .style('stroke-opacity', 0.2);

	nodes.merge(nodesEnter)
		 .select('text')
		 .attr('y', d => -scaleSize(d.value)) //because y coordinate is upside down in svg
		 .filter(d => d.value > 1500000)
		 .text(d => d.name_display)
		 .style('font-family', 'serif')
		 .style('font-size', '11px');					  

}

//Utility functions for parsing metadata, migration data, and country code
function parseMetadata(d){
	return {
		iso_a3: d.ISO_A3,
		iso_num: d.ISO_num,
		developed_or_developing: d.developed_or_developing,
		region: d.region,
		subregion: d.subregion,
		name_formal: d.name_formal,
		name_display: d.name_display,
		lngLat: [+d.lng, +d.lat]
	}
}

function parseCountryCode(d){
	return [
		d['Region, subregion, country or area'],
		d.Code
	]
}

function parseMigrationData(d){
	if(+d.Code >= 900) return;

	const migrationFlows = [];
	const dest_name = d['Major area, region, country or area of destination'];
	const year = +d.Year
	
	delete d.Year;
	delete d['Sort order'];
	delete d['Major area, region, country or area of destination'];
	delete d.Notes;
	delete d.Code;
	delete d['Type of data (a)'];
	delete d.Total;

	for(let key in d){
		const origin_name = key;
		const value = d[key];

		if(value !== '..'){
			migrationFlows.push({
				origin_name,
				dest_name,
				year,
				value: +value.replace(/,/g, '')
			})
		}
	}

	return migrationFlows;
}