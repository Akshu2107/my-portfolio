import React from 'react';
import "../components/css/About.css";
import image from "../images/20230829070706_1S7A07131.JPG";
import Resume from "../images/Akshay_Rokade_CV.pdf";

function About() {
    return (
        <div className='mt-10 pt-3'>
            <section id="about" className="section py-16 bg-gray-900 text-white after:left-section scroll-mt-16">
                <h1 className='text-white text-5xl text-center border '>About</h1>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        {/* Image Section */}
                        <div className=" mb-8 lg:mb-0 w-auto lg:w-full">
                            <div className="rounded overflow-hidden p-1 w-full">
                                <img
                                    alt="my-image"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-96 lg:w-1/2 h-auto mx-auto sm:m-0 p-3 mt-5 mb-5 border object-cover"
                                    src={image}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 ms-6 pb-5 pt-5">
                            <div className="typo-box lg:ms-8">
                                <h3 className="text-3xl font-semibold text-white">Akshay Rokade</h3>
                                <h5 className="text-xl font-medium text-white mt-2">
                                    Web Developer (MERN & MEAN)
                                </h5>
                                <p className="text-gray-600 mt-4">
                                    I design and develop services for customers of all sizes, specializing in creating stylish, modern
                                    websites, web services, and online stores. My passion is to design digital user experiences through
                                    bold interfaces and meaningful interactions. Check out my Portfolio.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    <div>
                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white">Birthday </label>
                                            <span className='ms-4'>|</span>
                                            <p className="text-gray-500 ms-4">21st Jully 1996</p>
                                        </div>
                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white me-4">Age</label>
                                            <span className='ms-8'>|</span>
                                            <p className="text-gray-500 ms-4">28 Yr</p>
                                        </div>

                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white">Address</label>
                                            <span className='ms-5'>|</span>
                                            <p className="text-gray-500 ms-4">Pune, India</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white">E-mail</label>
                                            <span className='ms-4'>|</span>
                                            <p className="text-gray-500 ms-4">rokadeakshay5555<br className='sm:hidden'></br>@gmail.com</p>
                                        </div>
                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white">Phone</label>
                                            <span className='ms-4'>|</span>
                                            <p className="text-gray-500 ms-4">+91 9604357613</p>
                                        </div>
                                        <div className="mb-4 flex">
                                            <label className="font-semibold text-white">Github</label>
                                            <span className='ms-3'>|</span>
                                            <p className="text-gray-500 ms-3">rokadeakshay5555<br className='sm:hidden'></br>@gmail.com</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <button className="btn-17">
                                        <span className="text-container">
                                            <span className="text" download={Resume}><a href={Resume} download="">Download CV</a></span>
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
