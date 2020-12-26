import React from 'react';
import './Competencies.scss';

const Competencies = () => {
    return (
        <div className='comp'>
            <div className="container">
                <div className="row">
                    <h2>Competencies</h2>
                    <div className="comp__info">
                        <h3>Backend: </h3>
                        <p>PostgreSQL, MondoDB, NodeJS, ExpressJS, REST</p>
                        <h3>Frontend: </h3>
                        <p>HTML5, CSS3/SCSS, Javscript, JSX, React, JSON</p>
                        <h3>Softskills: </h3>
                        <p>Organization, Collaboration, Leadership, and an eye for detail</p>
                        <h3>Other: </h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competencies
