import './App.css';
import Login from './Components/Login';
import PaymentDetails from './Components/PaymentDetails';
import welcomePage from './Components/WelcomePage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>   
        <Route exact path="/" component={welcomePage} />
        <Route path="/login" component={Login} /> 
        <Route path="/welcomePage" component={welcomePage} />
        <Route path="/PaymentDetails" component={PaymentDetails}/>
        </Router>
    </div>
  );
}

export default App;
