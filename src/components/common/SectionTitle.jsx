import React from 'react';

const SectionTitle = ({ tag, title, description, centered = false }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
            {tag && (
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
          {tag}
        </span>
            )}
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
                    {title}
                </h2>
            )}
            {description && (
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;