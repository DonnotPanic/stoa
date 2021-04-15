import React from 'react'
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import Blog from './component/blogs/blogs' 
import Home from './component/home/home'
import Header from './component/header/header'

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
      </Switch>
    </ HashRouter>
  );
}

export default App;
