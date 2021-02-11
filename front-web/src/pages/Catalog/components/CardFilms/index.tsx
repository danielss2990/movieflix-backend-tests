import React from 'react';
import { Film } from '../../../../core/types/films';
import './styles.scss';


type Props = {
    film: Film;
}

const CardFilms = ({film}: Props) => {


    return (
        <div className="catalog-content-card">
            <img 
                src={film.imgUrl}
                alt="film"
                className="catalog-img"
            />
            <div className={"catalog-title"}>{film.title}</div>
            <span className={"catalog-ano"}>{film.year}</span>
            <h3 className={"catalog-subTitle"}>{film.subTitle}</h3>
        </div>
    );
};

export default CardFilms;