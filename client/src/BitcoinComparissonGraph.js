import { Component } from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryBar,
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
                text="2020 Energy Consumtion (twh)"
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
                  { x: "NYC \n Subway", y: 1.8 },

                  { x: "1 million US \nhouseholds", y: 11 },
                  {
                    x: "1 million flights \n from NYC to LA ",
                    y: 32.7,
                  },
                  { x: "Bitcoin\n 2020 energy", y: 70.39 },
                ]}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axisLabel: { fontSize: 12, padding: 35 },
                  grid: { strokeWidth: 0 },
                }}
              />
              <VictoryAxis
                style={{
                  axisLabel: { fontSize: 12, padding: 30 },
                  grid: { strokeWidth: 0 },
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
