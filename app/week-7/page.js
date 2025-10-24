"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemsData from "./items.json"; 

export default function Page() {
  const [items, setItems] = useState(itemsData);

 
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold flex justify-center bg-black">Shopping List</h1>

    
      <NewItem onAddItem={handleAddItem} />

  
      <ItemList items={items} />
    </main>
  );
}