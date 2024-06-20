
const ListItem =({products})=>{
    return(
        <div className="cardContainer">
            {products.map(product=>(<div className={"item-card"}>
                <img className={"img-fluid"} src={product.img} alt="Placeholder Image" width="250px"/>
                <div className={"item-card-information"}>
                    <div className={"pricing"}>
                        <span>${product.discountedPrice}</span>
                        <small>
                        <strike>{product.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                    <h3>{product.title} </h3>
                    </div>
                </div>
                <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src="src/assets/cart-icon.png" alt="kdj"width="25px"/>
                </button>
                </div>
            ))}
        </div>
    )
}


export default ListItem;