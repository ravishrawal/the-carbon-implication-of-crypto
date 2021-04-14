import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Scrollama, Step } from "react-scrollama";
import RenewableGraph from "./RenewableGraph.js";
import PriceGraph from "./PriceGraph.js";
import VolumeGraph from "./VolumeGraph.js";
import EnergyHashGraph from "./EnergyHashGraph.js";
import BarChart from "./BarChart.js";
import BarChartTs from "./BarChartTs.js";
import BarChartNoPoW from "./BarChartNoPoW.js";
import BitcoinComparissonGraph from "./BitcoinComparissonGraph";
import BitcoinComparissonGraph2 from "./BitcoinComparissonGraph2";
import RenewableAdoption from "./RenewableAdoption";
import { scrollyContent as textContent } from "./textContent.js";

import BenefitsTable from "./BenefitsTable.png";
import BitcoinImg from "./bitcoin-img.jpeg";
import MiningImg from "./crypto-mining-img.jpeg";
import BlockchainImg from "./blockchain-img.jpeg";

import { colors } from "./theme.js";

// ADD YOUR VIZ COMPONENT HERE. ARRAY MUST BE SAME LENGTH AS TEXT CONTENT ARRAY.
// IF YOU WANT IT TO PERSIST FOR MORE THAN 1 TEXT BLOCK THEN REPEAT IT

const vizContent = [
  "",
  <img src={MiningImg} />,
  <img src={BlockchainImg} />,
  <img src={BitcoinImg} />,
  <VolumeGraph />,
  <PriceGraph />,
  <BitcoinComparissonGraph />,
  <BitcoinComparissonGraph2 />,
  <BarChartTs />,
  <EnergyHashGraph />,
  <RenewableAdoption />,
  <BarChartNoPoW />,
  <BarChart />,
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
    background: colors.cryptoblue,
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
    const { classes, slice, background } = this.props;
    const startSlice = slice[0];
    const endSlice = slice[1];
    return (
      <div style={{ background: background }}>
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
