// src/components/ui/PortfolioCard.jsx
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

const PortfolioCard = ({ item, index, onViewDetails }) => {
    const [isHovered, setIsHovered] = useState(false);

    const categoryColors = {
        web: 'from-blue-500 to-blue-600',
        mobile: 'from-purple-500 to-purple-600',
        fintech: 'from-green-500 to-green-600',
        ecommerce: 'from-orange-500 to-orange-600'
    };

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[item.category]} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex space-x-4">
                            <button
                                onClick={onViewDetails}
                                className="bg-white text-[#0F009A] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                                aria-label="View details"
                            >
                                <FaEye className="w-5 h-5" />
                            </button>
                            {item.liveUrl && (
                                <a
                                    href={item.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-[#0F009A] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                                    aria-label="Live demo"
                                >
                                    <FaExternalLinkAlt className="w-5 h-5" />
                                </a>
                            )}
                            {item.githubUrl && (
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                                    aria-label="View code"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-white text-[#0F009A] px-3 py-1 rounded-full text-sm font-medium capitalize shadow-lg">
                            {item.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow mb-4 line-clamp-3">
                        {item.description}
                    </p>

                    {/* Technologies */}
                    {item.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                            {item.technologies.length > 3 && (
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                    +{item.technologies.length - 3}
                                </span>
                            )}
                        </div>
                    )}

                    {/* View Details Link */}
                    <button
                        onClick={onViewDetails}
                        className="flex items-center text-[#0F009A] font-semibold hover:text-[#0D0085] transition-colors duration-300 mt-auto pt-4 border-t border-gray-100"
                    >
                        View Case Study
                        <svg
                            className={`w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ${
                                isHovered ? 'translate-x-1' : 'translate-x-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;