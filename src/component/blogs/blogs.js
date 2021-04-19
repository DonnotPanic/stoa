import React, {
    useState,
    useEffect,
} from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from './code-block'
import Sidebar from './sidebar/sidebar'
import md from '../../markdowns/posts/CPS-tutorial-for-kindergarteners.md'
import './blogs.css'


export default function Blog() {
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

    return (
        <>
            {
                isLoading
                    ? <div className="on-loading">
                        <img src="image/loading.png" alt="ON LOADING..." />
                    </div>
                    : <>
                        <Sidebar />
                        <div className="blog-container blog-link">
                            <ReactMarkdown children={data}
                                renderers={{ code: CodeBlock }}
                                allowDangerousHtml />
                        </div>
                    </>
            }
        </>
    )
}
