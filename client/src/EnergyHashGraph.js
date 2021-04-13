import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './hash_energy_data.js';
import './App.css';
import custom_theme from './theme.js';

var avg_data = []
for(let i=0;i<data.length-80;i+=80){
	avg_data.push(data[i])
}
console.log('AVERGAGE',avg_data)

class EnergyHashRateGraph extends Component {
	constructor(){
		super();
		this.state={
			avg_data
        }
	}
	render(){
        const {avg_data} = this.state;
		return (
				<div style={{height:"inherit", width: "inherit"}}>
					{
						avg_data && 
						<div className="Graph">
							<VictoryChart
							  theme={custom_theme}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 140 }}
							  width={450}
							>
								<VictoryLegend x={50} y={45}
									theme={custom_theme}
								  orientation="vertical"
								  gutter={20}
								  data={[
								    { name: "Energy Consumption vs Hash Rate" }
								  ]}
								/>
								<VictoryLine
									theme={custom_theme}
								    style={{
								      parent: { border: "1px solid #ccc" }
								    }}
								    data={avg_data}
								    x={d=>d.Hash}
								    y={d=>d.GUESS}
								    scale={{x: "linear", y: "linear"}}
								    animate={{
										duration: 2000,
										onLoad: { duration: 1000 }
									}}
								/>
								<VictoryAxis
									dependentAxis
									theme={custom_theme}
                                    label="Energy Consumption (TWh)"
                                    style={{
                                    axisLabel: {
	                                    	padding:30,
								          	fontSize:12
                                    	}
                                    }}	
								/>
								<VictoryAxis
									theme={custom_theme}
									tickFormat={(tick) => `${tick/1e6}`}
									label="Million Hashes Per Second"
									style={{
                                    axisLabel: {
	                                    	padding:22,
								          	fontSize:12
                                    	}
                                    }}
								/>
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default EnergyHashRateGraph;