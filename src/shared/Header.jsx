import { hot } from 'react-hot-loader/root';
import * as React from "react";
import styles from './header.css';

function HeaderComponent(){
    // console.log(styles, styles.example);
    return(
        <header >
            <h2 className={styles.example}>Hello, React!</h2>     
            
        </header>
    );
} 

export const Header = hot(HeaderComponent);