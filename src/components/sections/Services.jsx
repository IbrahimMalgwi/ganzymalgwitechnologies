// src/components/sections/Services.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Updated categories only - layout remains identical
    const serviceCategories = [
        { id: 'all', name: 'All Services', count: services.length },
        { id: 'ict-media', name: 'ICT & Media', count: services.filter(s => s.category === 'ict-media').length },
        { id: 'renewable-energy', name: 'Renewable Energy', count: services.filter(s => s.category === 'renewable-energy').length },
        { id: 'security', name: 'Security Systems', count: services.filter(s => s.category === 'security').length },
    ];

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <section id="service" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements - EXACTLY THE SAME */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0F009A] opacity-5 rounded-full -translate-y-36 translate-x-36"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-y-48 -translate-x-48"></div>

            <div className="container-custom relative z-10">
                <SectionTitle
                    tag="OUR SERVICES"
                    title="What We Do"
                    description="Comprehensive software solutions tailored to drive your business forward with innovation and excellence."
                    centered
                />

                {/* Category Filter - EXACT SAME LAYOUT, only category names changed */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {serviceCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id
                                    ? 'bg-[#0F009A] text-white shadow-lg shadow-[#0F009A]/25'
                                    : 'bg-white text-gray-700 hover:bg-[#0F009A] hover:text-white border border-gray-200'
                            }`}
                        >
                            {category.name}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                activeCategory === category.id
                                    ? 'bg-white/20'
                                    : 'bg-gray-100'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Services Grid - EXACTLY THE SAME */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {filteredServices.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA Section - EXACTLY THE SAME */}
                <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss how our services can help you achieve your goals. We provide custom solutions that drive real results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#0F009A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0085] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0F009A]/25">
                            Start a Project
                        </button>
                        <button className="border-2 border-[#0F009A] text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-[#0F009A] hover:text-white transition-all duration-300">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;