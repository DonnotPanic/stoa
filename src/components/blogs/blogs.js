import React, {
    useState,
    useEffect,
    forwardRef
} from 'react'
import FslightBox from 'fslightbox-react';
import Markdown from 'react-markdown'
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

const injection = data => {
    let i = data.indexOf('\n');
    const wordCount = s => {
        s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function(str){return str !== "";}).length;
        //return s.split(' ').filter(String).length; - this can also be used
    }
    let wordNum = wordCount(data);
    let readTime = Math.ceil(wordNum / 200);
    let readInfo = readTime + ' min read';
    let info = readInfo + '\n';
    return data.slice(0,i) + info + data.slice(i+1, data.length);
}

const Blog = forwardRef((_, ref) => {
    const buff = [];
    const [sources, setSources] = useState([]);
    const [lightboxState, setLightboxState] = useState({toggler:false, sourceIndex:0});
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(md) {
            console.log("fetch ref.md");

            await fetch(md)
                .then(r => r.text())
                .then(text => setData(injection(text)));
            setIsLoading(false);
        }
        fetchData(md);
    }, []);

    const hanldeSlide = index => {
        setLightboxState({
            toggler: !lightboxState.toggler,
            sourceIndex: index
        });
    }

    const components = {
        a: StyleLink,
        code: CodeBlock,
        hr: Divider,
        input: WiredStyleCheckbox,
        img: ({src, ...args}) => {
            return(<WiredStyleImage src={src} sources={sources} setSources={setSources} setSlide={hanldeSlide} {...args}/>);
        },
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
                        <div className='zooming-wrapper'>
                            <FslightBox className="blog-img-zoom" toggler={lightboxState.toggler} 
                            sourceIndex={lightboxState.sourceIndex} sources={sources} />
                        </div>
                        <div ref={ref} id="blog-container" className="blog-link">
                            <Markdown
                                remarkPlugins={[gfm, remarkMath, remarkEmoji]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                children={data}
                                components={components}
                            />
                        </div>
                        <Sidebar />
                        <div id="footer">

                        </div>
                    </>
            }
        </>
    )
})

export default Blog;