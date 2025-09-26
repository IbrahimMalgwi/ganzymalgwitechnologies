import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import TechnologySection from '../ui/TechnologySection';
import { technologies } from '../../data/technologies';

const Technologies = () => {
    const [activeTab, setActiveTab] = useState('languages');

    return (
        <section className="section-padding bg-gray-100">
            <div className="container-custom">
                <SectionTitle
                    tag="Technologies"
                    title="What We Do Best"
                    centered
                />

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-8">
                    {['languages', 'frameworks', 'databases'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                                activeTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-lg p-8">
                    {activeTab === 'languages' && (
                        <TechnologySection
                            title="Programming Languages"
                            items={technologies.languages}
                        />
                    )}
                    {activeTab === 'frameworks' && (
                        <TechnologySection
                            title="Frameworks & Libraries"
                            items={technologies.frameworks}
                        />
                    )}
                    {activeTab === 'databases' && (
                        <TechnologySection
                            title="Databases"
                            items={technologies.databases}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Technologies;