import React from 'react';

const TechnologySection = ({ title, items }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="text-center group">
                        <div className="bg-gray-50 p-4 rounded-lg transition duration-300 group-hover:bg-blue-50 group-hover:transform group-hover:scale-105">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="h-12 w-12 mx-auto mb-3 object-contain"
                            />
                            <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologySection;