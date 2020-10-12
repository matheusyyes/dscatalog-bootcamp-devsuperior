import React from 'react';
import './styles.scss';
import {ReactComponent as Product} from '../../../core/assets/images/product.svg';
import ProductPrice from '../../../core/components/ProductPrice';

const ProductCard = () =>(

    <div className="card-base border-radios-10 product-card">
        <Product></Product>
        <div className="product-info">
            <h6 className="product-name">
                Computador Desktop - Intel Core i7
            </h6>
            <ProductPrice price="2.779,00"/>
        </div>
    </div>


)

export default ProductCard;