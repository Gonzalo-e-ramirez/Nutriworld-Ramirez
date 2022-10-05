import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import '../style/Cart.css';
import { Card } from '@mui/material';
import { Stack } from '@mui/material';
import {Link} from "react-router-dom";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import {db} from '../utils/firebaseConfig';

const Cart = () => {

    const productos = useContext(CartContext);
    const createOrder = () =>{
        let itemsDB = productos.cartList.map( item => ({
            id:item.id,
            title: item.name,
            price:item.cost,
        }))
        let order = {
            buyer:{
                name:"Jose Cuervo",
                email: "jose.cuervo@gmail.com",
                phone:"12544322"
            },
            item: itemsDB,
            date: serverTimestamp(),
            total:productos.subtotal
        }

        const createOrderInFirestore = async () =>{
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }    

        createOrderInFirestore()
        .then(result => {
            alert("Se creo su orden "+result.id)
            productos.cartList.forEach(async(item)=>{
                const changeStock = doc(db, "products", item.id);
                await updateDoc(changeStock, {
                    stock: increment(-item.qty)
                });
            })
            productos.clear();
        })
        .catch(err => console.log(err));
    }


    return(
        <>
        {
            productos.cartList.length === 0
            ?<nav/>
            :<Button variant="outlined" onClick={productos.clear} className="botonEliminar">Vaciar Carrito</Button>
            }
        
        <Stack spacing={0}>
            {productos.cartList.map(item =><div className="carrito"><br/><Card variant="outlined"><img src={item.image} alt="producto" className="producto" /><h2 className="carrito">{item.name}</h2> <h3 className="carrito">Cantidad: {item.qty}</h3><h3 className="carrito">Precio: ${item.cost}</h3><Button variant="outlined" color="error" onClick={() => productos.removeItem(item.id)}>Eliminar producto</Button></Card> </div>)}
        </Stack>
            {
                productos.cartList.length === 0
            ?<div className="vacio"><p>El carrito esta vacio</p><Link to="/"><Button variant="outlined" color="error">Volver al inicio</Button></Link></div>
            :<Card variant="outlined"><h3>Total: ${productos.subtotal}</h3> <Button variant="outlined" onClick={() => createOrder()}>Terminar mi compra</Button></Card>
            }
        </>
    )
}

export default Cart;