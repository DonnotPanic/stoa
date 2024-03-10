import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './home.styl'

function Home() {
    const [data, setdata] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await fetch('/markdowns/intros/about.cn.md')
                .then(r => r.text())
                .then(text => setdata(text));
        } 
        setIsLoading(true);
        fetchData();
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