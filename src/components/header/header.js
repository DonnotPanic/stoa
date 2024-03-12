import React, {
  useLayoutEffect,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";

import Nav from "./nav";
import Searchbar from "./searchbar";
import Toggler from "./toggler";
import "./header.styl";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";

const Header = observer(({ blogContainer }) => {
  const params = useParams();

  const [style, setStyle] = useState("");
  const [prevTop, setPrevTop] = useState(0);
  const [isDown, setIsDown] = useState(true);
  const [title, setTitle] = useState("");

  const header = useRef();

  useEffect(() => {
    if (!params.blogid) {
      setIsDown(true);
      setTitle("");
    }
  }, [params.blogid]);

  const headerScrolling = useCallback(
    (e) => {
      if (!blogContainer.isReady) return;
      let top = e.target.documentElement.scrollTop;
      const height = header.current.clientHeight;
      const offset = blogContainer.offsetTop;
      if (top + height >= offset) {
        setStyle(" scrolling-header");
      } else {
        setStyle("");
      }
    },
    [blogContainer],
  );

  const showTitle = useCallback(
    (e) => {
      if (!blogContainer.isReady) return;
      const top = e.target.documentElement.scrollTop;
      let query = blogContainer.head;
      if (top < query.offsetTop + query.clientHeight + 200) {
        setIsDown(true);
        return;
      }
      if (Math.abs(prevTop - top) < 100) return;
      if (prevTop < top) {
        setIsDown(true);
      } else if (prevTop > top) {
        if (title !== query.innerText) {
          setTitle(query.innerText);
        }
        setIsDown(false);
      }
      setPrevTop(e.target.documentElement.scrollTop);
    },
    [blogContainer, prevTop, title],
  );

  useLayoutEffect(() => {
    window.addEventListener("scroll", headerScrolling);
    window.addEventListener("scroll", showTitle);

    return () => {
      window.removeEventListener("scroll", headerScrolling);
      window.removeEventListener("scroll", showTitle);
    };
  }, [headerScrolling, showTitle]);

  return (
    <>
      <div className="padding" />
      <div ref={header} id="header" className={style}>
        {isDown ? (
          <>
            <Toggler />
            <Nav />
            <Searchbar />
          </>
        ) : (
          <center>{title}</center>
        )}
      </div>
    </>
  );
});

export default Header;
