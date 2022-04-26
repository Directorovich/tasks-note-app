
import {combineReducers, createStore} from "redux";
import noteReducer from "./note-reducer";

let redusers = combineReducers({
    note: noteReducer
});

let store = createStore(redusers);

export default store;