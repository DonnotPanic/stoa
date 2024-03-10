import React, { createContext, useRef } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './App.styl';
import Blog from './components/blog/blog'
import Home from './components/home/home'
import Header from './components/header/header'
import BlogList from './components/blogList/blogList';

export const BlogContext = createContext();

function App() {

  const blogRef = useRef()

  return (
    <BrowserRouter>
      <BlogContext.Provider value={blogRef} >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogid" element={<Blog ref={blogRef} />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </BlogContext.Provider>
    </ BrowserRouter>
  );
}

export default App;