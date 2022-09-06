import { useEffect, useState } from "react";
import {products} from '../utils/products'
import datos from '../utils/promese'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect( ()=>{
        datos(products.find(item => item.id === parseInt(id)))
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;