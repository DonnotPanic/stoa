import React, { createContext, useRef } from 'react'
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import Blog from './component/blogs/blogs'
import Home from './component/home/home'
import Header from './component/header/header'

export const BlogContext = createContext();

function App() {

  const blogRef = useRef()

  return (
    <HashRouter>
      <BlogContext.Provider value={blogRef} >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blog ref={blogRef} />
          </Route>
        </Switch>
      </BlogContext.Provider>
    </ HashRouter>
  );
}

export default App;