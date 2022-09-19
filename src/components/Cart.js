import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import '../style/Cart.css';
import { Card } from '@mui/material';
import { Stack } from '@mui/material';
import {Link} from "react-router-dom";

const Cart = () => {

    const productos = useContext(CartContext);
    let subtotal = productos.subtotal;

    return(
        <>
        <Button variant="outlined" onClick={productos.clear} className="botonEliminar">Vaciar Carrito</Button>
        <Stack spacing={0}>
            {productos.cartList.map(item =><div className="carrito"><br/><Card variant="outlined"><img src={item.image} alt="producto" className="producto" /><h2 className="carrito">{item.name}</h2> <h3 className="carrito">Cantidad: {item.qty}</h3><h3 className="carrito">Precio: ${item.cost}</h3><Button variant="outlined" color="error" onClick={() => productos.removeItem(item.id)}>Eliminar producto</Button></Card> </div>)}
        </Stack>
            {
                productos.cartList.length === 0
            ?<div><p>El carrito esta vacio</p><Link to="/"><Button variant="outlined" color="error">Volver al inicio</Button></Link></div>
            :<Card variant="outlined"><h3>Subtotal: ${subtotal}</h3> <Button variant="outlined">Terminar mi compra</Button></Card>
            }
        </>
    )
}

export default Cart;