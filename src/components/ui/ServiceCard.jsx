import React from 'react';
import * as FaIcons from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const IconComponent = FaIcons[service.icon];

    const colorClasses = {
        blue: 'border-blue-500 hover:shadow-blue-200',
        red: 'border-red-500 hover:shadow-red-200',
        green: 'border-green-500 hover:shadow-green-200',
        purple: 'border-purple-500 hover:shadow-purple-200'
    };

    return (
        <div className={`bg-white p-6 rounded-lg shadow-lg border-b-4 transition duration-300 hover:shadow-xl ${colorClasses[service.color]}`}>
            <div className="text-4xl text-blue-600 mb-4">
                {IconComponent && <IconComponent />}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {service.description}
            </p>
        </div>
    );
};

export default ServiceCard;