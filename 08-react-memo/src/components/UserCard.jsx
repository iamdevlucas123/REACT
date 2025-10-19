import React from "react";

// Componente memorizado para evitar renderização dupla
const UserCard = React.memo(({ user, onIncrement }) => {
    console.log(`Renderizando UserCard ${user.name}`)

    //Simulando um cálculo pesado:
    const expensiveCalculation = Array(100000)
        .fill(0)
        .reduce((acc, cur) => acc + cur, 0)

    return (
        <div>
            <h3>{user.name}</h3>
            <p>Contador: {user.count}</p>
            <p>Resultado pesado: {expensiveCalculation}</p>
            <button onClick={() => onIncrement(user.id)}>+1</button>
        </div>
    )
})

export default UserCard;