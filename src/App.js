import logo from './logo.svg';
import './App.css';
import rhcp from './img/rhcp.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rhcp} className="App-logo" alt="rhcp" />
        <p>
          <h1>GESANG SABAE</h1>
        </p>
        <p>
          <h3>Kelompok Alphabet</h3>
        </p>
        <a
          className="App-link"
          href="https://twitter.com/gesangragil"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colek Disini
        </a>
      </header>
    </div>
  );
}

export default App;
