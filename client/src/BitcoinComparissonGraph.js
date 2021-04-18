import { Component } from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
} from "victory";
import data from "./data.js";
import "./App.css";
import theme, {colors} from "./theme.js";

class BitcoinComparissonGraph extends Component {
  constructor() {
    super();
    this.state = {
      data,
    };
  }
  render() {
    const { data } = this.state;

    return (
      <div className="graph-container">
        {data && (
          <div className="Graph">
            <VictoryChart
              theme={theme}
              domainPadding={30}
              padding={{ top: 20, bottom: 100, left:50, right:10 }}
              minDomain={{ y: 0 }}
              maxDomain={{ y: 80 }}
              width={450}
            >

              <VictoryBar
                theme={theme}
                labels={true}
                labelComponent={
                  <VictoryLabel
                  text={({ datum }) => `${(Math.round(datum.y*100)/100).toFixed(1)}`}
                  style={[{
                    fontSize: 6,
                    fill: colors.cryptogrey,
                  }]}
                  />
                }
                style={{
                      data: {
                        fill:({datum})=> datum.x==="Bitcoin\nNetwork\nFor A Year"? colors.cryptoorange :colors.cryptopurple,
                  }
                }}                
                animate={{
                  duration: 3000,
                  onLoad: { duration: 3000 },
                }}
                barWidth={40}
                data={[
                  { x: "The Entire NYC\nSubway System\nFor A Year", y: 1.8 },

                  { x: "1M US\nHouseholds\nFor A Year", y: 11.0 },
                  {
                    x: "1M Flights\nFrom NYC to LA",
                    y: 32.7,
                  },
                  { x: "Bitcoin\nNetwork\nFor A Year", y: 70.4 },
                ]}
              />
              <VictoryLegend
              x={55} 
              y={10}
              theme={theme}
              title="Energy Consumption (TWh)"
              orientation="horizontal"
              gutter={20}
              style={{title: {fontSize: 10 },labels: {fontSize: 10 } }}
              data={[
                { name: "Bitcoin", symbol: { fill: colors.cryptoorange, type: "circle" } },
                { name: "Other", symbol: { fill: colors.cryptopurple } },
              ]}
              />

              <VictoryAxis
                dependentAxis
                theme={theme}
                tickFormat={(tick) => `${tick}`}
              />
              <VictoryAxis
                theme={theme}
              />
            </VictoryChart>
          </div>
        )}
      </div>
    );
  }
}

export default BitcoinComparissonGraph;