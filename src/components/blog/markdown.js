import React from "react";
import Markdown from 'https://cdn.jsdelivr.net/npm/react-markdown@9.0.1/+esm';
import gfm from 'https://cdn.jsdelivr.net/npm/remark-gfm@4.0.0/+esm';
import remarkMath from 'https://cdn.jsdelivr.net/npm/remark-math@6.0.0/+esm';
import remarkEmoji from 'https://cdn.jsdelivr.net/npm/remark-emoji@4.0.1/+esm';
import rehypeKatex from "https://esm.sh/rehype-katex@7";
import rehypeRaw from "https://esm.sh/rehype-raw@7?bundle";

import CodeBlock from "./code-block";
import StyleLink from "./stylelink";
import WiredStyleCheckbox from "./vendor/wired_checkbox";
import WiredStyleImage from "./vendor/wired_image";
import StyleVideo from "./vendor/react_video";
import Divider from "./divider";
import { observer } from "mobx-react-lite";

import "./divider.styl";
import "./markdown.styl";

const MarkdownContainer = observer(({data, blogContainer,sources, setSources, handleSlide}) => {

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
      <Markdown
          remarkPlugins={[gfm, remarkMath, remarkEmoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          children={data}
          components={components}
          />
    );
});

export default MarkdownContainer;