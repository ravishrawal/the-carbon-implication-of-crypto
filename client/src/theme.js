// Colors

const cryptoblue = "#0070EE"
const cryptolightgreen = "#DAECE2"
const cryptolightblue = "#C9E5FE"
const cryptopurple = "#9A9AF8"
const cryptocream = "#E5E5E5"
const cryptogrey = "#8A8A8F"
const cryptoblack = "#000000"
const colors = [
  cryptoblue,
  cryptolightgreen,
  cryptolightblue,
  cryptopurple,
  cryptocream,
  cryptogrey,
  cryptoblack
];

const colors_obj = {
  cryptoblue,
  cryptolightgreen,
  cryptolightblue,
  cryptopurple,
  cryptocream,
  cryptogrey,
  cryptoblack
};

// Typography
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const roboto = "Roboto Light";
const letterSpacing = "normal";
const fontSize = 12;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50,
  fill: cryptolightgreen
};

// * Labels
const baseLabelStyles = {
  fontFamily: 'Roboto',
  fontSize,
  letterSpacing,
  padding,
  fill: cryptogrey,
  stroke: "transparent",
  strokeWidth: 0
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const theme = {
  axis: Object.assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: cryptogrey,
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: Object.assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
          fontSize:6

        }),
        grid: {
          fill: "none",
          stroke: cryptoblack,
          strokeWidth:0,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: cryptogrey,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: Object.assign({}, baseLabelStyles, {
          fill: cryptogrey
        })
      }
    },
    baseProps
  ),
  polarDependentAxis: Object.assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      }
    }
  }),
  bar: Object.assign(
    {
      style: {
        data: {
          fill: cryptopurple,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  chart: Object.assign(
  {
      borderWidth: 8,
      style: {
        data: {
          fill: cryptogrey,
          opacity: 1,
          stroke: cryptolightgreen,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  group: Object.assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  histogram: Object.assign(
    {
      style: {
        data: {
          fill: cryptolightgreen,
          stroke: cryptoblue,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
        fill: cryptopurple
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: Object.assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: cryptopurple,
          strokeWidth: 2
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  stack: Object.assign(
    {
      colorScale: colors
    },
    baseProps
  )
};

export default theme;

export {colors_obj as colors}