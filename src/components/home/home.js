import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import md from '../../markdowns/intros/about.cn.md'
import './home.css'

function Home() {
    const [data, setdata] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData(md) {
            console.log("fetch about.md");
            await fetch(md)
                .then(r => r.text())
                .then(text => setdata(text));
        } 
        setIsLoading(true);
        fetchData(md);
        setIsLoading(false);
    }, []);

    return (
        <>
            {
                isLoading
                    ? <div className="on-loading">
                        <img src="image/loading.png" alt="ON LOADING..."/>
                        </div>
                    : <div className="intro-container">
                        <Markdown children={data} rehypePlugins={[rehypeRaw]}/>
                    </div>
            }
        </>
    );
}

export default Home;