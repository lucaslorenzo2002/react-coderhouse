import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

function Productos (){
    let{search} = useLocation();
    let query = new URLSearchParams(search)

    const TOTAL = 20;
    const LIMIT = 10;
    let start= parseInt(query.get("inicio")) || 1;
    let end= parseInt(query.get("fin")) || LIMIT;

    let navigate = useNavigate()

    const handlePrev = () => {
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)
    }
    const handleNext = () => {
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    }
    return(
        <>
            <ItemListContainer />
            prod {start} al {end}
            {start > LIMIT && <button onClick={handlePrev}>prev</button>}
            {end < TOTAL &&  <button onClick={handleNext}>next</button>}
        </>
        
    )
}

export default Productos