import './App.css';
import Navbar from './components/Navbar.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './components/pages/Home.jsx';
import Plan from './components/pages/Plan.jsx';
import Map from './components/pages/Map.jsx';
import Contact from './components/pages/Contact.jsx';
import Final from './components/pages/Final.jsx';

import './App.css';

function App() {
  return (
    <div>
      <React.StrictMode>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/plan" component={Plan} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/final" component={Final} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
