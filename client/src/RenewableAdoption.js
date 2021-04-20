import { Component } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
  VictoryLegend,
  VictoryLabel,
} from "victory";
import "./App.css";
import myDataset from "./barChartData.js";
import theme, {colors} from './theme.js';

class RenewableAdoption extends Component {
  constructor() {
    super();
    this.state = {
      myDataset,
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
    console.log('DATASET', dataset);

    return (
      <div className="graph-container">
        {dataset && (
          <div className="Graph">
            <VictoryChart
              minDomain={{ y: 0 }}
              maxDomain={{ y: 3000 }}
              width={450}
              domainPadding={{ x: 30, y: 20 }}
              theme={VictoryTheme.material}
            >
              <VictoryLegend
                x={50} y={15}
                theme = {theme}
                orientation="vertical"
                gutter={20}
                title= "Energy used by Bitcoin Network (TWh) over time"
                style={{title: {fontSize: 12, fill:colors.cryptogrey },labels: {fontSize: 10 } }}
                data={[
                  {
                    name: "Non-Renewable Energy",
                    symbol: { fill: colors.cryptoorange },
                    labels: { fill: colors.cryptogrey },
                  },
                  {
                    name: "Renewable Energy",
                    symbol: { fill: colors.cryptoblue },
                    labels: { fill: colors.cryptogrey },
                  },
                ]}
              />


              <VictoryStack colorScale={[colors.cryptoblue, colors.cryptoorange ]}>
                {dataset.map((data, i) => {
                  console.log(i)
                  return (
                    <VictoryBar
                      animate={{
                        duration: 2000,
                        onLoad: { duration: 2000 },
                      }}
                      data={data}
                      key={i}
                      labels={true}
                      labelComponent={
                        <VictoryLabel
                        text={ 
                          ({ datum }) => `${(Math.round(datum.y))}`
                        }
                        dy={i<1?-2:-10}

                        style={[{
                          fontSize:8,
                          fill: i<1?colors.cryptoblue:colors.cryptoorange
                        }]}
                        />
                      }
                    />
                  );
                })}
              </VictoryStack>
              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick}`}
                theme={theme}
                style={{
                  axisLabel: { fontSize: 12, padding: 30 },
                  grid: { strokeWidth: 0 },
                  tickLabels: {
                    fill: colors.cryptogrey,
                    fontSize: 8
                  },
                  // axis: {
                  //   stroke: "#e5e5e5", //CHANGE COLOR OF X-AXIS
                  // },
                }}
              />
              <VictoryAxis
                them={theme}
                style={{
                  axisLabel: { fontSize: 12, padding: 30 },
                  grid: { strokeWidth: 0 },
                  tickLabels: {
                    fill: colors.cryptogrey,
                    fontSize: 8
                  },
                }}
                tickFormat={[
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