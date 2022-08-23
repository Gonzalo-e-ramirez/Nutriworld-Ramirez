import { BsCart } from "react-icons/bs";
const CartWidget = (props) =>{
return(
    <>
    <a href={props.url}><BsCart /><a href={props.url}>{props.numero}</a></a>
    </>
)
}

export default CartWidget;