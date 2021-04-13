import "@babel/polyfill";
import logo from './logo.svg';
import './App.css';
import Scrolly from './Scrolly.js';
import SectionScreen from './SectionScreen.js';
import TitleScreen from './TitleScreen.js';
import {titleContent} from './textContent.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TitleScreen title={"The environmental impact of cryptocurrency"} subtitle="exploring the energy consumption of Bitcoin and other cryptocurrencies" textColor='black'/>
      <SectionScreen title="What is cryptocurrency?" text={titleContent[0]} textColor='white' backgroundColor='green'/>
      <Scrolly slice={[0, 7]}/>
      <SectionScreen text={"But Let's Gain Some Perspective"} textColor='black' backgroundColor='red'/>
      <Scrolly slice={[7, 12]}/>
    </div>
  );
}

export default App;
