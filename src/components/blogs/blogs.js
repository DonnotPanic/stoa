import React, {
    useState,
    useEffect,
    forwardRef
} from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'

import CodeBlock from './code-block'
import Sidebar from './sidebar/sidebar'
import StyleLink from './stylelink'
import WiredStyleCheckbox from './vendor/wired_checkbox'
import WiredStyleImage from './vendor/wired_image'
import StyleVideo from './vendor/react_video'
import md from '../../markdowns/tests/reference.md'
import './divider.css'
import './blogs.css'
import Divider from './divider'

const Blog = forwardRef((_, ref) => {

    const [data, setdata] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(md) {
            console.log("fetch cps.md");
            await fetch(md)
                .then(r => r.text())
                .then(text => setdata(text));
            setIsLoading(false);
        }
        fetchData(md);
    }, []);

    const components = {
        a: StyleLink,
        code: CodeBlock,
        hr: Divider,
        input: WiredStyleCheckbox,
        img: WiredStyleImage,
        video: StyleVideo
    }

    return (
        <>
            {
                isLoading
                    ? <div className="on-loading">
                        <img src="image/loading.png" alt="ON LOADING..." />
                    </div>
                    : <>
                        <Sidebar />
                        <div ref={ref} id="blog-container" className="blog-link">
                            <ReactMarkdown
                                remarkPlugins={[gfm, remarkMath, remarkEmoji]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                children={data}
                                components={components}
                            />
                        </div>
                    </>
            }
        </>
    )
})

export default Blog;