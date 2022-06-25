import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Cards/Cards.jsx";
import { getAllRecipes } from './../../redux/actions/index.js';
import style from './Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector( (state) => state.recipes );
    useEffect( () => {
        dispatch(getAllRecipes());
    }, [dispatch]);

    return (
        <div className={style.container}>
            <div className={style.cards}>
                <Cards recipes={allRecipes} />
            </div>  
        </div>
    )
}