import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './bitcoin_volume_data.js';
import './App.css';
import custom_theme from './theme.js';

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
							  theme={custom_theme}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 1000000000 }}
							  width={450}
							>
								<VictoryLabel 
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
								  theme={custom_theme}
								  data={[
								    { name: "Trading Volume of Bitcoin" }
								  ]}
								/>
								<VictoryLine
									theme={custom_theme}
								    style={{
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
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default VolumeGraph;