import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => {
    return (
        <div className="catalog-container">
            <div className="catalog-products">

                <Link to="/films/1">
                    <ProductCard />
                </Link>

                <Link to="/films/2">
                    <ProductCard />
                </Link>

                <Link to="/films/3">
                    <ProductCard />
                </Link>

                <Link to="/films/4">
                    <ProductCard />
                </Link>

                <Link to="/films/5">
                    <ProductCard />
                </Link>

                <Link to="/films/6">
                    <ProductCard />
                </Link>

                <Link to="/films/7">
                    <ProductCard />
                </Link>
            </div>
        </div>
    );
}

export default Catalog;