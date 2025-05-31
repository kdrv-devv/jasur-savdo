import { createSlice } from "@reduxjs/toolkit";

interface addDebtsModalType{
    open:boolean
    isLoading?:boolean
}
interface initialStateType{
    addDebtsModalVisibility:addDebtsModalType
}
const initialState:initialStateType ={
    addDebtsModalVisibility :{
        open:false,
        isLoading:false
    }
}
const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        setDebtsModalVisibility(state , { payload }){
            state.addDebtsModalVisibility.open = payload.open
        }
    }
})
export const { setDebtsModalVisibility}  = modalSlice.actions
export default modalSlice.reducer

