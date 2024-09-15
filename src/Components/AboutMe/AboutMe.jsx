import React, { Component } from 'react';
import Skills from '../Skills/Skills';

class AboutMe extends Component {
    render() {
        return (
            <div id='about' className='section bg-black h-auto w-full px-4 sm:px-8 lg:px-[10vw] py-[10vh]'>
                {/* Heading */}
                <div className='text-4xl sm:text-5xl lg:text-6xl text-white mb-6 sm:mb-10 font-oswald font-semibold text-center lg:text-left'>
                    <h1>About Me</h1>
                </div>

                {/* Grid Container */}
                <div className='lg:grid grid-cols-6 grid-rows-10 gap-6 flex flex-col h-auto'>

                    {/* Summary Section */}
                    <div className='row-span-6 col-span-4 bg-white p-4 sm:p-6 lg:p-8 rounded-lg border-b-4 border-lightGray shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        <p className='text-md sm:text-lg lg:text-xl font-poppins text-gray-800'>
                            <span className='text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 block mb-2'>I’m Aman,</span>
                            a passionate Web Developer and UI/UX Designer dedicated to creating innovative digital experiences. With expertise in React, Tailwind CSS, and No-Code platforms, I specialize in blending creativity with functionality to deliver seamless, user-centric solutions. My work is driven by a commitment to designing intuitive, visually appealing websites that provide real value. Outside of work, I stay inspired by exploring technology trends and creative ideas. My goal is to push boundaries and contribute to impactful projects. Let’s collaborate to bring your vision to life!
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className='row-span-10 col-span-2 bg-white p-4 sm:p-6 lg:p-8 rounded-lg border-b-4 border-lightGray shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-6 lg:mt-0'>
                        <Skills />
                    </div>

                    {/* Education Section */}
                    <div className='row-span-4 col-span-4 bg-white p-4 sm:px-6 lg:px-8 lg:py-6 rounded-lg border-b-4 border-lightGray shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-6 lg:mt-0'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-4'>Education</h2>
                        <ul className='list-disc pl-5 space-y-4'>
                            <li>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className='text-md sm:text-lg lg:text-xl font-poppins font-medium'>
                                            Btech in Information Technology, <span className='text-customGray'>from Nsut</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-md sm:text-lg lg:text-xl font-roboto font-medium'>2021-2025</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className='text-md sm:text-lg lg:text-xl font-poppins font-medium'>
                                            Class 12th, <span className='text-customGray'>from CR Public School</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-md sm:text-lg lg:text-xl font-roboto font-medium'>2020-2021</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;
