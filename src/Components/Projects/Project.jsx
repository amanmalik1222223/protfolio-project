import React, { Component } from 'react';
import ProjectFrames from '../ProjectFrames/ProjectFrames';
import currencyconverter from '../../assets/ProjectPics/CurrencyConverter.png'
import ProjectsButton from '../Buttons/ProjectsButton';

class Project extends Component {
    render() {
        return (
            <div className='h-auto w-full px-[5vw] py-[20vh] bg-darkBlack'>
                {/* Heading */}
                <div className='w-full text-center text-6xl text-white mb-20 font-oswald font-semibold'>
                    <h1 className=''>Projects</h1>
                </div>

                <div className='flex gap-10 mb-8'>
                    {/* Reusing the component with different images and headings */}
                    <ProjectFrames image={currencyconverter} heading="Currency Converter Project" />
                    <ProjectFrames image={currencyconverter} heading="Currency Converter Project" />
                    <ProjectFrames image={currencyconverter} heading="Currency Converter Project" />
                </div>


                <div className='w-full text-center'>
                    <ProjectsButton heading="See More"/>
                </div>
            </div>
        );
    }
}

export default Project;