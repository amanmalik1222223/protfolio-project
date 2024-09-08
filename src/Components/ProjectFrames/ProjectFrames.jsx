import React, { Component } from 'react';

class ProjectFrames extends Component {
    render() {
        const { image, heading } = this.props; // Destructuring props
        return (
<div className='text-lightGray w-1/2 bg-gradient-to-b from-customBlack to-darkBlack 
    px-6 py-6 rounded-xl text-center h-auto transition transform hover:-translate-y-2 hover:rotate-1 hover:shadow-lg cursor-pointer duration-300'>


                {/* Image */}
                <div className='w-full mb-6'>
                    <img src={image} alt='Project Image'></img>
                </div>

                {/* Heading */}
                <div className='font-roboto text-3xl font-semibold mb-5'>
                    <h1>{heading}</h1>
                </div>
            </div>
        );
    }
}

export default ProjectFrames;
