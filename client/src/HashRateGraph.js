import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend} from 'victory';
import data from './bitcoin_hashrate_data.js';
import './App.css';
import custom_theme from './theme.js';

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
							  theme={custom_theme}
							  minDomain={{ y: 0 }}
							  maxDomain={{ y: 160000000 }}
							  width={450}
                              style={[
								        { fill: "white" }
								        ]}
							>
								<VictoryLabel
									theme={custom_theme}
									text="Hash Rate of Cryptocurrency" 
									x={225} 
									y={30} 
									textAnchor="middle"
									style={[
								        { fill: "white" }
								        ]}
								/>
								<VictoryLegend x={50} y={45}
								  theme={custom_theme}
								  orientation="vertical"
								  gutter={20}
								  data={[
								    { name: "Cryptocurrency"}
								  ]}
								/>
								<VictoryLine
								    theme={custom_theme}
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