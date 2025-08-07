import {createSlice, nanoid} from "reducjs/toolkit";


const intialState = {
    todos:[{id:1,text:"Hello World"}]
}

const 

export const todoSlice = createSlice({
    name:"todo",
    intialState,
    reducers:{
        addTodo:(state,action )=>{},
        removeTodo:()=>{},
    }

})

