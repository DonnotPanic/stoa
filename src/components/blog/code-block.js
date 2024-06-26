import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from 'https://cdn.jsdelivr.net/npm/react-syntax-highlighter@15.5.0/+esm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons/faClipboard";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";

import "./code-block.styl";

export default function CodeBlock({
  node,
  inline,
  className,
  children,
  ...args
}) {
  const value = String(children).replace(/\n$/, "");
  const [isCopied, setIsCopied] = useState(false);

  const match = /language-(\w+)/.exec(className || "");

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      {!inline && match ? (
        <>
          <div id="code-copy">
            {isCopied ? (
              <FontAwesomeIcon
                color="silver"
                id="copyed-icon"
                icon={faClipboardCheck}
              />
            ) : (
              <CopyToClipboard text={value} onCopy={handleCopy}>
                <FontAwesomeIcon
                  color="silver"
                  id="copy-icon"
                  icon={faClipboard}
                />
              </CopyToClipboard>
            )}
          </div>
          <SyntaxHighlighter
            PreTag="div"
            children={value}
            language={match[1]}
            style={dark}
            {...args}
          />
        </>
      ) : (
        <code className={className} {...args}>
          {value}
        </code>
      )}
    </>
  );
}
