import React, { Component } from 'react';
import ExperienceFrame from '../ExperienceFrame/ExperienceFrame';

class Experience extends Component {
    render() {
        return (
            <div className='h-auto w-full px-[15vw] py-[20vh] bg-darkBlack'>
                {/* Heading */}
                <div className='w-full text-6xl text-white mb-20 font-oswald font-semibold'>
                    <h1 className=''>Experience</h1>
                </div>

                <div className='flex flex-col gap-14'>
                <ExperienceFrame
                    jd="Freelancer"
                    company="Self Employed"
                    location="Remote"
                    timeduration="Jan 2022-Current"
                    description={[
                        "Developed and maintained web applications.",
                        "Led a team of 5 developers in Agile environment.",
                        "Implemented new features and fixed bugs.",
                        "Optimized application performance and scalability.",
                        "Collaborated with cross-functional teams for project delivery."
                    ]}
                />
                <ExperienceFrame
                    jd="Freelancer"
                    company="Self Employed"
                    location="Remote"
                    timeduration="Jan 2022-Current"
                    description={[
                        "Developed and maintained web applications.",
                        "Led a team of 5 developers in Agile environment.",
                        "Implemented new features and fixed bugs.",
                        "Optimized application performance and scalability.",
                        "Collaborated with cross-functional teams for project delivery."
                    ]}
                />
                </div>

            </div>
        );
    }
}

export default Experience;