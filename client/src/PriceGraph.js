import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './bitcoin_price_data.js';
import './App.css';
import custom_theme from './theme.js';

class PriceGraph extends Component {
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
							  maxDomain={{ y: 50000 }}
							  width={450}
                              style={[
								        { 
                                            fill: "white"
                                        }
                                    ]}
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
									theme = {custom_theme}
								 	orientation="vertical"
								 	gutter={20}
								 	data={[
								    	{ name: "Bitcoin Price ($)"}
								  	]}
								/>
								<VictoryLine
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

export default PriceGraph;