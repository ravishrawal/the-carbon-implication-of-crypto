import {Component} from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryLegend, VictoryAxis} from 'victory';
import data from './bitcoin_price_data.js';
import './App.css';
import custom_theme,{colors} from './theme.js';

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
				<div className="graph-container">
					{
						data && 
						<div className="Graph">
							<VictoryChart
							  theme={custom_theme}
							  padding={{ top: 20, bottom: 100, left:50, right:10 }}
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
								<VictoryLegend 
									x={50} 
									y={10}
									theme = {custom_theme}
								 	orientation="vertical"
								 	gutter={20}
								 	data={[
								    	{ name: "Price of Bitcoin ($)",symbol:{fill:colors.cryptoorange }}
								  	]}
								/>
								<VictoryAxis
									dependentAxis
									theme={custom_theme}
									// label = {()=>{
									// 	var l = " - "
									// 	return l
									// 	}	
									// }
									// tickValues= {[0,1e0,1e5,1e10]}
									tickFormat={(y) => (`$${y/1e3}K`)}
									style={{
									axisLabel: {fontSize: 4.5, padding: 32, angle: 0},
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									tickLabels: {fontSize: 10, padding: 5}
									}}
						        />	
								<VictoryAxis
									theme={custom_theme}
									// dependentAxis
									// tickFormat specifies how ticks should be displayed
									// tickFormat={(y) => (`$${y /1e9} GHashes/s/W`)}
									style={{
									axisLabel: {fontSize: 10, padding: 35},
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									tickLabels: {fontSize: 10, padding: 5}
									}}
						        />
								<VictoryLine
								    style={{
								      parent: { border: "1px solid #ccc"},
								      data: {stroke:colors.cryptoorange}
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