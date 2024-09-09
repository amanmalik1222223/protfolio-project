import React, { Component } from 'react';
import bg1 from '../../assets/BgImages/BlackBg3.jpg';
import aman1 from '../../assets/AmanImages/AmanSelfie.jpeg';
import { TypeAnimation } from 'react-type-animation';

class HeroSection extends Component {
    render() {
        return (
            <div
                className='flex items-center justify-center bg-white h-auto sm:h-[89.5vh] w-full px-6 sm:px-12 md:px-24 py-10'
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col-reverse sm:flex-row w-full max-w-7xl mx-auto'>
                    {/* Text Section */}
                    <div className='flex flex-col w-full sm:w-1/2 text-left text-white gap-4 sm:gap-6 items-start justify-center'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            Hi, I’m Aman.
                        </h1>
                        <div className='text-4xl md:text-5xl lg:text-6xl font-semibold'>
                            <TypeAnimation
                                sequence={[
                                    'Web Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000,
                                    'Freelancer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className='text-red-500'
                                repeat={Infinity}
                            />
                        </div>
                        <p className='text-lightGray text-base md:text-lg lg:text-xl mt-4 font-medium'>
                            I build seamless, user-focused digital solutions that blend innovation with aesthetics.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className='flex items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0'>
                        <img
                            src={aman1}
                            alt='Aman'
                            className='w-3/4 md:w-2/3 lg:w-1/2 h-auto max-w-md lg:max-w-lg rounded-full shadow-lg transition-transform duration-300 hover:scale-105'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;
