import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Disable scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Reset overflow on component unmount
        };
    }, [isOpen]);

    return (
        <>
            {/* Desktop menu */}
            <div className='hidden lg:flex max-h-[14vh] bg-transparent w-full justify-between 
            items-baseline px-11 text-white font-cormorant py-4 align-middle'>
                <div className='text-orange-700 text-4xl font-bold'>
                    <span className='font-oswald font-semibold text-white'>AMAN MALIK</span>
                </div>
                <div className='text-2xl font-medium gap-6 flex text-lightGray'>
                    <div><a href='#home' className='hover:text-customGray font-roboto cursor-pointer active:text-gray-700'>Home</a></div>
                    <div><a href='#about' className='hover:text-customGray font-roboto cursor-pointer active:text-gray-700'>About Me</a></div>
                    <div><a href='#projects' className='hover:text-customGray font-roboto cursor-pointer active:text-gray-700'>Projects</a></div>
                    <div><a href='#experience' className='hover:text-customGray font-roboto cursor-pointer active:text-gray-700'>Experience</a></div>
                    <div><a href='#contact' className='hover:text-customGray font-roboto cursor-pointer active:text-gray-700'>Contact Me</a></div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className='flex-col lg:hidden bg-transparent w-full justify-between items-middle text-white font-cormorant pt-5'>
                <div className='flex max-h-[12vh] z-50 bg-transparent w-full justify-between items-baseline md:px-9 px-7 text-white 
                font-cormorant pb-4 align-middle'>
                    <div className='text-orange-700 md:text-4xl w-full sm:text-3xl text-2xl font-bold font-oswald'>
                        <span>AMAN MALIK</span>
                    </div>

                    <div onClick={toggleMenu}>
                        {!isOpen ? (
                            <FontAwesomeIcon icon={faBars} className='md:text-4xl sm:text-3xl text-2xl font-bold font-oswald' />
                        ) : (
                            <FontAwesomeIcon icon={faXmark} className='md:text-4xl sm:text-3xl text-2xl font-bold font-oswald' />
                        )}
                    </div>
                </div>

                {/* Overlay Menu */}
                <div
                    className={`fixed top-[12vh] left-0 w-full h-full bg-white bg-opacity-30 backdrop-blur-md text-orange-200 z-40 
                        flex flex-col items-center font-roboto font-medium
                        transition-all duration-500 ease-in-out text-2xl ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <div className='w-full text-center py-4 cursor-pointer transition ease-in-out duration-500 hover:bg-gray-700'>
                        <a href='#home'>Home</a>
                    </div>
                    <div className='w-full text-center py-4 cursor-pointer transition ease-in-out duration-500 hover:bg-gray-700'>
                        <a href='#about'>About Me</a>
                    </div>
                    <div className='w-full text-center py-4 cursor-pointer transition ease-in-out duration-500 hover:bg-gray-700'>
                        <a href='#projects'>Projects</a>
                    </div>
                    <div className='w-full text-center py-4 cursor-pointer transition ease-in-out duration-500 hover:bg-gray-700'>
                        <a href='#experience'>Experience</a>
                    </div>
                    <div className='w-full text-center py-4 cursor-pointer transition ease-in-out duration-500 hover:bg-gray-700'>
                        <a href='#contact'>Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
