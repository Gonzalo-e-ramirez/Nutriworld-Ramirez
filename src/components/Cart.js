import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import '../style/Cart.css';

const Cart = () => {

    const productos = useContext(CartContext);

    return(
        <>
        <Button variant="outlined" onClick={productos.clear} className="botonEliminar">Vaciar Carrito</Button>
        <br />
            {productos.cartList.map(item => <div className="carrito"><img src={item.image} alt="producto" className="producto" /><h2 className="carrito">{item.name}</h2> <h3 className="carrito">Cantidad: {item.qty}</h3> <Button variant="outlined" color="error" onClick={() => productos.removeItem(item.id)}>Eliminar producto</Button></div> )}
        </>
    )
}

export default Cart;