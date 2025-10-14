
import { useEffect, useState, useRef } from "react";

const UseRefComponent = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello: my name is {name}</p>
            <p>Renders: {renderCount.current} </p>
        </div>
    )
}

export default UseRefComponent;