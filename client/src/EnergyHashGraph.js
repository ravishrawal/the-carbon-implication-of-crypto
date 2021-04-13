import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './hash_energy_data.js';
import './App.css';

class EnergyHashRateGraph extends Component {
	constructor(){
		super();
		this.state={
			data
        }
	}
	render(){
        const {data} = this.state;
		return (
				<div style={{height:"inherit", width: "inherit"}}>
					{
						data && 
						<div className="Graph">
							<VictoryChart
							  theme={VictoryTheme.material}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 140 }}
							  width={450}
                              style={[
								        { fill: "white" }
								        ]}
							>
								<VictoryLabel 
									text="Energy Consumption By Bitcoin Network Vs Hash Rate" 
									x={225} 
									y={30} 
									textAnchor="middle"
									style={[
								        { fill: "white" }
								        ]}
								/>
								<VictoryLegend x={50} y={45}
								  orientation="vertical"
								  gutter={20}
								  data={[
								    { name: "Energy Consumption per Hash Rate", symbol: { fill: "#9a9af8" } }
								  ]}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#9a9af8" },
								      parent: { border: "1px solid #ccc" }
								    }}
								    data={data}
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
									style={{
									axisLabel: { fontSize: 12, padding: 35 },
                                    grid: { strokeWidth: 0 },
                                    tickLabels: {
										fill: "#e5e5e5",
									  },
									  axis: {
										stroke: "#e5e5e5", //CHANGE COLOR OF X-AXIS
                                      },
                                      axisLabel: {
                                        fill: "#e5e5e5",
                                        padding: 35
									  }
                                    }}
                                    label="Energy Consumption (twh)"
								/>
								<VictoryAxis
									style={{
									axisLabel: { fontSize: 12, padding: 30 },
                                    grid: { strokeWidth: 0 },
                                    tickLabels: {
										fill: "#e5e5e5",
									  },
									  axis: {
										stroke: "#e5e5e5", //CHANGE COLOR OF X-AXIS
                                      },
                                      axisLabel: {
                                        fill: "#e5e5e5",
                                        padding: 35
									  }
                                    }}
                                    label="Hash rate, mean (h/s)"
								/>
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default EnergyHashRateGraph;