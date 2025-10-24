import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemData from "./items";
import { useState } from "react";

export default function Item({ item }) {
    const [items, setItems] = useState(itemData);
    const handleAddItem = (item) => {
        setItems([...items, item]);
  }

    let { name, quantity, category } = item;
    return (
        <li className="bg-slate-900
                    w-96
                    p-2
                    ">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-white mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}