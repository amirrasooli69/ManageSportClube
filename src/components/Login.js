import React from 'react';

//Logo
import google from '../assets/google.svg';

//Style
import styles from './Login.module.css';
const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Diamond Social Network!!</h2>

                <div className={styles.button}>
                    
                    <img src={google} alt="google" />Sing in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;