import {combineReducers, createStore} from "redux";
import {AppReduser} from "./appReduser";

const rootReducer = combineReducers({
    app: AppReduser
})
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store;