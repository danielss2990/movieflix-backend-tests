import React from 'react';
import './styles.scss';

type Props = {
    title:string;
    year: number;
    description: string;
}

const FilmTitleYearSubtitle = ({title,year,description}: Props) => {
    return (

        <div className="film-info">
                <h6 className="film-name">
                    {title}
                </h6>
                <div className="film-year">{year}</div>
                <div className="film-description">
                    {description}
                </div>
            </div>

    );
}

export default FilmTitleYearSubtitle;
