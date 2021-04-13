import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './bitcoin_volume_data.js';
import './App.css';

class VolumeGraph extends Component {
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
							  maxDomain={{ y: 1000000000 }}
							  width={450}
							>
								<VictoryLabel 
									text="Bitcoin Trading Volume Over Time" 
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
								    { name: "Trade Volume per Year", symbol: { fill: "#9a9af8" } }
								  ]}
								/>
								<VictoryLine
								    style={{
								      data: { stroke: "#9a9af8" },
								      parent: { border: "1px solid #ccc"}
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
									}}
									tickFormat={(t) => `$ ${t}`}
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
									label="Year"
								/>
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default VolumeGraph;