import React, { Component } from 'react';
import c_logo from '../../assets/Skill_Img/C++.png';
import python_logo from '../../assets/Skill_Img/Python.png';
import html_logo from '../../assets/Skill_Img/HTML.png';
import css_logo from '../../assets/Skill_Img/CSS.png';
import js_logo from '../../assets/Skill_Img/JavaScript.png';
import react_logo from '../../assets/Skill_Img/React.png';
import github_logo from '../../assets/Skill_Img/GitHub.png';
import git_logo from '../../assets/Skill_Img/Git.png';
import vs_code_logo from '../../assets/Skill_Img/VS-Code.png';
import figma_logo from '../../assets/Skill_Img/Figma.png';
import webflow_logo from '../../assets/Skill_Img/Webflow.png';
import framer_logo from '../../assets/Skill_Img/Framer.png';

class Skills extends Component {
    render() {
        return (
            <div className='w-full h-auto'>
                {/* Skills */}
                <h2 className='text-2xl font-bold text-blue-600 mb-6 text-center'>Skills</h2>

                {/* Grid Layout */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
                    {/* Skill items */}
                    {[
                        { img: c_logo, name: "C++" },
                        { img: python_logo, name: "Python" },
                        { img: html_logo, name: "HTML" },
                        { img: css_logo, name: "CSS" },
                        { img: js_logo, name: "JavaScript" },
                        { img: react_logo, name: "React" },
                        { img: github_logo, name: "GitHub" },
                        { img: git_logo, name: "Git" },
                        { img: vs_code_logo, name: "VS Code" },
                        { img: figma_logo, name: "Figma" },
                        { img: webflow_logo, name: "Webflow" },
                        { img: framer_logo, name: "Framer" },
                    ].map((skill, index) => (
                        <div key={index} className='flex flex-col items-center mb-2'>
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className='w-16 h-16 mb-4 object-contain transform transition-transform duration-1000 hover:rotate-[360deg]'
                            />
                            <p className='text-sm font-medium text-gray-700'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Skills;
