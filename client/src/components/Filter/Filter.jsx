import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, orderRecipes, filterByDiets, getDiets, searchByName } from "../../redux/actions";
import Search from "../Search/Search";
import style from './Filter.module.css';

export default function Filter({ pagination }) {

    const dispatch = useDispatch();
    const diets = useSelector( (state) => state.diets );

    useEffect( () => {
        dispatch(getDiets());
    }, [dispatch])

    const handlerFilterByDiets = (e) => {
        dispatch(filterByDiets(e.target.value));
        pagination(1);
    }
    
    const handlerOrder = (e) => {
        dispatch(orderRecipes(e.target.value));
        pagination(1);
    }
    
    const handlerClean = (e) => {
        e.preventDefault();
        const filters = document.querySelectorAll('select');
        filters.forEach( (f) => f.value = 'all' )
        dispatch(getAllRecipes());
        pagination(1);
    }

    return (
        <div className={style.container} >

            <div className={style.container_filter}>
                <select onChange={ (e) => handlerOrder(e) } className={style.filter}>
                    <option value="all">Order Alphabetically</option>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                    <option value="ascScore">100-1</option>
                    <option value="desScore">1-100</option>
                </select>

                <Search pagination={pagination} />

                <select onChange={ (e) => handlerFilterByDiets(e) } className={style.filter}  >
                    <option value='all'>All</option>
                    {
                        diets?.map( (el) => {
                            return <option key={el.id} value={el.name}>{el.name}</option>
                        })
                    }
                </select>
            </div>
            
            <div className={style.container_btn_clean}>
                <button className={style.btn_clean} onClick={ (e) => handlerClean(e) }>Clean</button>
            </div>
        </div>
    )
}