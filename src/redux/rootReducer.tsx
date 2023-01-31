import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {mainPageReducer} from "./mainPageReducer";
import {selectedFilmReducer} from "./selectedFilmReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    main: mainPageReducer,
    selectedFilm: selectedFilmReducer
})


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>