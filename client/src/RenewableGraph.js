import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend} from 'victory';
import data from './data.js';
import './App.css';
import custom_theme from './theme.js'

class RenewableGraph extends Component {
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
							  maxDomain={{ y: 6000 }}
							  width={450}
							>
								<VictoryLabel 
									text="Carbon Footprint of Cryptocurrency" 
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
								    { name: "Cryptocurrency", symbol: { fill: "#c43a31" }, labels: { fill: "white" } } ,
								    { name: "Renewables", symbol: { fill: "#2FA453" }, labels: { fill: "white" } }
								  ]}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#c43a31" },
								      parent: { border: "1px solid #ccc"}
								    }}
								    data={data.Crypto}
								    x={d=>String(d.year)}
								    y={d=>d.value}
								    scale={{x: "time", y: "linear"}}
								    animate={{
										duration: 2000,
										onLoad: { duration: 1000 }
									}}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#2FA453" },
								      parent: { border: "1px solid #ccc"}
								    }}
								    data={data.Renewables}
								    x={d=>String(d.year)}
								    y={d=>d.value}
								    scale={{x: "time", y: "linear"}}
								    animate={{
										duration: 2000,
										onLoad: { duration: 2000 }
									}}
								/>
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default RenewableGraph;