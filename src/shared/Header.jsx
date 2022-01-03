import { hot } from 'react-hot-loader/root';
import * as React from "react";

function HeaderComponent(){
    return(
        <header>
            <h2>Hello, React, super!</h2>     
            <p>Hello, there</p>
        </header>
    );
} 

export const Header = hot(HeaderComponent);