import User from "./User"
import UserClass from "./UserClass";
import React from "react"


class About extends React.Component{
    
    constructor(){
        super();
        this.state={
         details: {
                name:"Bigdawg",
                age: 22
            }
        }
    }
    componentDidMount(){
        console.log("parent component did mount")
    }


    render(){
        return(
            <div>
              
                <h1>About</h1>
                <User details = {this.state.details}></User>
                <UserClass details = {this.state.details} ></UserClass>
        
            </div>
        )
    }       
    
}





export default About;