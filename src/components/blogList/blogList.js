import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './bloglist.styl'
import { encode64 } from '../../utils/base64'

export default function BlogList() {
    const [mdInfo, setMdInfo] = useState([]);

    const parseCSV = data => {
        const res = [];
        const items = data.split('\r');
        items.forEach(el => {
            const elements = el.trim().split(',');
            res.push({name:elements[0],date:elements[1],path:elements[2]});
        });
        return res;
    };

    useEffect(()=>{
        async function fetchData() {
            await fetch('/markdowns/mdList.csv')
                .then(r => r.text())
                .then(text => setMdInfo(parseCSV(text)));
        } 
        fetchData();
    },[]);

    useEffect(()=>console.log(mdInfo),[mdInfo]);

    return (
        <div className="blog-list">
            <ul>
                {mdInfo.map(el=>{
                    return (<li key={el.name}>
                        <Link to={'/blog/'+encodeURI(encode64(el.path+'/'+el.name))}>
                            {el.name} : {el.date}
                        </Link>
                        </li>)
                })}
            </ul>
        </div>
    );
}