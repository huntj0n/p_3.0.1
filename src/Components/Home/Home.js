import React from 'react';
import './Home.scss';

import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="row">
                    <Banner />
                </div>
            </div>
        </div>
    )
}

export default Home
