import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (props)=>{
    const data = props.data;

    const dispatch = useDispatch();

    const handleAddItem =(item)=>{
        dispatch(addItem(item))
    }

return(
        <div>
                {data.map((item)=>(
                    
                    <div data-testid="menuItems" key= {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200">
                        <div className="text-left font-bold">
                            <span >{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <div className="flex items-top justify-between">
                            <div className="flex"><img className="w-20 min-w-20 h-16 rounded-lg mr-2" src={CDN_URL+item.card.info.imageId}></img>
                            <p className="text-xs text-left my-1">{item?.card?.info?.description}</p>
                        </div>
                            <button className=" border-2 p-1 m-3 rounded-lg px-2 max-h-12 py-1 shadow-lg bg-black text-white mb-10 "
                            onClick={()=>{handleAddItem(item)}}
                            >add+</button>
                        </div>    
                    </div>
                ))}
        </div>
)} 

export default ItemList;
