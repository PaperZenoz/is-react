 import {SET_SORT_VALUE} from "./types";

 export type InitialStateType = {
     sortValue : boolean
 }

 const initialState: InitialStateType = {
     sortValue: true,
 }

 export const mainPageReducer = (state = initialState, action: any): InitialStateType => {
     switch (action.type) {
         case SET_SORT_VALUE:
             return {...state, sortValue: action.payload}
         default:
             return state
     }
 }