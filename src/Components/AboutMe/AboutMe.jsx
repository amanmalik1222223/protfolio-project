import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className='bg-black h-auto w-full px-[15vw] py-[20vh]'>
                {/* Heading */}
                <div className='text-6xl text-white mb-10 font-oswald font-semibold'>
                    <h1>About Me</h1>
                </div>

                {/* Grid Container */}
                <div className='grid grid-cols-6 grid-rows-6 gap-6 h-[80vh]'>

                    <div className='row-span-4 col-span-4 bg-white p-8 rounded-lg border-b-4 border-lightGray shadow-lg'>
                        {/* Summary */}
                        <p className='text-lg font-poppins text-gray-800 hover:translate-x-1  transition ease-in-out duration-500'>
                            <span className='text-2xl font-bold text-blue-600 block mb-2'>I’m Aman,</span>
                            a passionate Web Developer and UI/UX Designer dedicated to creating innovative digital experiences. With expertise in React, Tailwind CSS, and No-Code platforms, I specialize in blending creativity with functionality to deliver seamless, user-centric solutions. My work is driven by a commitment to designing intuitive, visually appealing websites that provide real value. Outside of work, I stay inspired by exploring technology trends and creative ideas. My goal is to push boundaries and contribute to impactful projects. Let’s collaborate to bring your vision to life!
                        </p>
                    </div>

                    <div className='row-span-6 col-span-2 bg-white p-8 rounded-lg border-b-4 border-lightGray shadow-lg'>
                        {/* Skills */}
                        <h2 className='text-2xl font-bold text-blue-600 mb-4'>Skills</h2>
                        
                    </div>

                    <div className='row-span-2 col-span-4 bg-white px-8 py-6 rounded-lg border-b-4 border-lightGray shadow-lg'>
                        {/* Education */}
                        <div className='hover:translate-x-1  transition ease-in-out duration-500'>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Education</h2>
                            <ul className='list-disc pl-5 space-y-4'>
                                <li>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-xl font-poppins font-medium'>
                                                Btech in Information Technology, <span className='text-customGray'>from Nsut</span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-xl font-roboto font-medium'>2021-2025</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-xl font-poppins font-medium'>
                                                Class 12th, <span className='text-customGray'>from CR Public School</span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-xl font-roboto font-medium'>2020-2021</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;
