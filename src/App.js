import React, { createContext, useRef } from 'react'
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import Blog from './components/blogs/blogs'
import Home from './components/home/home'
import Header from './components/header/header'

export const BlogContext = createContext();

function App() {

  const blogRef = useRef()

  return (
    <BlogContext.Provider value={blogRef} >
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blog ref={blogRef} />
          </Route>
        </Switch>
      </ HashRouter>
    </BlogContext.Provider>
  );
}

export default App;