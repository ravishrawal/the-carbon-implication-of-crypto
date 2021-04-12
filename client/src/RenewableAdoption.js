import { Component } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
} from "victory";
import barChar from "./barCharData.js";
import "./App.css";
import myDataset from "./barCharData.js";
import data from "./data.js";

class RenewableAdoption extends Component {
  constructor() {
    super();
    this.state = {
      barChar,
    };
  }

  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        // return { x: datum.x, y: (datum.y / totals[i]) * 100 };
        return { x: datum.x, y: datum.y };
      });
    });
  }

  render() {
    // const { data } = this.state;
    const dataset = this.transformData(myDataset);
    console.log(dataset);

    return (
      <div style={{ height: "inherit", width: "inherit" }}>
        {dataset && (
          <div className="Graph">
            <VictoryChart
              minDomain={{ y: 0 }}
              maxDomain={{ y: 3000 }}
              width={630}
              domainPadding={{ x: 30, y: 20 }}
              theme={VictoryTheme.material}
            >
              <VictoryStack colorScale={["tomato", "green"]}>
                {dataset.map((data, i) => {
                  return (
                    <VictoryBar
                      animate={{
                        duration: 2000,
                        onLoad: { duration: 2000 },
                      }}
                      data={data}
                      key={i}
                    />
                  );
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis tickFormat={(tick) => `${tick} twh`} />
              <VictoryAxis
                tickFormat={[
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                  "2025",
                  "2026",
                  "2027",
                  "2028",
                  "2029",
                  "2030",
                ]}
              />
            </VictoryChart>
          </div>
        )}
      </div>
    );
  }
}

export default RenewableAdoption;
