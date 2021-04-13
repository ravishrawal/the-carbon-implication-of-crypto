import { Component } from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
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
              domainPadding={20}
              theme={VictoryTheme.material}
              minDomain={{ y: 0 }}
              maxDomain={{ y: 270 }}
              width={450}
            >
              <VictoryLabel
                text="Energy Consumtion comparison "
                x={225}
                y={30}
                textAnchor="middle"
                style={[{ fill: "white" }]}
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

              <VictoryBar
                animate={{
                  duration: 3000,
                  onLoad: { duration: 3000 },
                }}
                barWidth={({ index }) => index * 2 + 8}
                style={{
                  data: { fill: "#9a9af8" },
                }}
                data={[
                  { x: "U.S\n Beverage \n 2018", y: 32.34 },
                  { x: "U.S\n Dairy Industry\n 2018", y: 36.34 },
                  { x: "Bitcoin\n energy \n 2020", y: 70.39 },
                  { x: "U.S Plastics\n Industry\n 2018", y: 75.32 },
                  { x: "U.S Petroleum \n Industry\n 2018", y: 265.65 },

                  // {
                  //   x: "Federal Government 2017 ",
                  //   y: 268.8,
                  // },
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

// https://www.eia.gov/consumption/manufacturing/data/2018/#r13
// https://www.eia.gov/consumption/manufacturing/data/2018/pdf/Table1_2.pdf
