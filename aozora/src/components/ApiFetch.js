import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/aozora', {method: 'GET'})
        .then(res => res.json())
        .then(data => {setPosts(data)})
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.author}>{post.author}:{post.book}</li>)
                }
            </ul>
            
        </div>
    )
}

export default ApiFetch