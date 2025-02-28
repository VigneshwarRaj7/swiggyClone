import React from "react"

class UserClass extends React.Component {
   constructor(props){
    super(props);

    this.state={
        count:0,
        
    }

    console.log(props);
   }

    incement = ()=>{
    this.setState({
        count: this.state.count+1,
    })
   }
   
   componentDidMount(){
    console.log("child component did mount")
   }
   
    
   
    render(){
      return(
        <div style={{border:"3px solid Black", margin:"5px", padding:"10px"}}>
            <h1>Class based component </h1>
            <h3>name - {this.props.details.name} age- {this.props.details.age}</h3>
            <h3>count- {this.state.count} </h3>
            <button onClick={this.incement}>+1</button>
        </div>
      )  
    }

}
export default UserClass;