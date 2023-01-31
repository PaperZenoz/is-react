import React from 'react'
import SelectedCharacter from "./SelectedCharacter/SelectedCharacter";
import Preloader from "../../common/Preloader";
import SelectedFilmInfo from "./SelectedFilmInfo/SelectedFilmInfo";
import {connect} from "react-redux";
import {setFilmSelected, selectedCharacterThunk, setCharacterWasSelected} from "../../redux/actions";
import {AppStateType} from "../../redux/rootReducer";


type Props = {
    selectedFilmInfo: null | any
    characterLoading: boolean
    selectedCharacterThunk: any
    setFilmSelected: (payload : boolean) => void

    characterWasSelected: boolean
    selectedCharacter: any
    setCharacterWasSelected: (payload : boolean) => void

}



const SelectedFilm: React.FC<Props> = ({selectedFilmInfo, selectedCharacter, characterLoading, characterWasSelected, setCharacterWasSelected, selectedCharacterThunk, setFilmSelected}) => {

    return (
        <>
        {characterWasSelected ? (characterLoading ? <SelectedCharacter selectedCharacter={selectedCharacter} setCharacterWasSelected={setCharacterWasSelected}/> :  <Preloader/>) : <SelectedFilmInfo selectedFilmInfo={selectedFilmInfo} setFilmSelected={setFilmSelected} selectedCharacterThunk={selectedCharacterThunk} />}

        </>
    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        selectedFilmInfo: state.selectedFilm.selectedFilmInfo,
        selectedCharacter: state.selectedFilm.selectedCharacter,
        characterLoading: state.selectedFilm.characterLoading,
        characterWasSelected: state.selectedFilm.characterWasSelected
    }
}


export default connect(mapStateToProps, {setFilmSelected, selectedCharacterThunk, setCharacterWasSelected})(SelectedFilm)