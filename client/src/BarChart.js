import {Component} from 'react';
import {VictoryChart, VictoryLine,VictoryBar, VictoryTheme, VictoryLabel, VictoryLegend,VictoryAxis} from 'victory';
import algo_data from './algo_data.js';
import './App.css';
import custom_theme, {colors} from './theme.js'

class BarChart extends Component {
	constructor(){
		super();
		console.log(algo_data)
		this.state={algo_data}
		
	}

	render(){
		const {algo_data} = this.state;
		// console.log("RG data:", data)
		return (
				<div style={{height:"inherit", width: "inherit"}}>
					{
						algo_data && 
						<div>
							<VictoryChart
							  	theme={custom_theme}
							  	minDomain={{ y: 1 }}
							  // maxDomain={{ y: 6000 }}
								domainPadding={20}
								padding={{ top: 20, bottom: 100, left:50, right:10 }}
								width={200}
								height={200}
								scale={{x:"linear",y:"log"}}

							>
							<VictoryLabel 
									text="Efficiency of Suitable Mining Devices for Hashing Algos"
									theme={custom_theme}
									x={120} 
									y={10} 
									textAnchor="middle"
									style={[
								        { 
								          	fontSize:5,
								          	fontFamily: "Helvetica",
								          	fill:colors.cryptocream
								        }
								        ]}
								/>
								<VictoryAxis
									dependentAxis
									theme={custom_theme}
									label = {()=>{
										var l = "log(Efficiency) (Hashes/s/Watt)"
										return l
										}	
									}
									// tickValues= {[0,1e0,1e5,1e10]}
									tickFormat={(y) => (`${y.toExponential()} `)}
									style={{
									axis: {stroke: "#756f6a"},
									axisLabel: {fontSize: 4.5, padding: 20, angle: 270},
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									tickLabels: {fontSize: 5, padding: 0}
									}}
						        />	
								<VictoryAxis
									// dependentAxis
									// tickFormat specifies how ticks should be displayed
									// tickFormat={(y) => (`$${y /1e9} GHashes/s/W`)}
									style={{
									axis: {stroke: "#756f6a"},
									axisLabel: {fontSize: 12, padding: 35},
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									tickLabels: {fontSize: 3, padding: ({tick})=> {
																		return tick%2==0?5:0
																			}}
									}}
						        />
								<VictoryBar
									data={algo_data}
									x = 'algo'
									y = 'efficiency'
									style={{
								      // data: { stroke: "#c43a31" },
								      // parent: { border: "1px solid #ccc"}
								    }}
								    // barRatio={0.1}
								    sortKey="y"
								    sortOrder = "descending"
								    animate={{
										duration: 1500,
										onLoad:{
											before: (datum)=>{datum._y=1}	
										}
										
									}}
									labels={true}
								    labelComponent={
								    	<VictoryLabel
								    	text={({ datum }) => `${datum.efficiency.toExponential(0)}`}
								    	style={[{
								    		fontSize: 3,
								    		fill: colors.cryptogrey
								    	}]}
								    	/>
								    }
								/>	
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default BarChart;