import "@babel/polyfill";
import logo from "./logo.svg";
import "./App.css";
import Scrolly from "./Scrolly.js";
import SectionScreen from "./SectionScreen.js";
import ExplainScreen from "./ExplainScreen.js"
import TitleScreen from "./TitleScreen.js";
import { sectionContent } from "./textContent.js";
import { colors } from "./theme.js";

function App() {
  console.log("BLACK", colors);
  return (
    <div className="App">
      <header className="App-header"></header>
      <TitleScreen
        title={["The Environmental", "Impact of Bitcoin"]}
        subtitle="exploring the energy consumption of Bitcoin and other cryptocurrencies"
        textColor="white"
      />
      <SectionScreen
        title="The Rise of Bitcoin"
        text={sectionContent[0]}
        textColor="black"
        backgroundColor={colors.cryptocream}
      />
      <Scrolly slice={[0, 2]} background={colors.cryptocream} />
      <SectionScreen
        title={"Bitcoin's Large Energy Footprint"}
        text={sectionContent[1]}
        textColor={colors.cryptocream}
        backgroundColor={"black"}
      />
      <Scrolly slice={[2, 5]} background={colors.cryptoblack} />
      <SectionScreen
        title={"Under The Hood"}
        text={sectionContent[2]}
        textColor={'black'}
        backgroundColor={colors.cryptocream}
      />
      <Scrolly slice={[5, 8]} background={colors.cryptocream} is_info={true} />
      <Scrolly slice={[8, 10]} background={colors.cryptocream} />
      <SectionScreen
        title={"What Can We Do?"}
        text={sectionContent[3]}
        textColor={colors.cryptocream}
        backgroundColor={colors.cryptoblack}
      />
      <Scrolly slice={[10, 13]} background={colors.cryptoblack} text_color={colors.cryptocream} />
      <SectionScreen
        title={"Bibliography"}
        text={sectionContent[4]}
        textColor={colors.cryptoblack}
        backgroundColor={colors.cryptocream}
      />
      <SectionScreen
        title={""}
        text={sectionContent[5]}
        textColor={colors.cryptoblack}
        backgroundColor={colors.cryptocream}
      />
    </div>
  );
}

export default App;
