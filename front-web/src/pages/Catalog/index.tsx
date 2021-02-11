import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLogout from '../../core/components/ButtonLogout';
import Navbar from '../../core/components/NavBar';
import Pagination from '../../core/components/Pagination';
import { FilmsResponse } from '../../core/types/films';
import { makePrivateRequest } from '../../core/utils/request';
import CardFilms from './components/CardFilms';
import FiltersFilms, { FilterForm } from './components/FiltersFilms';
import FilmCatalogLoad from './components/Loaders/FilmsLoaders';
import './styles.scss';


const Catalog = () => {

    const [filmsResponse, setFilmsResponse] = useState<FilmsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const getFilms = useCallback((filter?: FilterForm) => {
        const params = {
            page: activePage,
            size: 8,
            genreId: filter?.genreId
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setFilmsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    useEffect(() => {
        getFilms();
    }, [getFilms]);

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <div className="catalog-container row d-flex justify-content-center">
                <FiltersFilms onSearch={filter => getFilms(filter)} />
                <div className="catalog-container-card row d-flex justify-content-center">
                    {isLoading ? <FilmCatalogLoad /> : (
                        filmsResponse?.content.map(film => (
                            <Link to={`/filmes/${film.id}`}>
                                <CardFilms film={film} key={film.id} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
            {filmsResponse && <Pagination
                totalPages={filmsResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
            />}
        </>
    );
};

export default Catalog;