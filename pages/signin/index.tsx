import { login } from 'store/slices/app';
import classes from './signin.module.css'

export default function SignIn() {
    function onSubmit(e) {
        e.preventDefault();
        // login('username', 'password')
    }

    return (
        <div className={classes.signIn}>
            <form>
                <label>Username
                    <input type={'text'}/>
                </label>
                <label>Password
                    <input type={'password'}/>
                </label>
                <button type={'submit'} onClick={(e) => onSubmit(e)}>
                    Sign In
                </button>
            </form>
        </div>
    )
}