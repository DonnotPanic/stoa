import React, { useState, useEffect, lazy } from "react";
import FslightBox from "fslightbox-react";
import "katex/dist/katex.min.css";
import { decode64 } from "../../utils/base64";

import Sidebar from "./sidebar/sidebar";

import metaProperty from "./meta";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const MarkdownContainer = lazy(() => import("./markdown"));

const Blog = observer(({ blogContainer }) => {
  const params = useParams();
  const [sources, setSources] = useState([]);
  const [lightboxState, setLightboxState] = useState({
    toggler: false,
    sourceIndex: 0,
  });
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!params.blogid) return;
    async function fetchData() {
      console.log(`fetch ${decode64(decodeURI(params.blogid))}.md`);
      await fetch(`/markdowns${decode64(decodeURI(params.blogid))}.md`)
        .then((r) => r.text())
        .then((text) => setData(metaProperty(text)));
      setIsLoading(false);
    }
    fetchData();
  }, [params.blogid]);

  const handleSlide = (index) => {
    setLightboxState((el) => ({ toggler: !el.toggler, sourceIndex: index }));
  };

  return (
    <>
      {isLoading ? (
        <div className="on-loading">
          <img src="/image/loading.png" alt="ON LOADING..." />
        </div>
      ) : (
        <>
          <div className="zooming-wrapper">
            <FslightBox
              className="blog-img-zoom"
              toggler={lightboxState.toggler}
              sourceIndex={lightboxState.sourceIndex}
              sources={sources}
            />
          </div>
          <MarkdownContainer data={data} blogContainer={blogContainer}
            sources={sources} setSources={setSources} handleSlide={handleSlide} />
          <Sidebar blogContainer={blogContainer} />
          <div id="footer"></div>
        </>
      )}
    </>
  );
});

export default Blog;
