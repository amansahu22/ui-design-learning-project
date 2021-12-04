import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving and distrusts instantly',
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
        title: 'Become the tended active',
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
        title: 'Message or am nothing',
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
        title: 'Really boy law county',
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    }
]
const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>
                    The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((data, index) => (
                    <Feature key={index} title={data.title} text={data.text} />))}
            </div>
        </div>
    )
}

export default Features
