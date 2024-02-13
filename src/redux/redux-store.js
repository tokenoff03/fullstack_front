import { combineReducers, legacy_createStore as createStore } from "redux";
import commentsReducer from "./commentsReducer";
import roomsReducer from "./roomsReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    commentsPage: commentsReducer,
    roomPage: roomsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);



export default store;