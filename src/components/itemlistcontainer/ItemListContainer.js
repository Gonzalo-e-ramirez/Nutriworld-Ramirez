import './ItemListContainer.css';

const ItemListContainer = (props) =>{

    return(
        <div className="item">
            <h1>{props.dato}</h1>
            <img src={props.url} alt='foto'/>
        </div>
    )
}

export default ItemListContainer;