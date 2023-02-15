import { DECREMENT, INCREMENT, RESET } from "../constentDefaind/const";



const initalCounterState ={
    count : 0
}

const counterReduser = (state = initalCounterState,action) => {

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count + 1
            }
        case DECREMENT :
            return{
                ...state,
                count : state.count - 1
            }
        case RESET : 
            return{
                ...state,
                count : 0
            }
    
        default:
            return state;
    }
}

export default counterReduser