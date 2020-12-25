import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row v-center space-between">
                    <a href="/" className="header__logo">
                        JH.
                    </a>
                    <div className="header__toggle">
                        <div className='header__menuBtn'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
