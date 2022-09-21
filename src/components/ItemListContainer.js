import '../style/ItemListContainer.css';
import ItemList from './ItemList';
import {firestoreFetch} from '../utils/firebaseConfig';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{

    const [data, setData] = useState([]);
    const {id} = useParams();


    useEffect( ()=>{
        firestoreFetch(id)
            .then(result => setData(result))
    }, [id]);

    return(
        <div>
            <ItemList items={data}></ItemList>      
        </div>
    )
}

export default ItemListContainer;