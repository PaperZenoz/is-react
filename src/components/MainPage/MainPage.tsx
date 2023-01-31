import React from 'react'
import SortButton from "./SortButton/SortButton";
import CardList from "./CardList/CardList";
import {setFilmSelected, setSelectedFilmInfo, setSortValue} from "../../redux/actions";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";


type Props = {
    movieList: any
    sortValue: boolean
    setSortValue: (payload : boolean) => void
    setFilmSelected: (payload : boolean) => void
    setSelectedFilmInfo: (payload : any) => void
}


const MainPage: React.FC<Props> = ({movieList, sortValue, setSortValue, setFilmSelected, setSelectedFilmInfo}) => {

    return (
        <>
        <SortButton sortValue={sortValue} setSortValue={setSortValue}/>
        <CardList movieList={movieList} sortValue={sortValue} setFilmSelected={setFilmSelected} setSelectedFilmInfo={setSelectedFilmInfo}/>
        </>
    )

}

const mapStateToProps = (state: AppStateType)=> {
    return {
        movieList: state.app.movieList,
        sortValue: state.main.sortValue,
    }
}

export default connect(mapStateToProps, { setSortValue, setFilmSelected, setSelectedFilmInfo})(MainPage)