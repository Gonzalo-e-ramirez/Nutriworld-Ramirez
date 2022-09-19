import { BsCart } from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "./CartContext";
const CartWidget = (props) =>{

    const cartContext = useContext(CartContext);
    let cantidad = cartContext.cantidad;
return(
    <>
    <a href={props.url}><BsCart /><a href={props.url}>{cantidad}</a></a>
    </>
)
}

export default CartWidget;