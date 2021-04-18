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
			transaction_data: [{transaction:'BTC', energy_wh:0},transaction_data[1]]
		}
	}
	componentDidMount(){
		this.setStateInterval = window.setInterval(() => {
	      this.setState({
	        transaction_data: transaction_data
	      });
	    }, 5000);
	}

	render(){
		const {transaction_data, bar_data} = this.state;
		const {renderBitcoin} = this;
		// console.log("RG data:", data)
		return (
				<div className="graph-container">
					{
						transaction_data && 
						<div>
							<VictoryChart
							  	theme={custom_theme}
							  // minDomain={{ y: 1 }}
							  // maxDomain={{ y: 6000 }}
								domainPadding={60}
								padding={{ top: 20, bottom: 100, left:50, right:10 }}
								width={325}
								height={300}
								// scale={{x:"linear",y:"log"}}

								animate={{
									duration:3000,
									easing: "quadInOut"
								}}

							>
								
								<VictoryLegend 
									x={55} 
									y={10}
									theme={custom_theme}
								  	title="Energy Consumption per Transaction (Wh)"
								    orientation="horizontal"
								    gutter={20}

								    style={{title: {fontSize: 7 },labels: {fontSize: 7 } }}
								    data={[
								      { name: "Bitcoin", symbol: { fill: colors.cryptoorange, type: "circle" } },
								      { name: "VISA", symbol: { fill: colors.cryptopurple } },
								    ]}

								  />

								<VictoryAxis
									dependentAxis
									theme={custom_theme}
									style={{
									// axis: {stroke: "#756f6a"},
									// axisLabel: {fontSize: 12, padding: 35},
									tickLabels: {fontSize: 8, padding: 2}
									// // grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									// tickLabels: {fontSize: 3, padding: ({tick})=> {
									// 									return tick%2==0?5:0
									}}

						        />	
								<VictoryAxis
									// dependentAxis
									// tickFormat specifies how ticks should be displayed
									// tickFormat={(y) => (`$${y /1e9} GHashes/s/W`)}
									theme={custom_theme}
									style={{
									// axis: {stroke: "#756f6a"},
									// axisLabel: {fontSize: 12, padding: 35},
									tickLabels: {fontSize: 8, padding: 2}
									// // grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
									// ticks: {stroke: "grey", size: 5},
									// tickLabels: {fontSize: 3, padding: ({tick})=> {
									// 									return tick%2==0?5:0
									}}

						        />
								<VictoryBar
									data={transaction_data}
									x = 'transaction'
									y = 'energy_wh'
									style={{
								      	data: {
								      		fill:({datum})=> datum.transaction==="Bitcoin"? colors.cryptoorange :colors.cryptopurple,
								    }
									}}
								    barWidth={30}
								    // sortKey="y"
								    labels={true}
								    labelComponent={
								    	<VictoryLabel
								    	text={({ datum }) => `${Math.round(datum.energy_wh*100)/100}`}
								    	style={[{
								    		fontSize:5,
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