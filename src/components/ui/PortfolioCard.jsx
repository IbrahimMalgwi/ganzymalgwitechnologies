import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard = ({ item }) => {
    return (
        <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="relative group">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition duration-300 text-white bg-blue-600 p-3 rounded-full"
                    >
                        <FaExternalLinkAlt size={20} />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-4 hover:text-blue-700 transition duration-300"
                >
                    Preview <FaExternalLinkAlt />
                </a>
            </div>
        </div>
    );
};

export default PortfolioCard;