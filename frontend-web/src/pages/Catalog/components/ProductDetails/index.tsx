import React from 'react';
import { useParams } from 'react-router-dom';
import PrivateRoute from '../../../../core/components/Routes/PrivateRoute';
import { ReactComponent as FilmImage } from '../../../../core/assets/images/film.svg'
import './styles.scss';
import FilmTitleYearSubtitle from '../../../../core/components/FilmTitleYearSubtitile';


type ParamsType = {
    productId: string;
}

const ProductDetails = () => {

    const { productId } = useParams<ParamsType>();
    console.log(productId);

    return (

        <div className="film-details-container">
            <PrivateRoute path="/films/:productId">

            <div className="card-base-details border-radius-10 film-details">
                    <FilmImage className="film-details-image" />
                    <div className="film-title-year">
                    <FilmTitleYearSubtitle
                    
                    title="O Retorno do Rei" 
                    year={2013} 
                    description="O olho do inimigo está se movendo."
                    
                    />
                        <div className="film-details-description">
                            <div className="film-details-description-text">
                                O confronto final entre as forças do bem e do mal que lutam pelo
                                controle do futuro da Terra Média se aproxima. Sauron planeja um
                                grande ataque a Minas Tirith, capital de Gondor, o que faz com que
                                Gandalf e Pippin partam para o local na intenção de ajudar a
                                esistência. Um exército é reunido por Theoden em Rohan, em mais
                                uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo,
                                Sam e Gollum seguem sua viagem rumo à Montanha da Perdição
                                para destruir o anel.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card-base-details border-radius-10 film-evaluation">
                    Film Evaluation
                    
                    <div className="film-evaluation-submit">
                        <button className="btn btn-primary border-radius-10 mr-3 mb-3 font-weight-bold">SALVAR AVALIAÇÃO</button>
                    </div>
                </div>

                <div className="card-base-details border-radius-10 film-details-comments">
                    Comentários
                </div>

            </PrivateRoute>

        </div>
    );
};

export default ProductDetails;