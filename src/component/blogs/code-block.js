import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import './code-block.css'

export default function CodeBlock({ node, inline, className, children, ...args }) {
    const value = children[0]
    const [isCopied, setIsCopied] = useState(false);

    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : "text";

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <>
            {
                !inline
                    ? <>
                        <div id="code-copy">
                            {
                                isCopied
                                    ? <FontAwesomeIcon color="silver" id="copyed-icon" icon={faClipboardCheck} />
                                    : <CopyToClipboard text={value} onCopy={handleCopy}>
                                        <FontAwesomeIcon color="silver" id="copy-icon" icon={faClipboard} />
                                    </CopyToClipboard>
                            }
                        </div>
                        <SyntaxHighlighter language={language} style={dark} {...args}>
                            {value}
                        </SyntaxHighlighter>
                    </>
                    : <code className={className} {...args}>{value}</code>
            }
        </>
    )
}
