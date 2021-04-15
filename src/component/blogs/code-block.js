import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import './code-block.css'

export default function CodeBlock({ language, value }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <>
            <div id="code-copy">
                {
                    isCopied
                        ? <FontAwesomeIcon color="silver" id="copyed-icon" icon={faClipboardCheck} />
                        : <CopyToClipboard text={value} onCopy={handleCopy}>
                            <FontAwesomeIcon color="silver" id="copy-icon" icon={faClipboard}/>
                        </CopyToClipboard>
                }
            </div>
            <SyntaxHighlighter
                language={language}
                style={dark}
            >
                {value}
            </SyntaxHighlighter>

        </>
    )
}
