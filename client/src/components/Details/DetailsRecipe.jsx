import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from './../../redux/actions/index.js';
import style from './DetailsRecipe.module.css';

export default function DetailsRecipe() {
    let { id } = useParams();
    const dispatch = useDispatch();
    let recipe = useSelector( (state) => state.recipe );
    recipe = recipe[0];//fix

    useEffect( () => {
        dispatch(getRecipeById(id));
    }, []);
     
   return (
    <div className={style.container}>
        <h1 className={style.title}> {recipe.name} </h1>
        <span> {recipe.healthScore} </span>
        <img src={recipe.image} className={style.image} alt={`${recipe.name} not found`} />
        <h2>Summary:</h2>
        <p className={style.summary}> {recipe.summary} </p>
        <h2>Steps:</h2>
        <ol className={style.steps}>
            {
                recipe.steps?.map( (el) => <li className={style.step}>{el}</li> )
            }
        </ol>
    </div>
   )
}