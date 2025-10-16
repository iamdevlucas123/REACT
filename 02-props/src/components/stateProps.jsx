import React from "react";  

function contador({count, increment}) {
    return (
        <div>
            <h2>Contando: {count}</h2>
            <button onClick={increment}>Adicione 1</button>
        </div>
    )
}

export default contador;