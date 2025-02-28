import { useState } from "react";

const User =(props)=>{

    const [count,setcount] = useState(0);
    const [count2] = useState(0);

    const  increment=()=>{
        setcount(count+1);
    }

    
    return(
        <div style={{border:"3px solid Black", margin:"5px", padding:"10px" }}>
           <h1> Functional Component</h1> 
           <h3>name - {props.details.name} age-{props.details.age}</h3>
           <h3>Count={count} count2= {count2}</h3>
           <button onClick={increment}>+1</button>
        </div>
    )
}
export default User;
