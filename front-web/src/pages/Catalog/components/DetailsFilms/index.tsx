import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ButtonLogout from '../../../../core/components/ButtonLogout';
import Navbar from '../../../../core/components/NavBar';
import { Film } from '../../../../core/types/films';
import { isAllowedByRole } from '../../../../core/utils/auth';
import { makePrivateRequest } from '../../../../core/utils/request';
import FilmCommentLoaders from '../Loaders/FilmCommentLoaders';
import FilmsDetailsLoaders from '../Loaders/FilmsDetailsLoaders';
import AvaliationsCard from './components/AvaliationsCard';
import CommentCard from './components/CommentCard';
import DetailsCard from './components/DetailsCard';

type ParamsType = {
    filmeId: string;
}

const DetailsFilms = () => {
    const { filmeId } = useParams<ParamsType>();
    const [movieResponse, setMovieResponse] = useState<Film>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        makePrivateRequest({ url: `/movies/${filmeId}` })
            .then(response => {
                setMovieResponse(response.data);
            })
            .finally(() => setIsLoading(false));
    }, [filmeId])

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <Link to="/filmes" className="back-container">
                    <h3 className="back-text">Voltar</h3>
            </Link>
            {isLoading ? <FilmsDetailsLoaders/> : (
                <DetailsCard />
            )}

            {  isLoading ? <FilmCommentLoaders/> :(
                
                isAllowedByRole(['ROLE_MEMBER']) &&
                <CommentCard id={filmeId}/>
            )}

            <div className="avaliations-container">
                {movieResponse?.reviews.map(review => (
                    <AvaliationsCard key={review.id} textReview={review.text} autorReview={review.userName} />
                ))}
            </div>
        </>
    );
};

export default DetailsFilms;