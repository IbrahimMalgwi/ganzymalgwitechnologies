// src/components/ui/IndustryCard.jsx
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

const IndustryCard = ({ industry, index, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = FaIcons[industry.icon];

    const colorVariants = {
        blue: 'from-[#0F009A] to-[#6A00FF]',
        purple: 'from-[#8B5CF6] to-[#C4B5FD]',
        green: 'from-[#10B981] to-[#34D399]',
        orange: 'from-[#F59E0B] to-[#FBBF24]',
        teal: 'from-[#06B6D4] to-[#22D3EE]',
        pink: 'from-[#EC4899] to-[#F472B6]'
    };

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Animated Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[industry.color]} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                {/* Icon with Gradient Background */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${colorVariants[industry.color]} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl flex items-center justify-center h-full">
                        {IconComponent && <IconComponent />}
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorVariants[industry.color]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Industry Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0F009A] transition-colors duration-300 line-clamp-2">
                    {industry.title}
                </h3>

                {/* Industry Description */}
                <p className="text-gray-600 leading-relaxed flex-grow mb-4 line-clamp-3">
                    {industry.description}
                </p>

                {/* Features List */}
                {industry.features && (
                    <ul className="space-y-2 mb-6">
                        {industry.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-500">
                                <span className="w-2 h-2 bg-[#0F009A] rounded-full mr-3"></span>
                                <span className="line-clamp-1">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Learn More Link */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-[#0F009A] font-semibold group-hover:text-[#0D0085] transition-colors duration-300">
                        Learn More
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
                    </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0F009A] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
        </div>
    );
};

export default IndustryCard;