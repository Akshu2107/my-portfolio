import React from 'react';
import logo from '../images/IMG_20240901_185254.jpg'


function Navbar() {
    const navstyle = {
        position: "fixed",
        top: "0px",
        width: "100%",
        height: "60px",
        zIndex: "49",

    }


    return (
        <div>
            <nav className="bg-gray-900 border-black" style={navstyle}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a href="https://flowbite.com/" className="flex ms-6 items-center space-x-3 ">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Akshay Rokade</span>
                    </a>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full" src={logo} alt="user_photo" />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-gray-700 divide-y rounded-lg shadow divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-white">Akshay Rokade</span>
                                <span className="block text-sm truncate text-gray-400">rokadeakshay5555@gmail.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-gray-900 md:bg-gray-900 border-gray-700">
                            <li>
                                <a href="#homepage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 px-3 rounded  md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Pricing</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav>



        </div>
    )
}

export default Navbar
