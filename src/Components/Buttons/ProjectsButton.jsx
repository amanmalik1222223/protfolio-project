import React, { Component } from 'react';

class ProjectsButton extends Component {
    handleClick = () => {
        const { link } = this.props;
        if (link) {
            window.location.href = link;
        }
    };

    render() {
        const { heading } = this.props;
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className='px-20 py-4 text-darkBlack bg-white text-3xl font-roboto font-semibold rounded-2xl 
                    transition transform hover:scale-105 ease-in-out duration-500 border-b-4 border-lightGray'
                >
                    {heading}
                </button>
            </div>
        );
    }
}

export default ProjectsButton;
