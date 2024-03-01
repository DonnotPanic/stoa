import React, {useState, useEffect} from 'react';

import { WiredImage } from 'react-wired-elements';
import './wired_image.css';

export default function WiredStyleImage({node, src, alt, setSlide, sources, title, ...props}) {

    const [index, setIndex] = useState(-1);

    useEffect(()=>{
        let t;
        if(sources) t = sources.indexOf(src);
        if(index < 0 && t >= 0) setIndex(t);
    }, [sources])

    return (
        <>
            <span onClick={() => setSlide(index)} className="image-container">
                <WiredImage elevation={3} className='blog-img' src={src} {...props}/>
                <span className="image-legend">{"Fig "+ (index+1) + ": " + title}</span>
            </span>
        </>
    )
}
