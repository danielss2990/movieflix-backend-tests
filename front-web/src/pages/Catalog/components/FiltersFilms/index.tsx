import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Genre } from '../../../../core/types/films';
import { makePrivateRequest } from '../../../../core/utils/request';
import './styles.scss';

export type FilterForm = {
    genreId?: number;
}

type Props = {
    onSearch: (filter: FilterForm) => void;
}

const FiltersFilms = ({ onSearch }: Props) => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState<Genre>();

  //setGenres(response.data.content)
    useEffect(() => {
      
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
    }, [])

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
        onSearch({ genreId: genre?.id })
    }

    return (
        <div className="catalog-container">
            <div className="catalog-content-search row d-flex justify-content-center">
                <Select options={genres}
                    className="filter-background"
                    name="Genre"
                    key={`select-${genre?.id}`}
                    inputId="genries"
                    getOptionLabel={(option: Genre) => option.name}
                    getOptionValue={(option: Genre) => String(option.id)}
                    classNamePrefix="catalog-select"
                    placeholder="Gêneros de Filmes"
                    onChange={value => handleChangeGenre(value as Genre)}
                />
            </div>
        </div>
    );
};

export default FiltersFilms;