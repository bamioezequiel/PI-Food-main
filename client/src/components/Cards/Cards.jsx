import React from "react";
import Card from "../Card/Card";
import style from './Cards.module.css';

export default function Cards({ recipes }) {
    return (
        <div className={style.cards}>
            {
                recipes?.map( (el) => {
                    return <Card key={el.id} id={el.id} name={el.name} image={el.image} diets={el.diets}/>
                })
            }
        </div>            
    )
}