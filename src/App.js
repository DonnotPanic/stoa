import React, { createContext, useRef } from 'react'
import {
  BrowserRouter,
  Routes,
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog ref={blogRef} />} />
        </Routes>
      </ BrowserRouter>
    </BlogContext.Provider>
  );
}

export default App;