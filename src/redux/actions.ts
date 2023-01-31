import {
    SET_SELECTED_CHARACTER, SET_FILM_SELECTED, SET_LOADING, SET_MOVIE_LIST, SET_SELECTED_FILM_INFO,
    SET_SORT_VALUE, SET_CHARACTER_LOADING, SET_CHARACTER_WAS_SELECTED
} from "./types";



type SetMovieListActionType = { type : typeof SET_MOVIE_LIST, payload : any }
export const setMovieList = (payload : any): SetMovieListActionType => ({type: SET_MOVIE_LIST, payload})

type SetLoadingActionType = { type : typeof SET_LOADING, payload : boolean }
export const setLoading = (payload : boolean): SetLoadingActionType => ({type: SET_LOADING, payload})

type SetSortValueActionType = { type : typeof SET_SORT_VALUE, payload : boolean }
export const setSortValue = (payload : boolean): SetSortValueActionType => ({type: SET_SORT_VALUE, payload})

type SetFilmSelectedActionType = { type : typeof SET_FILM_SELECTED, payload : boolean }
export const setFilmSelected = (payload : boolean): SetFilmSelectedActionType => ({type: SET_FILM_SELECTED, payload})

type SetSelectedFilmInfoActionType = { type : typeof SET_SELECTED_FILM_INFO, payload : any }
export const setSelectedFilmInfo = (payload : any): SetSelectedFilmInfoActionType => ({type : SET_SELECTED_FILM_INFO, payload})

type SetSelectedCharacterActionType = { type : typeof SET_SELECTED_CHARACTER, payload : any }
export const setSelectedCharacter = (payload : any): SetSelectedCharacterActionType => ({type: SET_SELECTED_CHARACTER, payload})


type SetCharacterLoadingActionType = { type : typeof SET_CHARACTER_LOADING, payload : boolean }
export const setCharacterLoading = (payload : boolean): SetCharacterLoadingActionType => ({ type: SET_CHARACTER_LOADING, payload})


type SetCharacterWasSelectedActionType = { type : typeof SET_CHARACTER_WAS_SELECTED, payload : boolean }

export const setCharacterWasSelected = (payload : boolean): SetCharacterWasSelectedActionType => ({type: SET_CHARACTER_WAS_SELECTED, payload})




export const setMovieListThunk = () => (dispatch : any) =>{
    dispatch(setLoading(true))
    fetch('https://swapi.dev/api/films/?format=json').then(response => response.json()).then(cards => {
        dispatch(setMovieList(cards.results))
        dispatch(setLoading(false))
    })
}

export const selectedCharacterThunk = (payload : string) => (dispatch : any) => {
    dispatch(setCharacterWasSelected(true))
    dispatch(setCharacterLoading(false))
    fetch(payload).then(response => response.json()).then(character => {
        dispatch(setSelectedCharacter(character))
        dispatch(setCharacterLoading(true))
    })
}

