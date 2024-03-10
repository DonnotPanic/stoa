import React, {
    useState,
    useEffect,
    useCallback
} from 'react'
import FslightBox from 'fslightbox-react';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'
import { decode64 } from '../../utils/base64';

import CodeBlock from './code-block'
import Sidebar from './sidebar/sidebar'
import StyleLink from './stylelink'
import WiredStyleCheckbox from './vendor/wired_checkbox'
import WiredStyleImage from './vendor/wired_image'
import StyleVideo from './vendor/react_video'
import './divider.styl'
import './blog.styl'

import Divider from './divider'
import metaProperty from './meta';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const Blog = observer(({blogContainer}) => {
    const params = useParams();
    const [sources, setSources] = useState([]);
    const [lightboxState, setLightboxState] = useState({toggler:false, sourceIndex:0});
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    
    const ref = useCallback(node => {
        const getTitles = node => {
            const t = [...node.children].filter(v => /H[2-6]/g.test(v.tagName));
            return t;
        }
        const getOffsets = node => {
            const t = (getTitles(node).map(e => ({ val: e.innerText, offset: e.offsetTop })));
            return t;
        }
        if(node === null) return;
        blogContainer.init(node.clientHeight,node.scrollTop,
            node.offsetTop, getTitles(node), getOffsets(node),
            true,node.clientWidth, node.children[0]);
        const resizeObserver = new ResizeObserver(() => {
            blogContainer.resize(getOffsets(node), node.clientWidth);
        });
        resizeObserver.observe(node);
    },[blogContainer]);

    useEffect(() => {
        if(!params.blogid) return;
        async function fetchData() {
            console.log(`fetch ${decode64(decodeURI(params.blogid))}.md`);

            await fetch(`/markdowns${decode64(decodeURI(params.blogid))}.md`)
                .then(r => r.text())
                .then(text => setData(metaProperty(text)));
            setIsLoading(false);
        }
        fetchData();
    }, [params.blogid]);

    const hanldeSlide = index => {
        setLightboxState(el => ({toggler: !el.toggler, sourceIndex:index}));
    }

    const components = {
        a: StyleLink,
        code: CodeBlock,
        hr: ({...args}) => {return (<Divider blogContainer={blogContainer} {...args}/>)},
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
                        <img src="/image/loading.png" alt="ON LOADING..." />
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
                        <Sidebar blogContainer={blogContainer}/>
                        <div id="footer">

                        </div>
                    </>
            }
        </>
    )
});

export default Blog;