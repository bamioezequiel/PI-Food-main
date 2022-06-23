import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiets, getDiets } from "../../redux/actions";
import icon from './../../assets/search.png';
import style from './Filter.module.css';

export default function Filter() {

    const dispatch = useDispatch();
    const diets = useSelector( (state) => state.diets )
    useEffect( () => {
        dispatch(getDiets());
    }, [dispatch])

    const handlerFilterByDiets = (e) => {
        console.log(e.target.value)
        dispatch(filterByDiets(e.target.value));
    }

    return (
        <div className={style.container} >
            <div className={style.container_filter}>
                <select className={style.filter}>
                    <option value="all">Order Alphabetically</option>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                </select>

                <div className={style.container_search}>
                    <table className={style.elements}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" className={style.search} placeholder='Search' />
                                </td>
                                <td>
                                    <button className={style.button_icon} > <img src={icon} className={style.icon} alt='icon search not found' /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>

                <select onChange={ (e) => handlerFilterByDiets(e) } className={style.filter}  >
                    <option value='all'>All</option>
                    {
                        diets?.map( (el) => {
                            return <option key={el.id} value={el.name}>{el.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}