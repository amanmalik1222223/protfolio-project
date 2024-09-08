import React, { Component } from 'react';
import ProjectsButton from '../Buttons/ProjectsButton';

class ContactMe extends Component {
    render() {
        return (
            <div className='h-[89.5vh] w-full px-[15vw] py-[17vh] bg-darkBlack flex flex-col gap-8 items-center text-center text-white'>
                <div><h2 className='text-3xl font-roboto font-semibold text-lightGray'>Duis aute irure dolor in reprehenderit in voluptate.</h2></div>
                <div><ProjectsButton heading="Let's Colaborate"/></div>
                <div></div>
            </div>
        );
    }
}

export default ContactMe;