import React from "react";
import style from './Pagination.module.css';

export default function Pagination({ currentPage, recipesPage, recipes, pagination }) {    
    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(recipes/recipesPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={style.container}>
            <h5>Page: {currentPage} / {pageNumbers.length}</h5>
            <div className={style.container_pagination}> 
                <button key='prev' 
                    className={style.pagination_page} 
                    onClick={ () => {
                        if(currentPage > 1) { 
                            pagination(currentPage-1) 
                        }
                    }}>&lt;</button>      
                {
                    pageNumbers?.map( (el) => {
                        return <button 
                            key={el} 
                            className={style.pagination_page} 
                            onClick={ () => pagination(el) }>{el}</button>
                    })
                }

                <button key='next' 
                    className={style.pagination_page} 
                    onClick={ () => {
                        if(currentPage < pageNumbers.length) {
                            pagination(currentPage+1) 
                        }
                    }}>&gt;</button>
            </div>
        </div>
    )
}