import React from 'react';
import '../assets/styles/components/header.scss'

const Header = () => (
    <header className ="header">
        <img className ="header__img" src="logo-platzi-video.png" alt="logo de platzi" />
        <div className ="header__menu">
        <div className ="header__menu--profile">
            <img src="user.png" alt="" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerra Sesión</a></li>
        </ul>
        </div>
     </header>
);

export default Header;