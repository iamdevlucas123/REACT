import { useState } from "react";

function StateArray() {
    const [items, setItems] = useState([]);
    const [itemsInput, setItemsInput] = useState("");

    const addItem = () => {
        if (itemsInput.trim() === "") return;
        setItems([...items, itemsInput]);
        setItemsInput("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="typeyourname"
                value={itemsInput}
                onChange={(e) => setItemsInput(e.target.value)}
            />
            <button onClick={addItem}>ADD</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default StateArray;