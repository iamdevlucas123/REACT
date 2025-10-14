//setInterval() é uma função que executa uma ação repetidamente em um intervalo de tempo definido
//clearInterval() é uma função que faz a limpeza do setInterval

import { useState, useEffect } from 'react';

function CountWithEffects() {
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            const timer = setInterval(() => {
                setCount((t) => t + 1)
            }, 1000);

            //cleanup -> faz a limpeza do setInterval
            return () => clearInterval(timer);
        }, []) //Rodar apenas uma vez quando o componente for montado
    
    return (
        <div>
            <p>tempo: {count} segundos</p>
        </div>
    )
}

export default CountWithEffects;