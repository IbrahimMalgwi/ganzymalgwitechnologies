// src/components/ui/TestimonialCard.jsx
import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedContent = testimonial.content.length > 150
        ? testimonial.content.substring(0, 150) + '...'
        : testimonial.content;

    return (
        <div
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-[#0F009A] text-3xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <FaQuoteLeft />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                                i < testimonial.rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow mb-4">
                    <blockquote className="text-gray-700 leading-relaxed">
                        {isExpanded ? testimonial.content : truncatedContent}
                    </blockquote>
                    {testimonial.content.length > 150 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-[#0F009A] text-sm font-medium hover:text-[#0D0085] transition-colors duration-300 mt-2"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#0F009A] border-opacity-10"
                    />
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-800 text-sm truncate">
                            {testimonial.name}
                        </div>
                        <div className="text-[#0F009A] font-medium text-xs truncate">
                            {testimonial.position}
                        </div>
                        <div className="text-gray-600 text-xs truncate">
                            {testimonial.company}
                        </div>
                    </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-[#0F009A] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default TestimonialCard;