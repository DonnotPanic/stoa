import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.styl";
import Header from "./components/header/header";
import { makeAutoObservable } from "mobx";

const Home = lazy(() => import("./components/home/home"));
const Blog = lazy(() => import("./components/blog/blog"));
const BlogList = lazy(() => import("./components/blogList/blogList"));

const Loading = () => {
  return(
    <div className="on-loading">
      <img src="/image/loading.png" alt="ON LOADING..." />
    </div>);
}

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
        <Route path="/" element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>} />
        <Route
          path="/blog/:blogid"
          element={
            <Suspense fallback={<Loading />}>
              <Blog blogContainer={blogContainer} />
            </Suspense>}
        />
        <Route path="/blogs"
          element={
            <Suspense fallback={<Loading />}>
              <BlogList />
            </Suspense>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
