"use client";

import { useState } from "react";

export default function NewItem() {
    const [nameField,setName] = useState("")
    const [category,setCategory] = useState("produce")
    const [quantity, setQuantity] = useState(1);

    const handleNameChange = (event) => {
        setName(event.target.value);
        setCategory(event.target.value)
    }
    const handleCategoryChange = (event) => {
        
        setCategory(event.target.value)
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

        const baseButton =
        "w-10 h-10 flex items-center justify-center rounded text-white text-xl font-bold transition-colors duration-200";

    const incrementStyles =
        quantity >= 20
            ? "bg-gray-500 cursor-not-allowed " + baseButton
            : "bg-blue-500 hover:bg-blue-400 " + baseButton;

        const decrementStyles =
        quantity <= 1
            ? "bg-gray-500 cursor-not-allowed " + baseButton
            : "bg-blue-500 hover:bg-blue-400 " + baseButton;

    const handleSubmit = (event) => {
    event.preventDefault(); 

        const item = {
        name: nameField,
        quantity: quantity,
        category: category,
        };

        console.log("Submitted item:", item);
        alert(
        `Item added: ${nameField} Quantity: ${quantity} Category: ${category}`
        );

        setName("");
        setCategory("produce");
        setQuantity(1);
    };

return (
    <main className="flex justify-center items-center min-h-screen bg-black">
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-[350px]">
        <input type="text" placeholder="Item Name" value={nameField} onChange={handleNameChange} className="border border-gray-400 rounded w-full p-2 mb-3 text-black" />
        <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
            <div className="w-12 h-10 flex items-center justify-center border-2 border-gray-400 rounded bg-white text-lg font-bold text-black">{quantity}</div>
            <div className="flex space-x-2 ml-2">
            <button type="button" onClick={decrement} disabled={quantity <= 1} className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50">–</button>
            <button type="button" onClick={increment} disabled={quantity >= 20} className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50">+</button>
            </div>
        </div>
        <select value={category} onChange={handleCategoryChange} className="border border-gray-400 p-2 rounded w-1/2 text-black">
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
        </select>
        </div>
        <button type="submit" className="bg-blue-500 text-black font-semibold rounded w-full py-2 hover:bg-blue-600">Add Item</button>
    </form>
    </main>
);
}