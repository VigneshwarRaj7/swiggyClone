import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react"; 
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Header = ()=>{
    const[loginLogOutBtn,setloginLogOutBtn] = useState("Login");

    
    const onlineStatus = useOnlineStatus();
    const {loggedinUser} = useContext(UserContext);
    
    const cart = useSelector((store)=>store.cart.items);
   
    
    const dispatch = useDispatch();

    const handleClearItem=()=>{
      dispatch(clearCart());
    }

    return(
      <div className='header flex justify-between p-4 relative h-[100px] bg-slate-700 shadow-2xl'>
          <div className="logo-container">
            <Link to="/"><img className='logo w-28 hover:scale-125' src={LOGO_URL} /></Link>
          </div>
          <div className="nav-items flex align-middl font-bold text-orange-500" >
              <ul className=" flex items-center">
                <li className="px-2 ">Online status:{onlineStatus? "✅":"🔴"}</li>
                <li className="px-2 hover:scale-125"> <Link to="/">Home</Link></li>
                <li className="px-2 hover:scale-125"><Link to="/about">About us</Link></li>
                <li className="px-2 hover:scale-125 font:bold"><Link to="/cart">Cart ({cart.length}) items</Link></li>
                <li className="px-2 hover:scale-125"><Link to="/contact">Contact us</Link></li>
                <button className="login px-2 hover:scale-125" onClick={()=>{
                    loginLogOutBtn === "Login"?setloginLogOutBtn("Logout"):setloginLogOutBtn("Login");
                }}>{loginLogOutBtn}</button>
                <li className="px-2 hover:scale-125">{loggedinUser}</li>
                <li className="px-2 hover:scale-125 cursor-pointer "
                  onClick={handleClearItem}
                >clear Cart</li>
              </ul>
          </div>
      </div>
    )
  }

  export default Header;