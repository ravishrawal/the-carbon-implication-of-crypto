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
      <div style={{ height: "inherit", width: "inherit" }}>
        {data && (
          <div className="Graph">
            <VictoryChart
              theme={theme}
              domainPadding={30}
              minDomain={{ y: 0 }}
              maxDomain={{ y: 80 }}
              width={450}
            >

              <VictoryBar
                theme={theme}
                labels={true}
                labelComponent={
                  <VictoryLabel
                  text={({ datum }) => `${Math.round(datum.y*100)/100}`}
                  style={[{
                    fontSize: 6,
                    fill: colors.cryptogrey,
                  }]}
                  />
                }
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
              theme={theme}
                x={50}
                y={45}
                orientation="vertical"
                gutter={20}
                data={[
                  {
                    name: "Energy Consumption (TWh)"
                  }
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