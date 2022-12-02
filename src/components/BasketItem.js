import {useState} from "react";
function BasketItem({item, product}){
    return (
       <div>
           {product.title} {item.id} x {item.amount}
       </div>

    )
}
export default BasketItem