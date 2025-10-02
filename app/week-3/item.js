 export default function Item({name, quantity,category})
{
    return(
        <div className="text-white border-slate-800 bg-slate-800 w-full max-w-xs m-4 p-2 self-center "> 
            <ul>
                <li>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>buy {quantity} in {category}</p>
                </li>
            </ul>
        </div>
    );
}
