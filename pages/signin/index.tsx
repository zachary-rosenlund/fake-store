import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus, login, setLoginStatus } from 'store/slices/app';
import classes from './signin.module.css'

export default function SignIn() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isLoggedIn = useSelector(getLoginStatus);
    const dispatch: any = useDispatch();

    const handleInputChange = event => {
        switch (event.target.name) {
            case "username":
                setUsername(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
        }
    }

    const renderErrorMessage = () =>
    (
        <div className={classes.error}>Username or Password is incorrect</div>
    );

    function signIn(e) {
        e.preventDefault();
        dispatch(login(username, password));
        setIsSubmitted(true);
    }

    function signOut(e) {
        e.preventDefault();
        dispatch(setLoginStatus(false));
    }

    return (
        isLoggedIn ? 
            <div className={classes.signIn}>
                <button type={'submit'} onClick={(e) => signOut(e)}>
                    Sign Out
                </button>
            </div>
            :
            <div className={classes.signIn}>
                <form>
                    <label>Username
                        <input name="username" type={'text'} value={username} onChange={handleInputChange} required />
                    </label>
                    <label>Password
                        <input name="password" type={'password'} value={password} onChange={handleInputChange} required />
                    </label>
                    <button type={'submit'} onClick={(e) => signIn(e)}>
                        Sign In
                    </button>
                    {(!isLoggedIn && isSubmitted) && renderErrorMessage()}
                </form>
            </div>
    )
}
