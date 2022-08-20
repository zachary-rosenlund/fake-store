import CategoryMenu from '../CategoryMenu/CategoryMenu';
import Image from 'next/image';
import classes from './Header.module.css';

function Header() {
    return (
        <div className={classes.siteHeader}>
            <div className={classes.siteLogo}>
                <Image src={require('../../assets/fakestorelogo.png')} alt={''}/>
            </div>
            <CategoryMenu />
        </div>
    )
}

export default Header;