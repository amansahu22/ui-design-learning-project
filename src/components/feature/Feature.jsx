import React from 'react'
import './feature.css'
const Feature = ({ title, text }) => {
    return (
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>
                <div />
                {/* i will use this empty div to make bar from it */}
                <h1>{title}</h1>
            </div>
            <div className='gpt3__features-container__feature-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature