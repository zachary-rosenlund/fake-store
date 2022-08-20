import ProductTile from 'components/ProductTile';
import classes from './Catalog.module.css';

interface CatalogProps {
    products: any[];
}

function Catalog(props: CatalogProps) {
    const { products } = props;

    return (
        <div className={classes.catalog}>
            {products.map(product => (
                <ProductTile key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Catalog;