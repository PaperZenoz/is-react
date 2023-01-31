import {SET_FILM_SELECTED, SET_LOADING, SET_MOVIE_LIST} from "./types";




const initialState = {
    movieList: null as null | any,
    loading: true,
    filmSelected: false
}

export type InitialStateType = typeof initialState


export const appReducer = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {...state, movieList: action.payload}
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_FILM_SELECTED:
            return {...state, filmSelected: action.payload}

        default:
            return state
    }
}