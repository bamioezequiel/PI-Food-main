import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from './../../redux/actions/index.js';
import { NavLink } from "react-router-dom";
import style from './DetailsRecipe.module.css';

export default function DetailsRecipe() {
    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    let recipe = useSelector( (state) => state.recipe );
    useEffect( async () => {
        console.log('start')  
        await dispatch(getRecipeById(id));
        setLoading(true);
    }, [dispatch, id]);
     
   return (
    !loading ? <h2>Cargando...</h2> :<div className={style.container}>
        <NavLink to='/home' className={style.back}>X</NavLink>

        <h1 className={style.title}> {recipe.name} </h1>
        <h3>{recipe.dishTypes}</h3>
        <h5>Health score: {recipe.healthScore}</h5>
        <img src={recipe.image} className={style.image} alt={`${recipe.name} not found`} />
        <h2>Summary:</h2>
        <p className={style.summary}> {recipe.summary} </p>
        <h2>Steps:</h2>
        <ol className={style.steps}>
            {
                recipe.steps?.map( (el, i) => <li key={i} className={style.step}>{el}</li> )
            }
        </ol>
    </div>
   )
}