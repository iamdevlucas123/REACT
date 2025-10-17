import React from "react";

function ConditionCount ({count}) {
    return (
        <div>
            <p>Contador: {count}</p>
            {count === 0 && <p>O contador está zerado!</p>}
            {count > 0 && <p>O contador está positivo!</p>}
            {count < 0 && <p>O contador está negativo!</p>}
        </div>
        )
    }

export default ConditionCount
