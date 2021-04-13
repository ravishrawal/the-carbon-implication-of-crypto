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
              theme={VictoryTheme.material}
              domainPadding={20}
              minDomain={{ y: 0 }}
              maxDomain={{ y: 80 }}
              width={450}
              style={[{ fill: "#e5e5e5" }]}
            >
              <VictoryLabel
                text="2020 Energy Consumption "
                x={225}
                y={30}
                textAnchor="middle"
                style={[{ fill: "#e5e5e5" }]}
              />

              <VictoryBar
                animate={{
                  duration: 3000,
                  onLoad: { duration: 3000 },
                }}
                barWidth={({ index }) => index * 2 + 8}
                style={{
                  data: { fill: "#9a9af8", color: "#ffffff" },
                }}
                data={[
                  { x: "NYC \n Subway\n  per year", y: 1.8 },

                  { x: "1 million US \nhouseholds \n per year", y: 11 },
                  {
                    x: "1 million flights \n from NYC to LA \n per year ",
                    y: 32.7,
                  },
                  { x: "Bitcoin\n  activity \n per year", y: 70.39 },
                ]}
              />

              <VictoryLegend
                x={70}
                y={80}
                orientation="vertical"
                gutter={20}
                data={[
                  {
                    name: "Terawatt-hour",
                    symbol: { fill: "#9a9af8" },
                    labels: { fill: "white" },
                  },
                ]}
              />

              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick} twh`}
                style={{
                  axisLabel: { fontSize: 12, padding: 35 },
                  grid: { strokeWidth: 0 },
                  tickLabels: {
                    fill: "#e5e5e5",
                  },
                  axis: {
                    stroke: "#e5e5e5", //CHANGE COLOR OF X-AXIS
                  },
                }}
              />
              <VictoryAxis
                style={{
                  axisLabel: { fontSize: 12, padding: 30 },
                  grid: { strokeWidth: 0 },
                  tickLabels: {
                    fill: "#e5e5e5",
                  },
                  axis: {
                    stroke: "#e5e5e5", //CHANGE COLOR OF X-AXIS
                  },
                }}
              />
            </VictoryChart>
          </div>
        )}
      </div>
    );
  }
}

export default BitcoinComparissonGraph;
