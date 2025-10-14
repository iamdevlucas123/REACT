import { useState } from "react";


function UseStateFunction() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Contagem numero: {count}</p>
            <button onClick={increment}>Adicione 1</button>
        </div>
    )
}

export default UseStateFunction;
