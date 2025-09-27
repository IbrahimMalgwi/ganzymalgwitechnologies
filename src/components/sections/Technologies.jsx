// src/components/sections/Technologies.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import TechnologySection from '../ui/TechnologySection';
import { technologies } from '../../data/technologies';
import { FaCode, FaLayerGroup, FaDatabase, FaRocket, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Technologies = () => {
    const [activeTab, setActiveTab] = useState('languages');
    const [hoveredTech, setHoveredTech] = useState(null);

    const techCategories = [
        {
            id: 'languages',
            name: 'Programming Languages',
            icon: FaCode,
            description: 'Core programming languages we excel in for building robust applications',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'frameworks',
            name: 'Frameworks & Libraries',
            icon: FaLayerGroup,
            description: 'Modern frameworks and libraries for efficient development',
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'databases',
            name: 'Databases',
            icon: FaDatabase,
            description: 'Database technologies for scalable data management',
            color: 'from-green-500 to-green-600'
        },
        {
            id: 'tools',
            name: 'DevOps & Tools',
            icon: FaRocket,
            description: 'Development tools and DevOps practices we master',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const expertiseAreas = [
        {
            icon: FaChartLine,
            title: 'High Performance',
            description: 'Optimized solutions for maximum efficiency'
        },
        {
            icon: FaShieldAlt,
            title: 'Security First',
            description: 'Secure coding practices and protocols'
        },
        {
            icon: FaRocket,
            title: 'Scalable Architecture',
            description: 'Solutions that grow with your business'
        }
    ];

    return (
        <section id="technologies" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0F009A] opacity-5 rounded-full translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 translate-y-40"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="OUR TECH STACK"
                        title="Technologies We Master"
                        description="We leverage cutting-edge technologies and modern development practices to deliver high-quality, scalable, and secure software solutions tailored to your business needs."
                        centered
                    />
                </div>

                {/* Expertise Highlights */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {expertiseAreas.map((area, index) => {
                        const IconComponent = area.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                                    <p className="text-gray-600">{area.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {techCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                    activeTab === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-100'
                                }`}
                            >
                                <IconComponent className="w-5 h-5 mr-3" />
                                {category.name}
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                    activeTab === category.id
                                        ? 'bg-white/20'
                                        : 'bg-gray-100'
                                }`}>
                                    {technologies[category.id]?.length || 0}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Tab Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-6">
                        {techCategories.map((category) => (
                            activeTab === category.id && (
                                <div key={category.id} className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
                                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                                </div>
                            )
                        ))}
                    </div>

                    {/* Technology Grid */}
                    <div className="p-8">
                        {activeTab === 'languages' && (
                            <TechnologySection
                                title=""
                                items={technologies.languages}
                                onHover={setHoveredTech}
                                hoveredItem={hoveredTech}
                            />
                        )}
                        {activeTab === 'frameworks' && (
                            <TechnologySection
                                title=""
                                items={technologies.frameworks}
                                onHover={setHoveredTech}
                                hoveredItem={hoveredTech}
                            />
                        )}
                        {activeTab === 'databases' && (
                            <TechnologySection
                                title=""
                                items={technologies.databases}
                                onHover={setHoveredTech}
                                hoveredItem={hoveredTech}
                            />
                        )}
                        {activeTab === 'tools' && (
                            <TechnologySection
                                title=""
                                items={technologies.tools}
                                onHover={setHoveredTech}
                                hoveredItem={hoveredTech}
                            />
                        )}
                    </div>
                </div>

                {/* Tech Stats */}
                <div className="grid md:grid-cols-4 gap-8 mt-16">
                    {[
                        { value: '15+', label: 'Programming Languages' },
                        { value: '25+', label: 'Frameworks' },
                        { value: '10+', label: 'Databases' },
                        { value: '50+', label: 'Tools & Technologies' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl p-6 text-white shadow-lg">
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-100 text-sm">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            Ready to Leverage Our Technical Expertise?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Let's discuss how our technology stack can power your next project and drive your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#0F009A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0085] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0F009A]/25">
                                Start a Technical Discussion
                            </button>
                            <button className="border-2 border-[#0F009A] text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-[#0F009A] hover:text-white transition-all duration-300">
                                View Our GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;