import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './hash_energy_data.js';
import './App.css';
import custom_theme,{colors} from './theme.js';

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
				<div className="graph-container">
					{
						avg_data && 
						<div className="Graph">
							<VictoryChart
							  theme={custom_theme}
							  padding={{ top: 20, bottom: 100, left:50, right:10 }}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 140 }}
							  width={450}
							>
								<VictoryLegend 
								x={50} 
								y={10}
								theme={custom_theme}
								orientation="horizontal"
								gutter={20}
								 data={[
								    { name: "Energy Consumption vs Hash Rate of Bitcoin Network",symbol:{fill:colors.cryptoorange} }
								  ]}
								/>
								<VictoryLine
									theme={custom_theme}
								    style={{
								      parent: { border: "1px solid #ccc" },
								      data:{stroke: colors.cryptoorange}
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
                                    label="Energy Cons. (TWh)"
                                    style={{
                                    axisLabel: {
	                                    	padding:30,
								          	fontSize:10
                                    	},
                                    tickLabels:{fontSize:10}
                                    }}	
								/>
								<VictoryAxis
									theme={custom_theme}
									tickFormat={(tick) => `${tick/1e6}`}
									label="Hash Rate (10^6 hashes/second)"
									style={{
                                    axisLabel: {
	                                    	padding:22,
								          	fontSize:10
                                    	},
                                    tickLabels:{fontSize:10}

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