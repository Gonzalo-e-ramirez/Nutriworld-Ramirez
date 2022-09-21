import { useEffect, useState } from "react";
import { firestoreOneFetch } from "../utils/firebaseConfig";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        firestoreOneFetch(id)
          .then(result => setData(result))
          .catch(err => console.log(err))
      }, [id])

    return(
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;