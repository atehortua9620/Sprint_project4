import './Styles/App.css';
import log from './Images/Subtract.png';
import text_1 from './Images/Vector-1.svg';
import text from './Images/Vector.svg';
import Home from './Components/HomeImg'

function App() {
  return (
    <div className="App">
      <div class="left">
        <img src={log} alt="logo" ></img>
        <div className="paroles">
          <img src={text_1} alt="paroles"></img>
          <img src={text} alt="paroles"></img>
        </div>
      </div>
  
    </div>
  );
}

export default App;
