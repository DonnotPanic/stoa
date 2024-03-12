import React, { useCallback } from "react";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

import CodeBlock from "./code-block";
import StyleLink from "./stylelink";
import WiredStyleCheckbox from "./vendor/wired_checkbox";
import WiredStyleImage from "./vendor/wired_image";
import StyleVideo from "./vendor/react_video";
import Divider from "./divider";
import { observer } from "mobx-react-lite";

import "./divider.styl";
import "./markdown.styl";




const MarkdownContainer = observer(({data, blogContainer,sources, setSources, handleSlide, ...args}) => {

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
          blogContainer.init(
            node.clientHeight,
            node.scrollTop,
            node.offsetTop,
            getTitles(node),
            getOffsets(node),
            true,
            node.clientWidth,
            node.children[0],
          );
          const resizeObserver = new ResizeObserver(() => {
            blogContainer.resize(getOffsets(node), node.clientWidth);
          });
          resizeObserver.observe(node);
        },
        [blogContainer],
      );

    const components = {
        a: StyleLink,
        code: CodeBlock,
        hr: ({ ...args }) => {
          return <Divider blogContainer={blogContainer} {...args} />;
        },
        input: WiredStyleCheckbox,
        img: ({ src, ...args }) => {
          return (
            <WiredStyleImage
              src={src}
              sources={sources}
              setSources={setSources}
              setSlide={handleSlide}
              {...args}
            />
          );
        },
        video: StyleVideo,
      };

    return (
        <div ref={ref} id="blog-container" className="blog-link">
            <Markdown
                remarkPlugins={[gfm, remarkMath, remarkEmoji]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={data}
                components={components}
                />
        </div>
    );
});

export default MarkdownContainer;