import React, {useState} from 'react';
import FslightBox from 'fslightbox-react';
import { WiredImage } from 'react-wired-elements';
import './wired_image.css';

export default function WiredStyleImage({ node, src, alt, ...props }) {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <FslightBox lassName="blog-img-zoom" toggler={toggler} sources={[src]} alt={alt} />
            <span onClick={() => setToggler(!toggler)} className="image-container">
                <WiredImage elevation={3} className='blog-img' src={src} {...props}/>
                <text className="image-legend">{"Fig T: " + alt}</text>
            </span>
        </>

    )
}
