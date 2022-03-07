import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

import Watch from './components/pages/Watch';
import Apple from './components/pages/Apple';
import Samsung from './components/pages/Samsung';
import Oppo from './components/pages/Oppo';
import Xiaomi from './components/pages/Xiaomi';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/watch' component={Watch} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/apple' component={Apple} />
        <Route path='/samsung' component={Samsung} />
        <Route path='/oppo' component={Oppo} />
        <Route path='/xiaomi' component={Xiaomi} />
        
      </Switch>
    </Router>
  );
}

export default App;
