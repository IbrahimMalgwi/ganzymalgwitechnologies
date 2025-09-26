import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaVimeo, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">JavaPlus Innovations</h4>
                        <p className="text-gray-300 mb-6">
                            Javaplus Innovations Limited is a software development and technology consulting firm with a mission to empower digital enterprises and help them operate more effectively by leveraging software engineering excellence.
                        </p>
                        <div className="flex space-x-4">
                            {[FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaVimeo, FaYoutube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>7th Floor, Mulliner Towers Ikoyi, Lagos, Nigeria.</p>
                            <p>+2348165956554</p>
                            <p>+2348023165475</p>
                            <p>info@javaplusinnovations.com</p>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Working Hours</h4>
                        <ul className="space-y-2 text-gray-300 mb-4">
                            <li>Monday - Friday: 7:00 - 17:00</li>
                            <li>Saturday: 7:00 - 12:00</li>
                            <li>Sunday and holidays: 8:00 - 10:00</li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            <span className="font-semibold">For more than 10 years,</span> JavaPlus has been a reliable partner in the field of Software development.
                        </p>
                        <a href="#contact" className="text-blue-400 hover:text-blue-300 transition duration-300">
                            Start a Project →
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>Copyright {currentYear} Javaplus Innovations. All Rights Reserved | Design By Javaplus Innovations Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;