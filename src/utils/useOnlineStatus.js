import { useEffect, useState } from "react";


const useOnlineStatus=()=>{

    const [onlineStatus, setonlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(true);
            
        })
        
        window.addEventListener("online", ()=>{
            setonlineStatus(false);
           
            
        })
    },[])
  

    return onlineStatus;
}

export default useOnlineStatus;