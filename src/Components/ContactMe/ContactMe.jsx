import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectsButton from '../Buttons/ProjectsButton';

class ContactMe extends Component {
    render() {
        return (
            <div id='contact' className='h-[89.5vh] w-full px-[15vw] py-[17vh] bg-darkBlack flex flex-col gap-8 items-center text-center text-white'>
                <div>
                    <h2 className='text-3xl font-roboto font-semibold text-lightGray'>
                        Have a project idea?<br />Let’s join forces and build something great!
                    </h2>
                </div>
                <div>
                    <ProjectsButton heading="Let's Collaborate" link="https://www.linkedin.com/in/your-profile" />
                </div>
                <div className='flex gap-6 text-white text-3xl'>
                <a href="https://x.com/amalik_2003" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/amanmalik1222223" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactMe;
