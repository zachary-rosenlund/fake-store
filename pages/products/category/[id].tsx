import React, { useState, useEffect } from "react";
import classes from './category.module.css';
import ProductTile from "components/ProductTile";
import Catalog from "@/components/Catalog/Catalog";


interface CategoryProps {
    products: any[];
}

function Category(props: CategoryProps): any {
    const { products } = props;

    return (
        <div className={classes.root}>
            <Catalog products={products} />
        </div>
    )
}

export default Category;

export async function getServerSideProps(context) {
    const { query } = context;
    const { id } = query;

    const products = await fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then(res => res.json());

    return {
        props: {
            products
        }
    }
}
