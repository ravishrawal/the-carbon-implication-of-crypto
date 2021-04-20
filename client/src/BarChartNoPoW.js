import {Component} from 'react';
import {VictoryChart, VictoryLine,VictoryBar, VictoryTheme, VictoryLabel, VictoryLegend,VictoryAxis,VictoryZoomContainer} from 'victory';
import algo_energy_data from './algo_energy_data.js';
import './App.css';
import custom_theme,{colors} from './theme.js';

class BarChartNoPoW extends Component {
	constructor(){
		super();
		console.log(algo_energy_data)
		this.state={
			algo_energy_data: [algo_energy_data[0],{algo:'PoS', energy:1}]
		}
	}
	componentDidMount(){
		this.setStateInterval = window.setInterval(() => {
	      this.setState({
	        algo_energy_data: algo_energy_data
	      });
	    }, 1501);
	}

  // componentWillUnmount() {
  //   window.clearInterval(this.setStateInterval);
  // }
	render(){
		const {algo_energy_data, bar_data} = this.state;
		// console.log("RG data:", data)
		return (
				<div className="graph-container">
					{
						algo_energy_data && 
						<div>
							<VictoryChart
							  	theme={custom_theme}
							  	minDomain={{ y: 1 }}
							  	maxDomain={{ y: 1e12 }}
								domainPadding={20}
								padding={{ top: 20, bottom: 100, left:50, right:10 }}
								width={200}
								height={200}
								scale={{x:"linear",y:"log"}}
								animate={{
									duration:1000,
									easing: "linear"
								}}

							>
								<VictoryLabel 
									text="Energy Consumption of Consensus Algorithms" 
									theme={custom_theme}
									x={120} 
									y={10} 
									textAnchor="middle"
									style={[
								        { 
								          	fontSize:6,
								          	fontFamily: "Roboto",
								          	fill:colors.cryptogrey
								        }
								        ]}
								/>
								
								<VictoryAxis
									dependentAxis
									theme={custom_theme}
									label = {()=>{
										var l = "log(Energy Cons.) (J)"
										return l
										}	
									}
									// tickValues= {[0,1e0,1e5,1e10]}
									tickFormat={(y) => (`${y.toExponential()} `)}
									style={{
									// axis: {stroke: "#756f6a"},
									axisLabel: {fontSize: 4, padding: 19, angle: 270},
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
									tickLabels: {fontSize: 5, padding: 0},
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									// tickLabels: {fontSize: 3, padding: ({tick})=> {
									// 									return tick%2==0?5:0
									// 										}}
									}}
						        />
								<VictoryBar
									data={algo_energy_data}
									x = 'algo'
									y = 'energy'
								    style={{
								    	fontSize:4,
								      	data: {
								      		fill:({datum})=> datum.algo==="POW"? colors.cryptoorange :colors.cryptoblue,
								    }
									}}
								    barWidth={25}
								    sortKey="y"
								    sortOrder="descending"
								    theme={custom_theme}
								    labels={true}
								    labelComponent={
								    	<VictoryLabel
								    	text={({ datum }) => `${Math.round(datum.energy).toExponential()}`}
								    	style={[{
								    		fontSize: 6,
								    		fill: colors.cryptogrey,
								    	}]}
								    	/>
								    }
								    animate={{

										onLoad:{
											before: (datum)=>{datum._y=1}	
										}
										
									}}
								    // sortOrder = "ascending"
								/>	
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default BarChartNoPoW;