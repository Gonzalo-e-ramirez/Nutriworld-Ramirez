import ItemCount from './ItemCount';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
const Item = (props) =>{

    const onAdd = (qty) => {
        alert("Se agregaron "+qty+" elementos al carrito.");
    }


    return(
        <div  className="item">
            <h1>{props.name}</h1>
            <img src={props.image} alt='foto'/>
            <h5>precio: {" $"+props.cost}</h5>
            <h5>stock: {" "+props.stock}</h5>
            <Link to={'/item/'+props.id}><Button variant="outlined" color="error">Detalles</Button></Link>
            <ItemCount stock={props.stock} initial={1} onAdd={onAdd}></ItemCount> 
        </div>
    )
}
    export default Item;