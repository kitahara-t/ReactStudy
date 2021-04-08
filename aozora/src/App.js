import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import ApiFetch from './components/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router><Link to={`/components/Start`}>Go To Start</Link></Router>
        <ApiFetch />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;