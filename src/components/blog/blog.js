import React, { useState, useEffect, lazy, useCallback } from "react";

import { decode64 } from "../../utils/base64";

import metaProperty from "./meta";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const FslightBox = lazy(() => import('fslightbox-react'));
const Sidebar = lazy(() => import("./sidebar/sidebar"))
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

  const ref = useCallback(
    (node) => {
      const getTitles = (node) => {
        const t = [...node.children].filter((v) => /H[2-6]/g.test(v.tagName));
        return t;
      };
      const getOffsets = (node) => {
        const t = getTitles(node).map((e) => ({
          val: e.innerText,
          offset: e.offsetTop,
        }));
        return t;
      };
      if (node === null) return;
      // if H1 does not exists then pick the fst sentense.
      let q = [...node.children].filter((v) => /H1/g.test(v.tagName));
      q = (q.length === 0) ? node.children : q;
      blogContainer.init(
        node.clientHeight,
        node.scrollTop,
        node.offsetTop,
        getTitles(node),
        getOffsets(node),
        true,
        node.clientWidth,
        q[0],
      );
      const resizeObserver = new ResizeObserver(() => {
        blogContainer.resize(getOffsets(node), node.clientWidth);
      });
      resizeObserver.observe(node);
    },
    [blogContainer],
  );

  useEffect(() => {
    if (!params.blogid) return;
    async function fetchData() {
      console.log(`fetch ${decodeURI(decode64(params.blogid))}.md`);
      await fetch(`/markdowns${decodeURI(decode64(params.blogid))}.md`)
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
          <div ref={ref} id="blog-container" className="blog-link">
            <MarkdownContainer data={data} blogContainer={blogContainer}
              sources={sources} setSources={setSources} handleSlide={handleSlide} />
          </div>
          <Sidebar blogContainer={blogContainer} />
          <div id="footer"></div>
        </>
      )}
    </>
  );
});

export default Blog;
