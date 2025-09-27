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
                        <h4 className="text-xl font-bold mb-4">Ganzy-Malgwi Technologies</h4>
                        <p className="text-gray-300 mb-6">
                            Ganzy-Malgwi Technologies is a dynamic software development and tech consulting company dedicated to enabling digital businesses to thrive. Through cutting-edge software engineering, the firm helps organizations streamline operations and achieve greater efficiency.
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
                            <p>Commercial, Avenue Sabo, Lagos, Nigeria.</p>
                            <p>+234 815 254 6005</p>
                            <p>+234 815 254 6005</p>
                            <p>ganzymalgwitechnologies@gmail.com</p>
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
                            <span className="font-semibold">For more than 3 years,</span> Ganzy-Malgwi Technologies has consistently proven to be a trusted ally in the realm of software development, delivering dependable solutions and fostering long-term success for its clients.
                        </p>
                        <a href="#contact" className="text-blue-400 hover:text-blue-300 transition duration-300">
                            Start a Project →
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>Copyright {currentYear} Ganzy-Malgwi Technologies. All Rights Reserved | Design By Ganzy-Malgwi Technologies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;