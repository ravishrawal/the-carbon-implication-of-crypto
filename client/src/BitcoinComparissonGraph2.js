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
              maxDomain={{ y: 270 }}
              width={450}
            >
              <VictoryLegend
                theme={theme}
                x={50}
                y={45}
                orientation="vertical"
                gutter={20}
                data={[
                  {
                    name: "Energy Consumption (TWh)"
                  },
                ]}
              />

              <VictoryBar
                theme={theme}
                labels={true}
                labelComponent={
                  <VictoryLabel
                  text={({ datum }) => `${Math.round(datum.y*10)/10}`}
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
                  { x: "U.S. Beverage\nIndustry\nFor A Year", y: 32.34 },
                  { x: "U.S. Dairy\nIndustry\nFor A Year", y: 36.34 },
                  { x: "Bitcoin\nNetwork For\nA Year", y: 70.39 },
                  { x: "U.S. Plastics\nIndustry For\nA Year", y: 75.32 },
                  { x: "U.S. Petroleum\nIndustry For\nA Year", y: 265.65 },

                  // {
                  //   x: "Federal Government 2017 ",
                  //   y: 268.8,
                  // },
                ]}
              />
              <VictoryAxis
                dependentAxis
                theme={theme}
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

// https://www.eia.gov/consumption/manufacturing/data/2018/#r13
// https://www.eia.gov/consumption/manufacturing/data/2018/pdf/Table1_2.pdf
