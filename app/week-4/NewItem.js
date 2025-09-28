"use client";
import { useState } from "react";

export default function Counter(){

    const [count , setQuantity] = useState(1);

    const increment = () =>
    {
        setQuantity(count + 1);
        if (count >= 20)
        {
            setQuantity(20)
        };

            
    };

    const decrement = () =>
    {
        setQuantity(count - 1);
        if (count <= 1)
        {
            setQuantity(1)
        };
    };

    return(

        <main>
            <div className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2">
                <p className ="text-black w-12 text-lg font-extrabold text-center border-black rounded">  {count}</p>
                <button onClick = {increment}className="px-3 py-1 rounded font-extrabold text-lg text-white bg-blue-500 hover:bg-blue-600">+</button>
                
                <button onClick = {decrement} className="px-3 py-1 rounded font-extrabold text-lg text-white bg-blue-500 hover:bg-blue-600">-</button>
            </div>    
        </main>
    );
}