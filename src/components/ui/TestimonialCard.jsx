import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4">
                <FaQuoteLeft className="text-blue-600 text-2xl" />
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
            </p>

            <div className="flex items-center">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;