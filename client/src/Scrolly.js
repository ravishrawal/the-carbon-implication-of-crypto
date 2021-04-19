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
  // "",
  // <img src={MiningImg} />,
  // <img src={BlockchainImg} />,
  // <img src={BitcoinImg} />,
  <VolumeGraph />,
  <PriceGraph />,
  <BitcoinComparissonGraph />,
  <BitcoinComparissonGraph2 />,
  <BarChartTs />,
  '',
  <img src={MiningImg} />,
  <img src={BlockchainImg} />,
  <img src={BitcoinImg} />,
  <EnergyHashGraph />,
  <RenewableAdoption />,
  <BarChartNoPoW />,
  <BarChart />,
];

const sectionHeight = 100;

const styles = {
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
  myTitle: {
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
    alignItems: "baseline",
    "& p": {
      fontSize: "5rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#fff",
    },
  },
  infographic: {
    flexBasis: "40%",
    position: "sticky",
    width: "100%",
    height: "60vh",
    top: "20vh",
    display: "flex",
    alignItems: "center",
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
  infoscroller: {
    flexBasis: "55%",
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
  infostep: {
    margin: "0 auto 1rem auto",
    padding: "180px 0",
    height: "80vh",
    "& p": {
      textAlign: "left",
      padding: "1rem",
      fontSize: "1.8rem",
      marginTop: "48vh",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
};

class Scrolly extends PureComponent {
  state = {
    data: null,
    steps: [...Array(textContent.length).keys()],
    progress: 0,
    text: null,
    viz: null,
  };

  onStepEnter = ({ data }) => {
    var text = textContent[data];
    var viz = vizContent[data];
    setTimeout(()=>{
      this.setState({ data, text, viz });
    },300)
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
    const { classes, slice, background, is_info } = this.props;
    var { text_color } = this.props;
    const startSlice = slice[0];
    const endSlice = slice[1];
    text_color = text_color ? text_color : "black";
    return (
      <div style={{ background: background }}>
        {/*Container for entire scrollytelling*/}
        <div className={classes.graphicContainer}>
        {/* Container For Right Side Viz*/}
          <div className={is_info ? classes.infographic : classes.graphic}>{viz}</div>
          {/*Container For Left Side Text*/}
          <div className={is_info ? classes.infoscroller : classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress
              onStepProgress={this.onStepProgress}
              offset={0.5}
            >
              {steps.slice(startSlice, endSlice).map((value) => {
                return (
                  <Step data={value} key={value}>
                    <div className={is_info ? classes.infostep : classes.step}>
                      <p style={{color: text_color}}>{text}</p>
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Scrolly);
