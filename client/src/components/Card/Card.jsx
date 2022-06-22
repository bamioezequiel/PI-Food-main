import React from "react";
import { NavLink } from 'react-router-dom'
import style from './Card.module.css';


export default class Card extends React.Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.body}>
                    <img src={this.props.image} className={style.img} alt={this.props.title} />
                    <h2 className={style.title}>{this.props.name}</h2>
                    <div className={style.description}> { this.props.diets?.map( (el) => validateDiet(el) ) } </div>
                </div>
                <NavLink to={`/recipe/${this.props.id}`} className={style.btn}>Ver más</NavLink>
            </div>            
        )
    }
}

const validateDiet = (diet) => {
    switch(diet) {
        case 'gluten free':
        case 'dairy free':
        return <span className={style.badgeRed}>{diet}</span> ;
        case 'vegan':
        case 'lacto ovo vegetarian':
        return <span className={`${style.badgeGreen} ${style.badgeGreen}`}>{diet}</span>;
        case 'paleolithic':
        case 'primal':
        return <span className={style.badgePurple}>{diet}</span>;
        default:
        return <span className={style.badgeCyan}>{diet}</span> ;
    }
}