import React from 'react'
import './Possibility.css';
import image from '../../assests/possibility.png'
const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={image} alt='Possibility' />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request early access to get started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <h4>Request early access to get started</h4>
            </div>
        </div>
    )
}

export default Possibility
