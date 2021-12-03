import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'
const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='What Is GPT-3' text='Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The Possibilities are beyond your imagination
                </h1>
                <p>Explore the library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text='Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.' />
                <Feature title='Knowledgebase' text='Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.' />
                <Feature title='Education' text='Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.' />
            </div>
        </div>
    )
}

export default WhatGPT3
