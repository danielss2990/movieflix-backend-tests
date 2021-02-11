import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Film } from '../../../../../../core/types/films';
import { makePrivateRequest } from '../../../../../../core/utils/request';
import './styles.scss';


type ParamsType = {
    filmeId: string;
}


const DetailsCard = () => {

        const { filmeId } = useParams<ParamsType>();
        const [film, setFilm] = useState<Film>();
        
        useEffect(() => {
            makePrivateRequest({url:`/movies/${filmeId}`})
            .then(response => setFilm(response.data));
        }, [filmeId]);
    

    return (

        <div className="films-details-container">
            <img src={film?.imgUrl} alt="imageFilm" className="films-details-img" />
            <div className="films-detalis-content">
                <div className={"films-details-title"}>{film?.title}</div>
                <span className={"films-details-ano"}>{film?.year}</span>
                <h3 className={"films-details-subTitle"}>{film?.subTitle}</h3>
                <div className={"films-details-description"}>
                    <p className={"films-details-text"}>
                        {film?.synopsis}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;