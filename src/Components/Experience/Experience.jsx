import React, { Component } from 'react';
import ExperienceFrame from '../ExperienceFrame/ExperienceFrame';

class Experience extends Component {
    render() {
        return (
            <div className='h-auto w-full gap-[20vh] lg:px-[15vw] md:px-[10vw] px-[5vw]  lg:py-[20vh] py-[13vh]  bg-darkBlack'>
                {/* Sticky Heading */}
                <div className='sticky top-[10vh] z-0 bg-darkBlack py-6'>
                    <div className='w-full text-6xl text-white font-oswald font-semibold'>
                        <h1>Experience</h1>
                    </div>
                </div>

                {/* Experience Content */}
                <div className='relative flex flex-col lg:gap-[40vh] gap-[20vh]'>
                    <div className='sticky top-[30vh] z-10 transition-transform duration-300'>
                        <ExperienceFrame
                            jd="Freelancer"
                            company="Self Employed"
                            location="Remote"
                            timeduration="Jan 2022 - Current"
                            description={[
                                "Designed and developed 10+ websites for small to medium businesses.",
                                "Utilized both code and no-code tools to build responsive, user-friendly sites.",
                                "Created detailed mockups and prototypes using Figma.",
                                "Enhanced clients' digital presence through tailored web solutions.",
                                "Managed projects from concept to completion, ensuring client satisfaction."
                            ]}
                        />
                    </div>

                    <div className='relative z-20 mt-[35vh]'>
                        <ExperienceFrame
                            jd="Web Developer Intern"
                            company="Mr. Move"
                            location="New Delhi"
                            timeduration="June 2024 - July 2024"
                            description={[
                                "Developed website designs using PHP and WordPress.",
                                "Implemented and customized themes and plugins.",
                                "Collaborated with designers to create responsive layouts.",
                                "Optimized websites for performance and SEO.",
                                "Assisted in debugging and troubleshooting issues."
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
