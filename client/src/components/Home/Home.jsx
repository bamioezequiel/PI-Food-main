import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Cards/Cards.jsx";
import Loading from "../Loading/Loading.jsx";
import { getAllRecipes } from './../../redux/actions/index.js';
import style from './Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector( (state) => state.recipes );
    const [loading, setLoading] = useState(true);
    useEffect( async () => {
        await dispatch(getAllRecipes());
        setLoading(false);
    }, [dispatch]);

    return (
        <div className={style.container}>
            <div className={style.cards}>
                {
                   (loading) ? <Loading /> : <Cards recipes={allRecipes} />
                }
            </div>  
        </div>
    )
}