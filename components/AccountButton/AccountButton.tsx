
import Link from 'next/link';
import { User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus, getUsername } from 'store/slices/app';
import classes from './AccountButton.module.css';

function AccountButton() {
    const dispatch = useDispatch();
    const username = useSelector(getUsername);
    const isLoggedIn = useSelector(getLoginStatus);

    return (
        <Link href='/signin'>
            <div className={classes.signIn}>
                {isLoggedIn ? <><User />Hello, {username}!</> : <><User /> Sign In</>}
            </div>
        </Link>
    )
}

export default AccountButton;