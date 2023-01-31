import React from 'react'




type Props = {
    selectedFilmInfo: null | any
    setFilmSelected: (payload : boolean) => void
    selectedCharacterThunk: any
}

const SelectedFilmInfo: React.FC<Props> = ({selectedFilmInfo, setFilmSelected, selectedCharacterThunk}) => {

    const handlerReturnButton = () => {
        setFilmSelected(false)
    }

    const handlerCharacter = (payload: string) => {
        selectedCharacterThunk(payload)
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <button type="button" className="btn btn-secondary mb-3" onClick={handlerReturnButton}>Вернуться на главную
                </button>
                <h5 className="card-title mb-5 font-weight-bold">
                    Episode {selectedFilmInfo.episode_id}: {selectedFilmInfo.title}</h5>
                <p className="card-text"><strong>Имя режисёра:</strong> {selectedFilmInfo.director} </p>
                <p className="card-text"><strong>Дата выпуска:</strong> {selectedFilmInfo.release_date} </p>
                <p className="card-text"><strong className="mb-3 d-block">Список персонажей:</strong></p>
                {selectedFilmInfo.characters.map((character: string, index: number) => <p key={index}
                                                                          className="card__ancor" onClick={() => handlerCharacter(character)}>{character}</p>
                )}
            </div>
        </div>
    )
}

export default SelectedFilmInfo