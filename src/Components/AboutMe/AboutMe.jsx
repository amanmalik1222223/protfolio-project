import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className='bg-black h-auto w-full px-[15vw] py-[20vh]'>
                {/* Heading */}
                <div className='text-6xl text-white mb-10 font-oswald font-semibold'>
                    <h1 className=''>About Me</h1>
                </div>

                {/* Grid Container */}
                <div className='grid grid-cols-6 grid-rows-6 gap-6 h-[80vh]'>
                    
                    <div className='row-span-4 col-span-4 rounded-xl bg-white px-4 py-3 font-roboto font-semibold'>
                        <h2 className='text-3xl'>Summary</h2>
                        {/*summary*/}
                    </div>
                    <div className='row-span-6 col-span-2 rounded-xl bg-white px-4 py-3 font-roboto font-semibold'>
                        {/*skills*/}
                        <h2 className='text-3xl'>Skills</h2>
                    </div>
                    
                    <div className='row-span-2 col-span-4 rounded-xl bg-white px-4 py-3 font-roboto font-semibold'>
                        {/*exp*/}
                        <h2 className='text-3xl'>Education</h2>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutMe;
