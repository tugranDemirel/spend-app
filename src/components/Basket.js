import {useState} from "react";
import BasketItem from "./BasketItem";

function Basket({basket,total, products}){
    return (
       <>
           {
               basket.map(item =>(
                   <BasketItem product={products.find(p => p.id === item.id)} item={item} />
               ))}
           }
           <div>
               total {total} TL
           </div>
       </>
    )
}
export default Basket