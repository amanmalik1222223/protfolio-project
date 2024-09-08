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
                    <div className='flex flex-col w-full sm:w-1/2 text-left font-oswald text-white gap-4 sm:gap-6 items-start justify-center'>
                        <div className='text-4xl md:text-5xl lg:text-6xl'>
                            <h1>Hi,</h1>
                        </div>
                        <div className='text-4xl md:text-5xl lg:text-6xl'>
                            <h1>My name is Aman</h1>
                        </div>
                        <div className='text-4xl md:text-5xl lg:text-6xl'>
                            <span>I am a </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Web Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Ui/Ux Designer',
                                    1000,
                                    'Freelance Designer and Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className='text-red-500'
                                repeat={Infinity}
                            />
                        </div>
                        <div className='font-poppins'>
                            <h5 className='text-lightGray text-base md:text-lg lg:text-xl'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </h5>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='flex items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0'>
                        <img
                            src={aman1}
                            alt='My photo'
                            className='w-3/4 md:w-1/2 lg:w-2/3 h-auto max-w-md lg:max-w-lg rounded-full'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;
