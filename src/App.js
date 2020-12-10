import './App.css';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>   
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} /> 
        </Router>
    </div>
  );
}

export default App;
