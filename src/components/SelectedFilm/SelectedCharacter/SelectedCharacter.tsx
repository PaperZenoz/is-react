import React from 'react'


type Props = {
    selectedCharacter: any
    setCharacterWasSelected: (payload : boolean) => void
}

const SelectedCharacter: React.FC<Props> = ({selectedCharacter, setCharacterWasSelected}) =>  {

    const handlerReturnButton = () => {
        setCharacterWasSelected(false)
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <button type="button" className="btn btn-secondary mb-3"  onClick={handlerReturnButton}>Вернуться на страницу с фильмом</button>
                <h5 className="card-title mb-5 font-weight-bold">Имя персонажа: {selectedCharacter.name}</h5>
                <p className="card-text"><strong>Пол:</strong> {selectedCharacter.gender}</p>
                <p className="card-text"><strong>Год рождения: {selectedCharacter.birth_year}</strong> </p>
            </div>
        </div>

    )
}


export default SelectedCharacter