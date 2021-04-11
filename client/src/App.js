import logo from './logo.svg';
import './App.css';
import Scrolly from './Scrolly.js';
import SectionScreen from './SectionScreen.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <SectionScreen text={"The Carbon Implication Of Bitcoin"} textColor='white' backgroundColor='green'/>
      <Scrolly slice={[0, 5]}/>
      <SectionScreen text={"But Let's Gain Some Perspective"} textColor='black' backgroundColor='red'/>
      <Scrolly slice={[5, 12]}/>
    </div>
  );
}

export default App;
