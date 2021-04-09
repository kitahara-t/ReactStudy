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
        <footer>
         <br />
         <br />
         <a href="http://localhost:3000/components/Start"> START </a>
        </footer>
     </ div>
  );
}

export default App;