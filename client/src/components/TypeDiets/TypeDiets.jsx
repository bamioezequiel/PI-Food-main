import React from "react";
import style from './TypeDiets.module.css';

export default function TypeDiets({ diets }) {
    return (
        <div className={style.container}> 
            { 
                diets?.map( (el, i) => validateDiet(el, i) )
            } 
        </div>
    )
}

const validateDiet = (diet, i) => {
    switch(diet) {
        case 'gluten free':
        case 'dairy free':
        return <span key={i} className={style.badgeRed}>{diet}</span> ;
        case 'vegan':
        case 'lacto ovo vegetarian':
        case 'vegetarian':
        return <span key={i} className={style.badgeGreen}>{diet}</span>;
        case 'paleolithic':
        case 'primal':
        return <span key={i} className={style.badgePurple}>{diet}</span>;
        default:
        return <span key={i} className={style.badgeCyan}>{diet}</span> ;
    }
}