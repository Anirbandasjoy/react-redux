import { createStore } from "redux";


import counterReduser from "./counterReduser/reduser";


 export const store = createStore(counterReduser);

