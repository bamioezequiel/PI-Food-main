import React from "react";
import style from './Card.module.css';

export default class Card extends React.Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.body}>
                    <img src={this.props.image} className={style.img} alt={this.props.title} />
                    <h2 className={style.title}>{this.props.name}</h2>
                    <p className={style.description}> { this.props.diets?.map( (el) => <span>{el}</span> ) } </p>
                </div>
                <button className={style.btn}>Ver mas</button>
            </div>            
        )
    }
}