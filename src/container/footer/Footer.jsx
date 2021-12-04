import React from 'react'
import './footer.css';
import gpt3Logo from '../../assests/logo.svg'
const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step into the future before others.</h1>
            </div>
            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt='logo' />
                    <p>A/17 Gali No.1 Arera Colony,All Rights Reserved.</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contacts</p>

                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>A/17 Gali No.1 Arera Colony,462010</p>
                    <p>+91 86XXXXXXXX</p>
                    <p>Info@payment</p>

                </div>
            </div>
            <div className='gpt3__footer-copy'>
                <p>&copy;2021GPT-3.All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
