import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';
import Button from '../ui/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#service', label: 'Services' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#industry', label: 'Industries' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <header className="fixed w-full bg-white shadow-lg z-50">
            <div className="container-custom py-4">
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
                    <div className="hidden md:flex items-center space-x-8">
                        <Navigation navItems={navItems} />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button href="#contact" variant="primary">
                            Start a Project
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <Navigation
                            navItems={navItems}
                            isMobile
                            onItemClick={() => setIsMenuOpen(false)}
                        />
                        <div className="mt-4">
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