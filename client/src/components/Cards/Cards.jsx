import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import style from './Cards.module.css';

export default function Cards({ recipes }) {

    const [ currentPage, setCurrentPage ] = useState(1);
    // const [ recipesPage, setRecipesPage] = useState(9);
    const [ recipesPage ] = useState(9);
    const indexOfLastRecipes = currentPage * recipesPage;
    const indexOfFirstRecipes = indexOfLastRecipes - recipesPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipes, indexOfLastRecipes);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <React.Fragment>
            <div className={style.container}>
                <Pagination currentPage={currentPage} recipesPage={recipesPage} recipes={recipes.length} pagination={pagination} />
                <div className={style.cards}>
                {
                    currentRecipes?.map( (el) => {
                        return <Card key={el.id} id={el.id} name={el.name} image={el.image} diets={el.diets}/>
                    })
                }
                </div>  
            </div>
        </React.Fragment>
    )
}