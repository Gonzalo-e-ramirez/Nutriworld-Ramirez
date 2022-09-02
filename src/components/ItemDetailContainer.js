import { useEffect, useState } from "react";
import {products} from '../utils/products'
import datos from '../utils/promese'
import ItemDetail from './ItemDetail';

const ItemListContainer = () =>{

    const [data, setData] = useState({});

    useEffect( ()=>{
        datos(products[3])
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={data} />
    );
}

export default ItemListContainer;