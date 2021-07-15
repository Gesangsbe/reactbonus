import logo from './logo.svg';
import './App.css';
import rhcp from './img/rhcp.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rhcp} className="App-logo" alt="rhcp" />
        <p>
          Gesang <code>Sabae</code>
        </p>
        <p>
          Kelompok Alphabet
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
