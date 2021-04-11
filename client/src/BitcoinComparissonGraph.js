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
              maxDomain={{ y: 26000 }}
              width={450}
            >
              <VictoryLabel
                text="2020 Energy Consumtion (twh)"
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
                  { x: "NYC \n Subway", y: 180 }, //1.8, but added 180 so it is observable on the map
                  {
                    x: "10 million flights \n from NYC to LA ",
                    y: 320.7,
                    y0: 3,
                  },
                  { x: "US \nhouseholds", y: 6081 },
                  { x: "Bitcoin\n 2020 energy", y: 25693, y0: 2 },
                  { x: 5, y: 6, y0: 3 },
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
