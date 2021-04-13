import "@babel/polyfill";
import logo from './logo.svg';
import './App.css';
import Scrolly from './Scrolly.js';
import SectionScreen from './SectionScreen.js';
import TitleScreen from './TitleScreen.js';
import {titleContent} from './textContent.js';
import {colors} from './theme.js';

function App() {
  console.log('BLACK', colors)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TitleScreen title={"The environmental impact of cryptocurrency"} subtitle="exploring the energy consumption of Bitcoin and other cryptocurrencies" textColor='black'/>
      <SectionScreen title="What is cryptocurrency?" text={titleContent[0]} textColor='white' backgroundColor={colors.cryptoblue}/>
      <Scrolly slice={[0, 4]} background={colors.cryptocream}/>
      <Scrolly slice={[4, 6]} background={colors.cryptoblack}/>
      <SectionScreen title={"But Let's Gain Some Perspective"} textColor={colors.cryptolightgreen} backgroundColor={colors.cryptogrey}/>
      <Scrolly slice={[6, 11]} background={colors.cryptoblack}/>
      <Scrolly slice={[11, 14]} background={colors.cryptocream}/>
    </div>
  );
}

export default App;
