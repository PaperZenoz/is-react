import React from 'react'
import CardImg from '../../../assets/img/cardImg.jpg'


type Props = {
    movieList: any
    sortValue: boolean
    setFilmSelected: (payload : boolean) => void
    setSelectedFilmInfo: (payload : any) => void
}


// Создаем картотеку фильма
let CardList: React.FC<Props> = ({movieList, sortValue, setFilmSelected, setSelectedFilmInfo}) => {

    const handlerOnClick = (payload: any) => {
        setSelectedFilmInfo(payload)
        setFilmSelected(true)
    }


    // Сортируем картотеку по дате в зависимости от значения устанавливаемого кнопкой сортировки
    const sortFunc = (a: any, b: any) => sortValue ? b.release_date.replace(/-/g, '') - a.release_date.replace(/-/g, '') : a.release_date.replace(/-/g, '') - b.release_date.replace(/-/g, '')

    return (

        // Создаем картотеку на основании приходящего массива фильмов из swapi
        <div className="d-flex justify-content-between flex-wrap mt-5">
            {movieList.sort((a: any, b: any) => sortFunc(a, b)
            ).map((film: any) =>
                <div className="card card-wrap" key={film.episode_id} onClick={() => handlerOnClick(film)}>
                    <img src={CardImg} className="card-img-top" alt={film.title}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">Episode {film.episode_id}: {film.title}</h5>
                        <p className="card-text">Дата выхода: {film.release_date}</p>
                    </div>
                </div>
            )}
        </div>

    )
}


export default CardList