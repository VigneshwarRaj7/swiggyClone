import { useSelector,useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div>
           <h1 className=" w-3/12 m-auto my-16 border-2 border-slate-100 bg-slate-100 text-center rounded-lg font-bold p-2 text-3xl ">Items on cart</h1>
           <div className="border-2 w-8/12 m-auto rounded-lg p-6">
                {
                    cartItems.map((item)=>(
                        <div className="flex border-b-2 justify-between">
                            <div className="my-4  grid" key={item.card.info.id}>
                                    <span className="font-bold text-lg">{item.card.info.name}</span>
                                    <span className="my-1">{item.card.info.description}</span>    
                            </div>
                                    <img  className="w-28 h-28 my-5 rounded-lg p" src={CDN_URL+item.card.info.imageId}></img>
                        </div>
                    )
                    )
                }
                <button className="border-2" 
                onClick={handleClearCart}>
                     clear cart</button>
                     {cartItems.length===0 && <span>cart items are empty</span>}
           </div>
        </div>
    )
};

export default Cart; 