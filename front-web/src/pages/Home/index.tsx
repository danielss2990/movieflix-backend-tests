import React from 'react';
import Navbar from "../../core/components/NavBar";
import { ReactComponent as MainImage } from '../../core/assets/images/Desenho.svg';
import Auth from '../Auth';
import './styles.scss';

function Home() {
    return (
        <>
            <Navbar />
            <div className=" home-container">
                <div className="home-content">
                    <div>
                        <h1 className="home-title">
                            Avalie Filmes
                        </h1>
                        <h3 className="home-subTitle">
                            Diga o que você achou do seu filme favorito
                        </h3>
                        <div className="home-image">
                            <MainImage />
                        </div>
                    </div>
                </div>
            <Auth /> 
            </div>
        </>
    )
}

export default Home;