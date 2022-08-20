import Header from '../Header/Header';
import classes from './Layout.module.css';

function Layout({ children }: any) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout;