import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend} from 'victory';
import data from './bitcoin_hashrate_data.js';
import './App.css';

class HashRateGraph extends Component {
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
							  maxDomain={{ y: 160000000 }}
							  width={450}
                              style={[
								        { fill: "white" }
								        ]}
							>
								<VictoryLabel 
									text="Hash Rate of Cryptocurrency" 
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
								    { name: "Cryptocurrency", symbol: { fill: "#c43a31" } }
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
						</div>
					}
				</div>
			)
	}
}

export default HashRateGraph;