import Item from "./Item";

const ItemList = ({ items }) => {

    return ( 
        <>
        { items.map(item => <Item key={item.id} id={item.id} name={item.name} description={item.description} cost={item.cost} image={item.image} stock={item.stock} />)}
        </>
        );
}
export default ItemList;