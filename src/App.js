import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.styl";
import Blog from "./components/blog/blog";
import Home from "./components/home/home";
import Header from "./components/header/header";
import BlogList from "./components/blogList/blogList";
import { makeAutoObservable } from "mobx";

class BlogContainer {
  clientHeight = 0;
  scrollTop = 0;
  offsetTop = 0;
  titles = [];
  offsets = [];
  isReady = false;
  clientWidth = 0;
  head = {};
  isUpdated = false;

  constructor() {
    makeAutoObservable(this);
  }

  init(
    clientHeight,
    scrollTop,
    offsetTop,
    titles,
    offsets,
    isReady,
    clientWidth,
    head,
  ) {
    this.clientHeight = clientHeight;
    this.scrollTop = scrollTop;
    this.offsetTop = offsetTop;
    this.titles = titles;
    this.offsets = offsets;
    this.isReady = isReady;
    this.clientWidth = clientWidth;
    this.head = head;
    this.isUpdated = true;
  }

  resize(offsets, clientWidth) {
    this.offsets = offsets;
    this.clientWidth = clientWidth;
    this.isUpdated = true;
  }

  update() {
    this.isUpdated = false;
  }
}

const blogContainer = new BlogContainer();

function App() {
  return (
    <BrowserRouter>
      <Header blogContainer={blogContainer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog/:blogid"
          element={<Blog blogContainer={blogContainer} />}
        />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
