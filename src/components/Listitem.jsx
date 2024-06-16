
const ListItem =()=>{
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src="src\assets\illustration.jpg.jpg" alt="Placeholder Image" width="250px"/>
            <div className={"item-card-information"}>
                <div className={"pricing"}>
                    <span>$340</span>
                    <small>
                        <strike>450</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>Tittle </h3>
                </div>
            </div>
            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src="src/assets/cart-icon.png" alt="kdj"width="25px"/>
            </button>
        </div>
    )
}


export default ListItem;