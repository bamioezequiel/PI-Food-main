import React, { useState } from "react";
import style from './Search.module.css';
import icon from './../../assets/search.png';
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

export default function Search({ pagination, cleanSelector }) {

    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(value !== '') {
            await dispatch(searchByName(value));
            pagination(1);
            cleanSelector();
            setValue('');
        }
    }
//agregar enter
    return (
        <div className={style.container_search}>
            <table className={style.elements}>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" value={value} onChange={ (e) => handleSearch(e) } className={style.search} placeholder='Search' />
                        </td>
                        <td>
                            <button type='submit'
                                    onClick={ (e) => handleSubmit(e) }
                                    className={style.button_icon}>
                                <img src={icon} className={style.icon} alt='icon search not found' />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    )
}