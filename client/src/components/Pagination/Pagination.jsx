import React from "react";
import style from './Pagination.module.css';

export default function Pagination({ recipesPage, recipes, pagination }) {    
    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(recipes/recipesPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className={style.container_pagination}>
                {
                    pageNumbers?.map( (el) => {
                        return <button key={el} className={style.pagination_page} onClick={ () => pagination(el) } >{el}</button>
                    })
                }
            </div>
        </div>
    )
}