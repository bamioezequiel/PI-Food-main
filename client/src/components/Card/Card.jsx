import React from "react";
import { NavLink } from 'react-router-dom'
import TypeDiets from "../TypeDiets/TypeDiets";
import style from './Card.module.css';
import Food404 from './../../assets/404Food.png';

export default class Card extends React.Component {
    render() {
        return (
            <div className={style.card}>
                <div>
                    <img src={this.props.image ? this.props.image : Food404} className={style.img} alt={this.props.title} />
                    <h5 className={style.score}>HealthScore: <i>{this.props.healthScore}</i></h5>
                    <h2 className={style.title}>{this.props.name}</h2>
                    <TypeDiets diets={this.props.diets} /> 
                </div>
                <NavLink to={`/recipes/${this.props.id}`} className={style.btn}>More</NavLink>
            </div>            
        )
    }
}

