import ItemCount from './ItemCount';
const ItemDetail = (props) =>{
    
    const onAdd = (qty) => {
        alert("Se agregaron "+qty+" elementos al carrito.");
    }
    return(
        <div  className="detail">
            <h1>{props.name}</h1>
            <img src={props.image} alt='foto'/>
            <h5>{props.description}</h5>
            <h5>precio: {" $"+props.cost}</h5>
            <h5>stock: {" "+props.stock}</h5>
            <ItemCount stock={props.stock} initial={1} onAdd={onAdd}></ItemCount> 
        </div>
    )
}
    export default ItemDetail;