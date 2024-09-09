import React, { Component } from 'react';

class ProjectFrames extends Component {
    render() {
        const { image, heading, url} = this.props; // Destructuring props
        return (
            
                <a href={url}
                className='text-lightGray lg:w-1/2 w-full bg-gradient-to-b from-customBlack to-darkBlack 
    px-6 py-6 rounded-xl text-center h-auto transition transform lg:hover:-translate-y-2 
    lg:hover:rotate-1 lg:hover:shadow-lg cursor-pointer duration-300'>


                {/* Image */}
                <div className='w-full lg:mb-6 mb-4'>
                    <img src={image} alt='Project Image' className='rounded-xl'></img>
                </div>

                {/* Heading */}
                <div className='font-roboto lg:text-3xl md:text-2xl text-xl font-semibold mb-5'>
                    <h1>{heading}</h1>
                </div>
 
            </a>
            
        );
    }
}

export default ProjectFrames;
