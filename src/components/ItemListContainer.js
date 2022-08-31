import '../style/ItemListContainer.css';
import ItemList from './ItemList';
import datos from '../utils/promese'
import {products} from '../utils/products'
import { useEffect, useState } from "react";

const ItemListContainer = () =>{

    const [data, setData] = useState([]);
    useEffect( ()=>{
        datos(products)
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <ItemList items={data}></ItemList>      
        </div>
    )
}

export default ItemListContainer;