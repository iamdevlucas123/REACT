import {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Countador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}