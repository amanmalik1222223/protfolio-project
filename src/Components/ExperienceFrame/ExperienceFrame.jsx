import React, { Component } from 'react';

class ExperienceFrame extends Component {
    render() {
        const { jd, company, location, timeduration, description } = this.props;
        return (
            <div id='experience' className='w-full h-auto px-10 py-8 text-white gap-5 bg-gradient-to-b 
            from-customBlack to-darkBlack rounded-xl'>
                <div className='text-4xl font-roboto font-semibold'>
                    <h1>{jd}</h1>
                </div>
                <div className='flex justify-between font-poppins text-customGray font-semibold 
                text-md'>
                    <div>
                        <h2>{company}, {location}</h2>
                    </div>
                    <div>
                        <h2>{timeduration}</h2>
                    </div>
                </div>
                <div className='font-poppins mt-5 text-lg text-lightGray'>
                    <ul className='list-disc pl-5'>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExperienceFrame;
