import React from "react";
import { useParams } from "react-router-dom";
import style from './DetailsRecipe.module.css';

export default function DetailsRecipe() {
    let { id } = useParams();
    let recipe = {
        name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://spoonacular.com/recipeImages/716426-556x370.jpg",
        steps: [
            "In a bowl mix grated potatoes, spinach, onion, carrot",
            "Add 1/2 tsp salt and mix well",
            "Squeeze the veggie mixture to remove all the moisture out",
            "Add red chilli powder and corn starch",
            "Adjust salt by tasting the mixture",
            "Form the mixture into patties",
            "Heat oil in a pan for shallow frying",
            "Put the patties gently in the hot pan",
            "Let them brown on medium high heat for few minutes from both the sides then lower the",
            "heat to medium.Cook till done."
        ]
    }

   return (
    <div className={style.container} >
        <h1 className={style.title}>{recipe.name} {id}</h1>
        <img src={recipe.image} className={style.image} alt="image not found" />
        <ol className={style.steps}>{recipe.steps?.map( (el) => <li className={style.step}>{el}</li> )}</ol>
    </div>
   ) 
}