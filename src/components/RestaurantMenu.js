
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{
    
    const resId = useParams() 
    
 
    
    const resMenu = useRestaurantMenu(resId);
    const [showIndex,setshowIndex] =  useState(null);

if (resMenu===null){return<div style={{alignItems:"center"}}><img src="https://i1.sndcdn.com/artworks-3FM2FLg6i0Ksf0By-fsYRdg-t500x500.jpg">
                                
    </img></div>}



const rec = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

return (<div className="">
        <div className="res-name">
        <h1 className="w-5/12 m-auto my-5 bg-slate-200 border-slate-200 text-center shadow-lg border-2 rounded-lg font-bold p-3 text-3xl" >{resMenu?.data?.cards[0]?.card?.card?.text}</h1> </div>
        <div className="res-description border-2 border-slate-100 bg-slate-100 font-semibold rounded-lg m-auto w-8/12 p-4 shadow-lg">
            
            <h3>Avg rating - {resMenu?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h3>Cuisines - {resMenu?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
            <h3>{resMenu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>{resMenu?.data?.cards[2]?.card?.card?.info?.labels[1]?.message}</h3> 
        </div>
        <div>
           
            { 
              
                categories.map((category,index)=>(
                    
                    <RestaurantCategory  data={category} key={category.card.card.title} showItems={index===showIndex} 
                    setshowIndex = {()=>{
                        setshowIndex(index)
                    }}
                    setshowIndexNull = {()=>{
                        setshowIndex(null)
                    }}
                    />
                ))

            }
        </div>
       
    </div>)
}

export default RestaurantMenu;