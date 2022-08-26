import { useEffect, useState } from "react";
import './ItemCount.css';
import Button from '@mui/material/Button';

const ItemCount = (props) =>{

    const [count, setCount] = useState(0);

    useEffect( ()=>{
        setCount(props.initial);
    }, [props.initial]);

    const incremento = () =>{
        if(count < props.stock){
            setCount(count+1);
        }
    }

    const decremento = () =>{
        if(count>props.initial){
            setCount(count-1);
        }
    }

    return(
    <div >
        <Button className="botonuno" variant="contained" size="small" onClick={incremento}>+</Button>
        <Button className="botonuno" variant="text" size="small">{count}</Button>
        <Button className="botonuno" variant="contained" size="small" onClick={decremento}>-</Button>
        <Button className="botondos" variant="contained" color="success" size="small" onClick={() => props.onAdd(count)}>Agregar al Carrito</Button>
    </div>
    )
}

export default ItemCount;