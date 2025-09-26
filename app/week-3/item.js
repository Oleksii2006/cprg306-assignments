 export default function Item({name, quantity,category})
{
    return
    (
        <ul>
            <li>
                <h2>{name}</h2>
                <p>buy {quantity} in {category}</p>
            </li>
        </ul>
    );
}
