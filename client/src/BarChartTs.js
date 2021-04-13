import {Component} from 'react';
import {VictoryChart, VictoryLine,VictoryBar, VictoryTheme, VictoryLabel, VictoryLegend,VictoryAxis,VictoryZoomContainer} from 'victory';
import transaction_data from './transaction_data.js';
import './App.css';
import custom_theme,{colors} from './theme.js'


class BarChartTs extends Component {
	constructor(){
		super();
		console.log(transaction_data)
		this.state={
			transaction_data: [transaction_data[1]]
		}
	}
	componentDidMount(){
		this.setStateInterval = window.setInterval(() => {
	      this.setState({
	        transaction_data: transaction_data
	      });
	    }, 3000);
	}

  // componentWillUnmount() {
  //   window.clearInterval(this.setStateInterval);
  // }
	render(){
		const {transaction_data, bar_data} = this.state;
		// console.log("RG data:", data)
		return (
				<div style={{height:"inherit", width: "inherit"}}>
					{
						transaction_data && 
						<div>
							<VictoryChart
							  	theme={custom_theme}
							  // minDomain={{ y: 1 }}
							  // maxDomain={{ y: 6000 }}
								domainPadding={20}
								padding={{ top: 20, bottom: 100, left:50, right:10 }}
								width={200}
								height={200}
								// scale={{x:"linear",y:"log"}}
								containerComponent={
									<VictoryZoomContainer
									// zoomDomain = {{y:[0,0.20]}}
									zoomDimension="y"
									/>

								}
								animate={{
									duration:1000,
									easing: "quadInOut"
								}}

							>
								<VictoryLabel 
									text="Energy Consumption of 1 Visa vs 1 BTC Transaction"
									theme={custom_theme}
									x={120} 
									y={10} 
									textAnchor="middle"
									style={[
								        { 
								          	fontSize:6,
								          	fontFamily: "Helvetica",
								          	fill:colors.cryptocream
								        }
								        ]}
								/>
								<VictoryAxis
									dependentAxis
									label = {()=>{
										var l = "Energy Consumption\n(Wh)"
										return l
										}	
									}
									// tickValues= {[0,1e0,1e5,1e10]}
									// tickFormat={(y) => (`${y.toExponential()} `)}
									style={{
									axis: {stroke: "#756f6a"},
									axisLabel: {padding: 15, angle: 270},
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
									tickLabels: {fontSize: 5, padding: 0}
									// grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									// tickLabels: {fontSize: 3, padding: ({tick})=> {
									// 									return tick%2==0?5:0
									// 										}}
									}}
						        />
								<VictoryBar
									data={transaction_data}
									x = 'transaction'
									y = 'energy_wh'
									style={{
										fontSize:4
								      // data: { stroke: "#c43a31" },
								      // parent: { border: "1px solid #ccc"}
								    }}
								    barWidth={25}
								    sortKey="y"
								    labels={true}
								    labelComponent={
								    	<VictoryLabel
								    	text={({ datum }) => `${Math.round(datum.energy_wh*100)/100}`}
								    	style={[{
								    		fontSize:3,
								    		fill: colors.cryptogrey
								    	}]}
								    	/>
								    }

								    // sortOrder = "ascending"
								/>	
							</VictoryChart>
						</div>
					}
				</div>
			)
	}
}

export default BarChartTs;