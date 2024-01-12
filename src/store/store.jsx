import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as togglePassed} from "./homeWork/homeWork.slice";

const reducers = combineReducers({
    homework : togglePassed,
})
export default configureStore
({
    reducer: reducers
})