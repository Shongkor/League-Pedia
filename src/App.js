import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Explore from './Components/Explore/Explore';


function App() {
  return (
    <div>
       <Router>
        <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore/:idTeam">
              <Explore />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
       </Router>
      
    </div>
  );
}

export default App;
