import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';
import Button from '../ui/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#service', label: 'Services' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#clients', label: 'Clients' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <header className="fixed w-full bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/assets/img/logo.png"
                            alt="ganzy-malgwi technologies"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Navigation navItems={navItems} />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button href="#contact" variant="primary">
                            Start a Project
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <Navigation
                            navItems={navItems}
                            isMobile
                            onItemClick={() => setIsMenuOpen(false)}
                        />
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <Button href="#contact" variant="primary" className="w-full justify-center">
                                Start a Project
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;