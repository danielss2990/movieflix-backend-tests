import React from 'react';
import { ReactComponent as FilmImage } from '../../../../core/assets/images/film.svg'
import './styles.scss';

const ProductCard = () => {
    return (

        <div className="card-base border-radius-10 product-card">
            <FilmImage />
            <div className="film-info">
                <h6 className="film-name">
                    O Retorno do Rei
                </h6>
                <div className="film-year">2013</div>
                <div className="film-description">
                    O olho do inimigo está se movendo.
                </div>
            </div>
        </div>
    );
}

export default ProductCard;