import { createStore } from "redux";
import { studentsReducer } from "./reducer";

export const store = createStore(
    studentsReducer
)