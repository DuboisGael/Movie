import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './components/scss/App.scss';
import Home from "./components/Homepage";
import Discover from "./components/Discover";
import Detail from "./components/Detailpage";



function App() {
  return (
  <div className="App">
    
    <Router>
   
      <Switch>
        <Route path="/"exact><Home/></Route>
      </Switch>
      <Switch>
        <Route path="/discover"><Discover/></Route>
      </Switch>
      <Switch>
        <Route path="/detail"><Detail/></Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;
