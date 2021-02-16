import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Future Landing Page
        </p>
        <a
          className="App-link"
          href="https://storymaps.arcgis.com/stories/4bd870986b2b4f63a1ef6e1512d88489"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing StoryMap
        </a>
      </header>
    </div>
  );
}

export default App;
