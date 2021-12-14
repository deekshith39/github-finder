import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import About from './Pages/About';
import './App.css';
import { Home } from './Pages/Home';
import GithubState from './context/github/GithubState';
import NotFound from './Pages/NotFound';

const App = () => {

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login'component={User}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );

}

export default App;
