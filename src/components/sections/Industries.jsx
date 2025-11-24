// src/components/sections/Industries.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import IndustryCard from '../ui/IndustryCard';
import IndustryModal from '../ui/IndustryModal';
import useModal from '../../hooks/useModal';
import { industries } from '../../data/industries';
import { FaSearch, FaChartLine, FaUsers } from 'react-icons/fa';

const Industries = () => {
    const { isOpen, modalData, openModal, closeModal } = useModal();
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Updated categories only - layout remains identical
    const industryCategories = [
        { id: 'all', name: 'All Industries', count: industries.length, icon: FaChartLine },
        { id: 'finance', name: 'Finance', count: industries.filter(i => i.category === 'finance').length, icon: FaChartLine },
        { id: 'education', name: 'Education', count: industries.filter(i => i.category === 'education').length, icon: FaUsers },
        { id: 'healthcare', name: 'Healthcare', count: industries.filter(i => i.category === 'healthcare').length, icon: FaUsers },
        { id: 'retail', name: 'Retail', count: industries.filter(i => i.category === 'retail').length, icon: FaUsers },
        { id: 'manufacturing', name: 'Manufacturing', count: industries.filter(i => i.category === 'manufacturing').length, icon: FaUsers }
    ];

    const filteredIndustries = industries.filter(industry => {
        const matchesSearch = industry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            industry.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'all' || industry.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    const stats = [
        { value: '12+', label: 'Industries Served' },
        { value: '35+', label: 'Projects Delivered' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '5+', label: 'Years Experience' }
    ];

    return (
        <section id="industry" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements - EXACTLY THE SAME */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 -translate-y-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            <div className="container-custom relative z-10">
                {/* Header Section - EXACTLY THE SAME */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="INDUSTRIES WE SERVE"
                        title="Tailored Solutions for Every Business"
                        description="We deliver innovative software solutions across diverse industries, leveraging our expertise to address unique challenges and drive digital transformation."
                        centered
                    />
                </div>

                {/* Stats Overview - EXACTLY THE SAME */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-3xl lg:text-4xl font-bold text-[#0F009A] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search and Filter Section - EXACTLY THE SAME */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Box - EXACTLY THE SAME */}
                        <div className="flex-1 w-full lg:max-w-md">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search industries..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200"
                                />
                            </div>
                        </div>

                        {/* Filter Tabs - EXACT SAME LAYOUT, only category names changed */}
                        <div className="flex flex-wrap gap-3">
                            {industryCategories.map((category) => {
                                const IconComponent = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            activeFilter === category.id
                                                ? 'bg-[#0F009A] text-white shadow-lg shadow-[#0F009A]/25'
                                                : 'bg-gray-100 text-gray-700 hover:bg-[#0F009A] hover:text-white'
                                        }`}
                                    >
                                        <IconComponent className="w-4 h-4 mr-2" />
                                        {category.name}
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                            activeFilter === category.id
                                                ? 'bg-white/20'
                                                : 'bg-gray-200'
                                        }`}>
                                            {category.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Industries Grid - EXACTLY THE SAME */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredIndustries.map((industry, index) => (
                        <IndustryCard
                            key={industry.id}
                            industry={industry}
                            index={index}
                            onClick={() => openModal(industry)}
                        />
                    ))}
                </div>

                {/* No Results Message - EXACTLY THE SAME */}
                {filteredIndustries.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaSearch className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No industries found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* CTA Section - EXACTLY THE SAME */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Don't See Your Industry?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Every business is unique. Contact us to discuss how we can create custom solutions tailored specifically to your industry's needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                                Contact Our Experts
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F009A] transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industry Modal - EXACTLY THE SAME */}
            <IndustryModal
                isOpen={isOpen}
                industry={modalData}
                onClose={closeModal}
            />
        </section>
    );
};

export default Industries;