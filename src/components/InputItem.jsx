import { useState } from "react";

const InputItem=({input})=>{
    const [item,setItem]=useState({
        img:"src\\assets\\illustration.jpg.jpg",
        title:"",
        price:"",
        discountedPrice:""
    })

    function onInput(event){
        event.preventDefault();
        setItem({
            ...item,
            [event.target.name]:[event.target.value]
        })
    }
    function onSubmit(event){
        event.preventDefault();
       input(item);
        
    }
    return(
        <form className="inputForm" id="listItem">
            <h1>INPUT</h1>
            <div>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" placeholder="Title" id="title" onChange={onInput} />
            </div>

            <div>
            <label htmlFor="price" >Price</label>
            <input name="price" placeholder="Initial Price" id="price" onChange={onInput} type="number" />
            </div>

            <div>
            <label htmlFor="discountedPrice">discountedPrice</label>
            <input  name="discountedPrice" placeholder="Discounted Price" id="discountedPrice" onChange={onInput} type="number" />
            </div>

            <button name="submit" type="submit" onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default InputItem;