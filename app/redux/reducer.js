"use client"
import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./store";
const initialState={
    client :{card_data:undefined,auth_toggle:false}
}
export const ReducerSlice = createSlice({
    name:'newsDekho',
    initialState,
    reducers:{
        card_data :(state,action)=>{
            state.client.card_data = action.payload
        },
        auth_toggle :(state)=>{
            state.client.auth_toggle=!state.client.auth_toggle
        }
    }
})

export const {card_data} = ReducerSlice.actions
export default ReducerSlice.reducer 