import './ItemListContainer.css';
import ItemCount from '../itemcount/ItemCount';

const ItemListContainer = (props) =>{

    const onAdd = (qty) => {
        alert("Se agregaron "+qty+" elementos al carrito.");
    }

    return(
        <div className="item">
            <h1>{props.dato}</h1>
            <img src={props.url} alt='foto'/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>           
        </div>
    )
}

export default ItemListContainer;