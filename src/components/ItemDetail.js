import ItemCount from './ItemCount';
import '../style/ItemDetail.css';
const ItemDetail = ({item}) =>{
    
    const onAdd = (qty) => {
        alert("Se agregaron "+qty+" elementos al carrito.");
    }
    return(
        <div  className="detail">
            <h1>{item.name}</h1>
            <img src={item.image} alt='foto'/>
            <h5>{item.description}</h5>
            <h5>precio: {" $"+item.cost}</h5>
            <h5>stock: {" "+item.stock}</h5>
            <br></br>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount> 
        </div>
    )
}
    export default ItemDetail;