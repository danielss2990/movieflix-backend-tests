import React from 'react';
import { ReactComponent as FilmImage } from '../../../../core/assets/images/film.svg'
import FilmTitleYearSubtitle from '../../../../core/components/FilmTitleYearSubtitile';
import './styles.scss';

const ProductCard = () => {
    return (

        <div className="card-base border-radius-10 product-card">
            <FilmImage />
            <FilmTitleYearSubtitle title="O Retorno do Rei" year={2013} description="O olho do inimigo está se movendo."/>
        </div>
    );
}

export default ProductCard;