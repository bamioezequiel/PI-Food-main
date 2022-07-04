import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import Filter from "../Filter/Filter.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import style from './Cards.module.css';

export default function Cards({ recipes }) {
    const [render, setRender] = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);
    const recipesPage = 9;
    // const [ recipesPage ] = useState(9);
    const indexOfLastRecipes = currentPage * recipesPage;
    const indexOfFirstRecipes = indexOfLastRecipes - recipesPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipes, indexOfLastRecipes);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <React.Fragment>
            <Filter pagination={pagination} setRender={setRender} />
            {
                <div className={style.container}>
                    {
                        currentRecipes.length && <Pagination currentPage={currentPage}
                                                             recipesPage={recipesPage} 
                                                             recipes={recipes.length} 
                                                             pagination={pagination} />
                    }
                    <div className={style.cards}>
                    {
                        (currentRecipes.length > 0) 
                            ? currentRecipes?.map( (el) => {
                                return <Card key={el.id} 
                                             id={el.id} 
                                             name={el.name} 
                                             image={el.image} 
                                             healthScore={el.healthScore} 
                                             diets={el.diets}/>
                            })
                            : <h2>No recipes available</h2>
                    }
                    </div> 
                </div>
            }
        </React.Fragment>
    )
}