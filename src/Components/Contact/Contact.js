import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="row">
                    <h1>Contact Me <span>.</span></h1>
                    
                    <div className="contact__info">
                        <p>Name:</p>
                        <input type="text" placeholder='Enter your name here.'/>
                        <p>Email:</p>
                        <input type="text" placeholder='Enter your email here.'/>
                        <p>Message:</p>
                        <input type="text" placeholder='Enter your message here.'/>
                        <button>Send Inquiry</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
