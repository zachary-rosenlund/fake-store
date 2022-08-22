
import Link from 'next/link';
import { User } from 'react-feather';
import { useDispatch } from 'react-redux';
import classes from './AccountButton.module.css';

function AccountButton() {
    const dispatch = useDispatch();

    return (
        <Link href='/signin'>
            <div className={classes.signIn}>
                <User /> Sign In
            </div>
        </Link>
    )
}

export default AccountButton;