import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaVimeo, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Ganzy-Malgwi Technologies
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                            Ganzy-Malgwi Technologies is a dynamic software development and tech consulting company
                            dedicated to enabling digital businesses to thrive. Through cutting-edge software engineering,
                            the firm helps organizations streamline operations and achieve greater efficiency.
                        </p>
                        <div className="flex space-x-3">
                            {[FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaVimeo, FaYoutube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Contact Us
                        </h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Commercial, Avenue Sabo, Lagos, Nigeria.</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                <p>+234 815 254 6005</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                <p>+234 815 254 6005</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                <p>ganzymalgwitechnologies@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Working Hours
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                                <span>Monday - Friday: 7:00 - 17:00</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                                <span>Saturday: 7:00 - 12:00</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span>
                                <span>Sunday and holidays: 8:00 - 10:00</span>
                            </li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">
                            <span className="font-semibold text-blue-400">For more than 3 years,</span> Ganzy-Malgwi Technologies
                            has consistently proven to be a trusted ally in the realm of software development,
                            delivering dependable solutions and fostering long-term success for its clients.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 font-semibold group"
                        >
                            Start a Project
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        Copyright {currentYear} Ganzy-Malgwi Technologies. All Rights Reserved |
                        <span className="text-blue-400 ml-1">Design By Ganzy-Malgwi Technologies</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;