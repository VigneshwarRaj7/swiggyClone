import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory = (props)=>{
    const data = props.data;
    const items = data?.card?.card?.itemCards
   

    const handleClick = ()=>{
        // props.setshowIndex();
        props.showItems?props.setshowIndexNull():props.setshowIndex();
    }
    
    return <div className="w-6/12 bg-gray-50 p-4 rounded-lg shadow-lg my-4 mx-auto   ">
              <div className="flex justify-between" >
                <span className="text-lg font-bold" onClick={handleClick}> {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</span>
                <span className="hover:cursor-pointer" > ⬇️</span>
              </div>
             {props.showItems && <ItemList data={items} /**key={}*/ />}
           </div>
}
export default RestaurantCategory; 