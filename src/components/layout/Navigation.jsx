import React from 'react';

const Navigation = ({ navItems, isMobile = false, onItemClick }) => {
    return (
        <nav className={isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}>
            {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={onItemClick}
                    className={`font-medium transition duration-300 hover:text-blue-600 ${
                        isMobile
                            ? 'text-gray-700 py-2 text-lg'
                            : 'text-gray-700'
                    }`}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;