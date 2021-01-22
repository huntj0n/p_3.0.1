import React from 'react';
import './Banner.scss';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating engaging websites and</span>  
                        </div>
                        <div className="line">
                            <span>applications is what I do <span>.</span></span>  
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">My Work <RightArrow /></a>
                        <a href="/">More about me <RightArrow/></a>
                        <a href="/">LinkedIn</a>
                        <a href="/">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner