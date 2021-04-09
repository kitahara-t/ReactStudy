import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Start from './components/Start';
import Menu from './components/Menu';
import AozoraList from './components/AozoraList';


function App() {
  return (
    <div className="App">
        <Router>
         <div>
          <Route path='/components/Start'      component={Start}/>
          <Route path='/components/Menu'       component={Menu}/>
          <Route path='/components/AozoraList' component={AozoraList}/>
         </div>
        </Router>
        <Router>
        <div>
           <Link to={`/components/Start`}>Start</Link>
           <br />
           <br />
        </div>
        </Router>
    </div>
  );
}

export default App;