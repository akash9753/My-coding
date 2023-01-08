import React, { useState } from 'react';
import { useEffect } from 'react';

const Useeffect = () => {

    const [content, setContent] = useState('posts')
    const [count , setCount] = useState(0)
    const [items, setItems] = useState([])
    useEffect(()=>{
        console.log('component did mount');
    },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setItems(json))


        console.log('component did update');
        return ()=>{
            console.log('Unmount');
        }
    },[content])
    return (
        <div className='App'>
            <button style={{marginRight:4}} className="btn btn-primary" onClick={()=>setCount(count+1)}>Count {count}</button>
            <button style={{marginRight:4}} className="btn btn-primary" onClick={()=>setContent('posts')}>Posts</button>
            <button style={{marginRight:4}}  className="btn btn-primary" onClick={()=>setContent('users')}>Users</button>
            <button style={{marginRight:4}}  className="btn btn-primary" onClick={()=>setContent('comments')}>Commnets</button>
            <h1>{content}</h1>
            <ul>
                {items && items.map(item=>{
                    return <li key={item.id}>{item.id}</li>
                })}
            </ul>
        </div>
    );
};

export default Useeffect;