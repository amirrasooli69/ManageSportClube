import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

//Style
import styles from './Navbar.module.css';

const Navbar = () => {

    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Diamond Social Network
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;