
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import RestaurantCard,{isOpen} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext";
import {UseContext} from "../utils/userContext";
const Body = () =>{

const {loggedinUser} = useContext(UserContext);
    
useEffect(()=>{
    fetchData();
},[])

const fetchData = async()=>{
    const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRes(restaurants);

    setFilteredRes(restaurants);
    
};
const [res, setRes] = useState("")
const [filteredRes,setFilteredRes]= useState("")
const [searchText,setsearchText]= useState("");   

const onlineStatus = useOnlineStatus();
const RestaurantCardPromoted = isOpen(RestaurantCard);


if(onlineStatus === false){ 
return<h1> You are offline</h1>
}


return(res?.length===0)?(<h1>Loading</h1>):
   


(<div className='body '>
                <div className='filter p-4  flex'>
                    <input value={searchText} 
                    onChange={(e)=>{setsearchText(e.target.value)}} data-testid="searchInput"

                    className="search-box rounded-md  mr-4 text-gray-900  border-2 border-black p-0.5 ring-inherit ring-cyan-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text"></input>
                    <button onClick={()=>{
                        const filteredRes = ( res || []).filter(restaurant => restaurant.info.cuisines.join("").toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRes(filteredRes);
                    }} 
                    className="border-2 border-cyan-950 bg-cyan-700 text-white p-0.5 rounded-md w-16 "
                    data-testid="searchBtn">search</button>
                    <button className="filter-btn border-2 border-cyan-950 bg-cyan-700 text-white rounded-md p-0.5 pl-2 pr-2" style={{marginLeft:"10px"}} onClick={()=>{
                        const filteredRes = res.filter( restaurant => restaurant.info.avgRating>4.3)
                        setFilteredRes(filteredRes);
                        }}>Top rated restaurant</button>
                    <h3 className="ml-4"> UserName:{loggedinUser} </h3>
                </div>
                <div className=' flex flex-wrap res-container'>
                 {/* <RestaurantCard data={restaurants[0].info}/>       */}
                        {filteredRes?.map((restaurant)=>(
                            
                           <Link data-testid="search" key={restaurant.info.id} to= {"/restaurantmenu/"+restaurant.info.id}>{ restaurant.info.isOpen?<RestaurantCardPromoted data={restaurant.info}/>:<RestaurantCard  data={restaurant.info}/>}
                           </Link>
                        ) )
                      }
                </div>
            </div>)
  }

  export default Body;
  