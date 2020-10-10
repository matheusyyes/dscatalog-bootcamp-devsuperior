import React from 'react';
import './styles.scss';
import {ReactComponent as Product} from '../../../core/assets/images/product.svg';

const ProductCard = () =>(

    <div className="card-base border-radios-10 product-card">
        <Product></Product>
        <div className="product-info">
            <h6 className="product-name">
                Computador Desktop - Intel Core i7
            </h6>
            <div className="product-price-container">
                <span className="product-currency">R$</span>
                <h3 className="product-price"> 2.779,00</h3>
            </div>
        </div>
    </div>


)

export default ProductCard;