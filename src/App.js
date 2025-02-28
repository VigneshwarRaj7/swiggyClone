import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect,useState,useContext } from 'react';
import UserContext from './utils/userContext';
import {Provider} from "react-redux";
import appStore from "./utils/appStore"   



function App() {

  const [userInfo,setuserInfo] = useState(null);

  useEffect(()=>{
    const data ={
      name:"Vick"
    };
    setuserInfo(data.name);
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedinUser: userInfo}}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
     </UserContext.Provider>
    </Provider>
  );
}



export default App;
