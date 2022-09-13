import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const productos = useContext(CartContext);

    return(
        <>
        <button onClick={productos.clear}>Eliminar todos</button>
            {productos.cartList.map(item => <li>{item.name} (qty={item.qty}) <button onClick={() => productos.removeItem(item.id)}>Eliminar producto</button></li> )}
        </>
    )
}

export default Cart;