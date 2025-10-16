// Props é a abreviação de "properties".
// São formar de passar dados de um componente pai para um componente filho.
// São imutáveis no componente filho, ou seja o componente apenas lê os dados, não pode alterá-los.
// Permitem reutilização de componente.

// Componente Filho

function card ({name, age}) {
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '5px' }}>
            <h2>{name}</h2>
            <p>idade : {age}</p>
        </div>
    )
}

export default card