import React, {useEffect} from 'react';
import MainPage from "./components/MainPage/MainPage";
import Preloader from "./common/Preloader";
import {connect} from "react-redux";
import {setMovieListThunk} from "./redux/actions";
import SelectedFilm from "./components/SelectedFilm/SelectedFilm";
import {AppStateType} from './redux/rootReducer';


type Props = {
    loading: boolean
    filmSelected: boolean
    setMovieListThunk: any
}

let App: React.FC<Props> = ({loading, filmSelected, setMovieListThunk}) => {

    useEffect(() => {
        setMovieListThunk()
    }, [])


    return (
        <div className="app container mt-5 mb-5">
            <h1 className="text-center font-weight-bolder">Star Wars</h1>
            {loading ? <Preloader/> : (filmSelected ? <SelectedFilm/> : <MainPage/>)}
        </div>
    )
}

const mapStateToProps = (state : AppStateType) => {
    return {
        loading: state.app.loading,
        filmSelected: state.app.filmSelected
    }
}

export default connect(mapStateToProps, {setMovieListThunk})(App)


