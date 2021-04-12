import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Scrollama, Step } from "react-scrollama";
import RenewableGraph from "./RenewableGraph.js";
import BitcoinComparissonGraph from "./BitcoinComparissonGraph";
import RenewableAdoption from "./RenewableAdoption";

import BitcoinComparissonGraph2 from "./BitcoinComparissonGraph2";
import PriceGraph from "./PriceGraph.js";
import VolumeGraph from "./VolumeGraph.js";
import HashRateGraph from "./HashRateGraph.js";
import EnergyHashRateGraph from "./EnergyHashRateGraph.js";

// ADD YOUR TEXT HERE
const textContent = [
  "The Carbon Implication Of Crypto",
  "What Is Crypto",
  "What Is Crypto 2",
  "The last x years have shown an incredible rise in adoption...",
  "and price",
  "In 2020, Bitcoin consumes as much energy as 6 million US households",
  "and as much as the entire U.S Plastic Industry as a whole.",
  "hash rate",
  "hash rate vs energy",
  "Despite a rising rate of renewable adoption, the future looks bleak",
  "And not necessarily to the noblest end",
  "We need to establish policies that leverage the benefits of cryptocurrency while looking out for the environment. Here’s what we can do:",
  "<h5>Apply lower bounds on algorithm efficiency:</h5> Bitcoin consumes an immense amount of energy, but only makes up 80% of the market cap and is actually more energy efficient than a lot of its counterparts. This is because it uses a SHA-256 hash algorithm, which cryptocurrencies like Monero and Dogecoin do not support, rendering them magnitudes more energy intensive.",
  "<h5>Move away from proof-of-work models:</h5> These reward greater computing power and encourage. Bitcoin is one of the more efficient proof-of-work coins out there, but there are proof-of-stake alternatives like Tezos that consume on the order of a million times less energy.",
  "<h5>Very carefully consider worthwhile use cases for Bitcoin:</h5> While companies are trying to remain trendy by accepting Bitcoin payments today, a single Bitcoin transaction consumes ~ 821kWH of energy. With ~369 billion credit card transactions per year (as of 2018), and rising this would mean 303 trillion kWh/year, 100x that of the US total energy consumption/year.",
  "<h5>We need better regulation.</h5>",
];

// ADD YOUR VIZ COMPONENT HERE. ARRAY MUST BE SAME LENGTH AS TEXT CONTENT ARRAY.
// IF YOU WANT IT TO PERSIST FOR MORE THAN 1 TEXT BLOCK THEN REPEAT IT

const vizContent = [
  <RenewableGraph />,
  <RenewableGraph />,
  <RenewableGraph />,
  <VolumeGraph />,
  <PriceGraph />,
  <BitcoinComparissonGraph />,
  <BitcoinComparissonGraph2 />,
  <HashRateGraph />,
  <EnergyHashRateGraph />,
  <RenewableAdoption />,
  <RenewableGraph />,
  <RenewableGraph />,
  <RenewableGraph />,
  <RenewableGraph />,
  <RenewableGraph />,
  <RenewableGraph />,
];

const sectionHeight = 100;

const styles = {
  navbar: {
    position: "fixed",
    display: "flex",
    top: 0,
    right: 0,
    zIndex: 1,
    "& a": {
      display: "block",
      fontSize: "20px",
      padding: "20px",
    },
  },
  sectionBreak: {
    background: "green",
    height: sectionHeight + "vh",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 32,
    padding: sectionHeight / 2 + "vh 0%",
    color: "white",
  },
  description: {
    maxWidth: 600,
    margin: "10px auto 30px",
    fontSize: 22,
    lineHeight: "28px",
    "& a": {
      color: "black",
    },
  },
  pageSubtitle: {
    textAlign: "center",
    fontSize: 22,
    color: "#888",
  },
  graphicContainer: {
    padding: "40vh 2vw 20vh",
    display: "flex",
    justifyContent: "space-between",
  },
  graphic: {
    flexBasis: "60%",
    position: "sticky",
    width: "100%",
    height: "60vh",
    top: "20vh",
    backgroundColor: "#aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      fontSize: "5rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#fff",
    },
  },
  scroller: {
    flexBasis: "35%",
  },
  step: {
    margin: "0 auto 1rem auto",
    padding: "180px 0",
    height: "80vh",
    "& p": {
      textAlign: "center",
      padding: "1rem",
      fontSize: "1.8rem",
      marginTop: "75%",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
  textColor: {
    color: "white",
  },
  subhed: {
    maxWidth: 600,
    margin: "10px auto 15px",
    fontSize: 22,
    lineHeight: "28px",
    "& a": {
      color: "black",
    },
    textAlign: "center",
  },
};

class Scrolly extends PureComponent {
  state = {
    data: 0,
    steps: [...Array(textContent.length).keys()],
    progress: 0,
    text: textContent[0],
    viz: vizContent[0],
  };

  onStepEnter = ({ data }) => {
    var text = textContent[data];
    var viz = vizContent[data];
    this.setState({ data, text, viz });
  };

  onStepExit = ({ direction, data }) => {
    if (direction === "up" && data === this.state.steps[0]) {
      this.setState({ data: 0, text: "", viz: "" });
    }
  };

  onStepProgress = ({ progress }) => {
    // console.log('progress', progress)
    this.setState({ progress });
  };

  render() {
    const { data, steps, progress, text, viz } = this.state;
    const { classes, slice } = this.props;
    const startSlice = slice[0];
    const endSlice = slice[1];
    return (
      <div>
        <p className={classes.pageSubtitle}>Scroll ↓</p>
        {/*Container for entire scrollytelling*/}
        <div className={classes.graphicContainer}>
          {/*Container For Left Side Text*/}
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress
              onStepProgress={this.onStepProgress}
              offset={0.5}
              debug
            >
              {steps.slice(startSlice, endSlice).map((value) => {
                const isVisible = value === data;
                return (
                  <Step data={value} key={value}>
                    <div className={classes.step}>
                      <p className={classes.textColor}>{text}</p>
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
          {/* Container For Right Side Viz*/}
          <div className={classes.graphic}>{viz}</div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Scrolly);
