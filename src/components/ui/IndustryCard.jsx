import React from 'react';
import * as FaIcons from 'react-icons/fa';

const IndustryCard = ({ industry, onClick }) => {
    const IconComponent = FaIcons[industry.icon];

    return (
        <div
            className="bg-gray-50 p-6 rounded-lg text-center cursor-pointer transition duration-300 hover:shadow-lg hover:transform hover:scale-105"
            onClick={onClick}
        >
            <div className="text-4xl text-blue-600 mb-4">
                {IconComponent && <IconComponent />}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                {industry.title}
            </h3>
        </div>
    );
};

export default IndustryCard;