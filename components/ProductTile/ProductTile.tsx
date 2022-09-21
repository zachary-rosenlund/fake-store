import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { getLoginStatus } from 'store/slices/app';
import formatPrice from 'util/formatPrice';
import classes from './ProductTile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProductTileProps {
    product: any;
}

function ProductTile(props: ProductTileProps) {
    const isLoggedIn = useSelector(getLoginStatus);
    const { product } = props;

    return (
        <div className={classes.productTile}>
            <picture className={classes.productImage}>
                <source srcSet={product.image} type={'image/webp'} />
                <img src={product.image} alt={'Product Photo'} />
            </picture>
            <div className={classes.productTitle}>
                {product?.title}
            </div>

            <div className={classes.productPrice}>
                {(!isLoggedIn && product.price > 500) ? <p>Sign in to view pricing</p> : <>{formatPrice(product.price)}</>}
            </div>
            
        </div>
    )
}

export default ProductTile;