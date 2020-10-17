import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Seta } from 'core/assets/images/Seta.svg'
import './styles.scss';
import ProductPrice from 'core/components/ProductPrice';
import { makeRequest } from 'core/utils/request';
import { Product } from 'core/Types/Products';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';


type ParamsTyoe = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsTyoe>();
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data))
            .finally(() => setIsLoading(false))
    }, [productId])

    return (
        <div className="product-details-container">
            <div className="card-base border-radios-20 product-details">
                <Link to="/products" className="product-details-link">
                    <Seta className="icon-goback"></Seta>
                    <h1 className="text-goback"> voltar</h1>
                </Link>
                <div className="row">
                <div className="col-6 pr-5">
                    {isLoading ? <ProductInfoLoader/> : (
                        <>

                            
                                <div className="product-details-card text-center">
                                    <img src={product?.img_url} alt={product?.name} className="product-details-image" />
                                </div>
                                <h1 className="product-details-name">{product?.name}</h1>
                                {product?.id && <ProductPrice price={product?.price} />}
                           

                        </>
                    )}
                     </div>
                     <div className="col-6 product-details-card">
                    {isLoading ? <ProductDescriptionLoader /> : (
                        <>
                                <h1 className="product-description-title">pr</h1>
                                <p className="product-description-text">
                                    {product?.description}
                                </p>

                        </>
                    )}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ProductDetails;