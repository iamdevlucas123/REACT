//O useEffect serve para fazer algo por fora toda vez que o componente for renderizado

import React, { useState, useEffect } from 'react';

function UseEffectComponent() {
    const [nome, setNome] = useState("João");

    useEffect(() => {
        console.log("O componente foi renderizado ou o nome mudou!");
    }, [nome]); // O array de dependências faz com que o useEffect rode apenas quando 'nome' mudar

    return (
        <div>
            <p>nome atual: {nome}</p>
            <button onClick={() => setNome('Maria (O nome foi alterado e acionado no useEffect)')}>Trocar nome</button>
        </div>
    )
}

export default UseEffectComponent;