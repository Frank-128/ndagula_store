import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:{
        name:"",
        value:0,
        amount:0,
        size:"",
        color:'',
        image:'',
    },
    products:[],
    order:0,
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value+=1;
        },
        decreament:(state)=>{
            state.value-=1;
        },
        increamentByAmount:(state,action)=>{
            state.value += action.payload; 
        },
        colorChooser:(state,action)=>{

           if(!state.color.includes(action.payload))
                state.color += action.payload+",";
        },
        addToCart:(state,action)=>{
           
            state.order +=1
            state.products = [...state.products,action.payload];
            
        },
        removeItem:(state,action)=>{

            var newOrder = state.order-1;
            const newOne = state.products.filter((item,index)=> index !== action.payload);
           return {...state,products:newOne,order:newOrder}
            
        }

    }
});

export const {increament,decreament,increamentByAmount,colorChooser,addToCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;