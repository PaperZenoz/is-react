import {
    SET_CHARACTER_LOADING, SET_CHARACTER_WAS_SELECTED, SET_SELECTED_CHARACTER,
    SET_SELECTED_FILM_INFO
} from "./types";

const initialState = {
    selectedFilmInfo: null as null | any,
    selectedCharacter: null as null | any,
    characterLoading: false,
    characterWasSelected: false
}

export type InitialStateType = typeof initialState


export const selectedFilmReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_SELECTED_FILM_INFO:
            return {...state, selectedFilmInfo: action.payload}
        case SET_SELECTED_CHARACTER:
            return {...state, selectedCharacter: action.payload}
        case SET_CHARACTER_LOADING:
            return {...state, characterLoading: action.payload}
        case SET_CHARACTER_WAS_SELECTED:
            return {...state, characterWasSelected: action.payload}


        default:
            return state
    }


}