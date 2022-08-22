import Image from 'next/image';
import React from 'react';
import formatPrice from 'util/formatPrice';
import classes from './ProductTile.module.css';

interface ProductTileProps {
    product: any;
}

function ProductTile(props: ProductTileProps) {
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
                {formatPrice(product.price)}
            </div>
            
        </div>
    )
}

export default ProductTile;