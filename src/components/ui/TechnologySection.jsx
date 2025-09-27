// src/components/ui/TechnologySection.jsx
import React from 'react';

const TechnologySection = ({ items, onHover, hoveredItem }) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="text-center group"
                        onMouseEnter={() => onHover?.(item)}
                        onMouseLeave={() => onHover?.(null)}
                    >
                        <div className={`bg-gray-50 rounded-2xl p-4 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                            hoveredItem === item ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-[#0F009A] border-opacity-20' : 'border border-gray-200'
                        }`}>
                            {/* Technology Icon */}
                            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-full h-full object-contain max-w-12 max-h-12 transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Technology Name */}
                            <span className={`font-medium text-sm transition-colors duration-300 ${
                                hoveredItem === item ? 'text-[#0F009A] font-semibold' : 'text-gray-700'
                            }`}>
                                {item.name}
                            </span>
                        </div>

                        {/* Experience Level (Optional) */}
                        {item.experience && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div
                                        className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] h-1.5 rounded-full transition-all duration-300"
                                        style={{ width: item.experience }}
                                    ></div>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{item.experience} Experience</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Hover Details Panel */}
            {hoveredItem && (
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-[#0F009A] border-opacity-20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <img
                                src={hoveredItem.icon}
                                alt={hoveredItem.name}
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">{hoveredItem.name}</h4>
                                <p className="text-gray-600">{hoveredItem.description}</p>
                            </div>
                        </div>
                        {hoveredItem.experience && (
                            <div className="text-right">
                                <div className="text-2xl font-bold text-[#0F009A]">{hoveredItem.experience}</div>
                                <div className="text-sm text-gray-600">Experience Level</div>
                            </div>
                        )}
                    </div>

                    {/* Use Cases */}
                    {hoveredItem.useCases && (
                        <div className="mt-4">
                            <h5 className="font-semibold text-gray-800 mb-2">Common Use Cases:</h5>
                            <div className="flex flex-wrap gap-2">
                                {hoveredItem.useCases.map((useCase, idx) => (
                                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TechnologySection;