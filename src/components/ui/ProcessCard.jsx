import React from 'react';
import * as FaIcons from 'react-icons/fa';

const ProcessCard = ({ step, number }) => {
    const IconComponent = FaIcons[step.icon];

    return (
        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300">
            <div className="relative mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-blue-600 text-2xl font-bold">{number}</span>
                </div>
                <div className="text-3xl text-blue-600 mt-4">
                    {IconComponent && <IconComponent />}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {step.description}
            </p>
        </div>
    );
};

export default ProcessCard;