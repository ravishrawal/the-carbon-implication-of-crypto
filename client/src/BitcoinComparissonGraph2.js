import { Component } from "react";
import { VictoryChart, VictoryTheme, VictoryLabel, VictoryBar } from "victory";
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
              minDomain={{ y: 0 }}
              maxDomain={{ y: 270 }}
              width={450}
            >
              <VictoryLabel
                text="Energy Consumtion comparison (twh)"
                x={225}
                y={30}
                textAnchor="middle"
                style={[{ fill: "white" }]}
              />

              <VictoryBar
                animate={{
                  duration: 3000,
                  onLoad: { duration: 3000 },
                }}
                barWidth={({ index }) => index * 2 + 8}
                style={{
                  data: { fill: "#c43a31" },
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
