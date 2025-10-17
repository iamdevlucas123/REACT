import { useEffect, useState } from 'react';
import axios from 'axios';

function DataSeekAxios () {
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function axiosData() {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPost(res.data)
            } catch (err) {
                console.error("Erro ao buscar posts", err)
            }
        }
        axiosData()
    }, [])

    return (
        <div>
            <h1>Posts - com axios</h1>
            {post.slice(0, 5).map((p) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>
      ))}
        </div>
    )
}

export default DataSeekAxios;