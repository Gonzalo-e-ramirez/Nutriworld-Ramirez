import {createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) =>{
    const[cartList, setCartList] = useState([]);


  let cantidadInicial = 0;
  let cantidad = cartList.reduce(function (accumulator, curValue) {
    return accumulator + curValue.qty
  }, cantidadInicial)

  let subtotalInicial = 0;
  let subtotal = cartList.reduce(function (accumulator, curValue) {
    return accumulator + (Number(curValue.cost) * curValue.qty)
  }, subtotalInicial)


    const addItem = (item, qty) =>{
        

        let exist= isInCart(item.id);

        if(exist){
            setCartList(cartList.map((cartItem) => {
                return cartItem.id === item.id ? {...cartItem, qty: cartItem.qty + qty} : cartItem;
            }))
        }else{
            let itemforCart = {
                ...item,
                qty
            }
            setCartList([
                ...cartList,
                itemforCart
            ])
        }


    }

    const removeItem = (id) =>{
        let newCartList = cartList.filter(item=> item.id !==id);
        setCartList(newCartList);
    }

    const clear = () =>{
        setCartList([])
    }

    const isInCart = (id)=>{
        let exist = false;

        let comparation = cartList.filter(item=> item.id ===id);

        if(comparation.length !== 0){
            exist=true;
            console.log("listo")
        }
        return exist;
    }


    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, cantidad, subtotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
