import { useEffect, useState } from "react";
import {products} from '../utils/products'
import datos from '../utils/promese'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () =>{

    const [data, setData] = useState({});
    console.log(products[0]) 

    useEffect( ()=>{
        datos(products[0])
        .then(result => setData(result))
        .catch(err => console.log(err))
    },);

    return(
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;