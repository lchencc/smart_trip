import './App.css';
import Navbar from './components/Navbar.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
