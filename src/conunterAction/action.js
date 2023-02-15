import { DECREMENT, INCREMENT, RESET } from "../constentDefaind/const"

 export const incrementCounter = () => {
    return{
        type : INCREMENT
    }
}
 export const decremetCounter = () =>{
    return{
        type : DECREMENT
    }
}
export const restCounter = () =>{
    return{
        type : RESET,
    }
}

