import '../style/ItemListContainer.css';
import ItemList from './ItemList';
import datos from '../utils/promese'
import {products} from '../utils/products'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{

    const [data, setData] = useState([]);
    const {id} = useParams();


    useEffect( ()=>{
        if(id){
            datos(products.filter(item =>item.categoryId === parseInt(id)))
            .then(result => setData(result))
            .catch(err => console.log(err))
        }else{
            datos(products)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
    }, [id]);

    return(
        <div>
            <ItemList items={data}></ItemList>      
        </div>
    )
}

export default ItemListContainer;