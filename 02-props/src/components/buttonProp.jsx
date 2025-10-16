
import React from "react";      


function ButProp({onButtonClick}) {   //Componente filho
    return (
        <button onClick={onButtonClick}>Clique em mim!</button>
    )
}

export default ButProp