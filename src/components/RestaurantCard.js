import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useContext } from "react";
// console.log(data.restaurants[0].info.name);



const RestaurantCard =(props)=>{
  
 
  const resData = props;
  

  return(<div className=' res-card m-4 p-4 w-[250px] h-[550px] rounded-lg bg-orange-300 hover:scale-105 shadow-2xl hover:bg-orange-500 sm:bg-white md:bg-orange-300'  >
          <img  className='res-logo w-[240px] h-[200pxpx] rounded-lg' src={CDN_URL+resData.data.cloudinaryImageId}/>
          <h3 className="py-2 font-bold items-center text-lg text-center">{resData.data.name}</h3>
          <h3 className="py-2 items-center text-center">{resData.data.avgRating}</h3>
          <h5 className="break-words text-center" >{resData.data.cuisines.join(",")}</h5> 
          <h3 className="text-center my-2"> EST - {resData.data.sla.deliveryTime}</h3>
  </div>)
};

export const isOpen = (RestaurantCard) =>{
  return(props)=>{


    return(
      <div>
          <label className="m-4 border-2 absolute bg-green-950 text-white px-2 rounded-lg">OPEN</label>
          <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;