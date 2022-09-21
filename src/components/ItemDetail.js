import ItemCount from './ItemCount';
import '../style/ItemDetail.css';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {useContext, useState } from "react";
import { CartContext } from './CartContext';
const ItemDetail = ({item}) =>{

    const [Count, setCount] = useState(0);
    const context = useContext(CartContext);
    
    const onAdd = (qty) => {
        alert("Se agregaron "+qty+" elementos al carrito.");
        setCount(qty);
        context.addItem(item, qty);
    }
    return(
        <div  className="detail">
            <h1>{item.name}</h1>
            <img src={item.image} alt='foto'/>
            <h5>{item.description}</h5>
            <h5>precio: {" $"+item.cost}</h5>
            <h5>stock: {" "+item.stock}</h5>
            <br></br>
            {
                Count === 0
            ? <ItemCount stock={item.stock} initial={Count+1} onAdd={onAdd}></ItemCount> 
            : <Link to='/cart'><Button variant="outlined" color="error">Checkout</Button></Link>
            }
        </div>
    )
}
    export default ItemDetail;