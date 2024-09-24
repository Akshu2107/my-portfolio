import React from 'react';
import bgimage from '../images/20230829070706_1S7A07131.JPG';
import '../components/css/Home.css';
import { FooterIcon } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Home() {
    const styles = {
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9),rgba(10, 10, 10, 0.8)),url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        margin: '0px 0px 0px 0px',
        padding: '100px 0px',
    };

    return (
        <div id='homepage'>
            <div className="home-container text-center pt-10 mx-0 " >
                <div className="content w-full " style={styles} >
                    <h1 className='text-4xl mt-0 md:pt-10 md:text-5xl font-bold text-white text-ellipsis'>Welcome to <br className='md:hidden'></br> My Portfolio</h1>
                    <p className='text-3xl md:text-4xl mt-10 pt-10 text-green-600 font-bold'>Hi <br></br>I'm Akshay Rokade<br></br></p>
                    <p className='position text-xl md:text-2xl mt-5 pt-5 pb-0 mb-0 text-yellow-500'>Web Developer</p>
                    <div className="mt-10 pt-10 flex space-x-6 justify-center ">
                        <FooterIcon href="#" icon={BsFacebook} className="text-yellow-500 dark:text-white" />
                        <FooterIcon href="#" icon={BsInstagram} className="text-yellow-500 dark:text-white" />
                        <FooterIcon href="#" icon={BsTwitter} className="text-yellow-500 dark:text-white" />
                        <FooterIcon href="#" icon={BsGithub} className="text-yellow-500 dark:text-white" />
                        <FooterIcon href="#" icon={BsDribbble} className="text-yellow-500 dark:text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
