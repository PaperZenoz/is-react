import React from 'react'
import {useDispatch} from "react-redux";

type Props = {
    sortValue: boolean
    setSortValue: (payload : boolean) => void
}


let SortBurron: React.FC<Props> = ({sortValue, setSortValue}) => {
    const dispatch = useDispatch()

    const handlerSortButton = () => {
        const newValue = sortValue ? false : true
        dispatch(setSortValue(newValue))
    }

    return (
        <button type="button" className="btn btn-secondary btn-lg btn-block mt-4" onClick={handlerSortButton}>Показать
            сначала {sortValue ? 'старые' : 'новые'}</button>
    )
}

export default SortBurron






