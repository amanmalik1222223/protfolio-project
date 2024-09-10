import React, { Component } from 'react';
import ProjectFrames from '../ProjectFrames/ProjectFrames';
import currencyconverter from '../../assets/ProjectPics/CurrencyConverter.png';
import responsivewebsite from '../../assets/ProjectPics/responsivewebsite.png';
import portfoliowebsite from '../../assets/ProjectPics/portfoliowebsite.png';
import ProjectsButton from '../Buttons/ProjectsButton';

class Project extends Component {
    render() {
        return (
            <div id='projects' className='h-auto w-full px-[5vw] pt-[15vh] pb-[20vh] bg-darkBlack'>
                {/* Heading */}
                <div className='w-full text-center text-6xl text-white mb-20 font-oswald font-semibold'>
                    <h1 className=''>Projects</h1>
                </div>

                {/* Projects Container */}
                <div className='lg:flex lg:flex-row flex-col lg:gap-10 gap-6 lg:mb-8 mb-4'>
                    {/* Reusing the ProjectFrames component for each project */}
                    <ProjectFrames
                        image={portfoliowebsite}
                        heading="Portfolio Website"
                        url="" />
                    <ProjectFrames
                        image={responsivewebsite}
                        heading="Responsive Website"
                        url="https://amanmalik1222223.github.io/responsive-website/" />
                    <ProjectFrames
                        image={currencyconverter}
                        heading="Currency Converter App"
                        url="https://currency-converter-zeta-lake.vercel.app/"
                    />
                </div>

                {/* Button */}
                <div className='z-50 w-full text-center'>
                    <ProjectsButton heading="See More" link="/projectmain" />
                </div>
            </div>
        );
    }
}

export default Project;
