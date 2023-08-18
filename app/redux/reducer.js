"use client"
import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./store";
const initialState={
    client :{card_data:undefined}
}
export const ReducerSlice = createSlice({
    name:'crudapp',
    initialState,
    reducers:{
        card_data :(state,action)=>{
            state.client.card_data = action.payload
        }
    }
})

export const {card_data} = ReducerSlice.actions
export default ReducerSlice.reducer 