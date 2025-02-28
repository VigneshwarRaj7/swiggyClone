import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{
            items:[],
            quantity:[],
        },
    reducers:{
        addItem: (state,action)=>{
            
        //  state.items.forEach((element,index) => {
        //     console.log(element.card.info.id)
        //     console.log(index)
        //     if(action.payload.card.info.id===element.card.info.id){

        //     }
        //  });   
            
            state.items.push(action.payload);
            console.log(action.payload.card.info.id)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
    },
}); 

export const {addItem, removeItem, clearCart}=cartSlice.actions;

export default cartSlice.reducer;   