import React, { useState, useEffect, lazy } from "react";
import "./home.styl";

const Markdown = lazy(()=>import('https://cdn.jsdelivr.net/npm/react-markdown@9.0.1/+esm'));

function Home() {
  const [data, setdata] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch("/markdowns/intros/about.cn.md")
        .then((r) => r.text())
        .then((text) => setdata(text));
    }
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="on-loading">
          <img src="image/loading.png" alt="ON LOADING..." />
        </div>
      ) : (
        <div className="intro-container">
          <Markdown children={data} />
        </div>
      )}
    </>
  );
}

export default Home;
