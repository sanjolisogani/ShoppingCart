import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component{
  render () {
  return (
    <Router>
   <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path ='/' component={ProductList}/>
    <Route exact path ="/cart" component={Cart}/>
    </Switch>
    <Modal/>
   </div>
   </Router>

  );
}
}
export default App;
