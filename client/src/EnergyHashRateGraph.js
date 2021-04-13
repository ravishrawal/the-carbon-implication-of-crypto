import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend} from 'victory';
import data from './bitcoin_hashrate_data.js';
import energy_data from './bitcoin_energy_data.js';
import './App.css';
import custom_theme from './theme.js';

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
							  theme={custom_theme}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 160000000 }}
							  width={400}
                              height={300}
                              style={[
								        { fill: "white" }
								        ]}
							>
								<VictoryLegend x={50} y={45}
								  orientation="vertical"
								  gutter={20}
								  data={[
								    { name: "Cryptocurrency", symbol: { fill: "#c43a31" }, labels: { fill: "white" } }
								  ]}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#c43a31" },
								      parent: { border: "1px solid #ccc" }
								    }}
								    data={data}
								    x={d=>d.Date}
								    y={d=>d.Value}
								    scale={{x: "time", y: "linear"}}
								    animate={{
										duration: 2000,
										onLoad: { duration: 1000 }
									}}
								/>
							</VictoryChart>
                            <VictoryChart
							  theme={VictoryTheme.material}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 120 }}
							  width={400}
                              height={300}
                              style={[
								        { fill: "white" }
								        ]}
							>
                                <VictoryLabel 
									text="Bitcoin Energy Consumption (↓) vs Hash Rate (↑)" 
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
								    { name: "Energy", symbol: { fill: "#2FA453" }, labels: { fill: "white" } }
								  ]}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#2FA453" },
								      parent: { border: "1px solid #ccc" }
								    }}
								    data={energy_data}
								    x={d=>d.Date}
								    y={d=>d.Value}
								    scale={{x: "time", y: "linear"}}
								    animate={{
										duration: 2000,
										onLoad: { duration: 1000 }
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