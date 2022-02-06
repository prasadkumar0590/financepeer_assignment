import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
function App() {
  return (
    <Router>
    <div>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />   
          <Route path="/logout" component={Logout} />   
    </div>
    </Router>
  );
}

export default App;
