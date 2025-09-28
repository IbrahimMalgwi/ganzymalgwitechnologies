// src/components/sections/Clients.jsx
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { clients } from '../../data/clients';

const Clients = () => {
    return (
        <section id="clients" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#0F009A] opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="TRUSTED PARTNERS"
                        title="Our Valued Clients"
                        description="We're proud to collaborate with industry leaders and innovative organizations across various sectors, delivering exceptional software solutions that drive success."
                        centered
                    />
                </div>

                {/* Client Logos Grid */}
                <div className="relative">
                    {/* Animated Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F009A]/5 to-transparent"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center relative z-10">
                        {clients.map((client, index) => (
                            <div
                                key={client.id}
                                className="group relative flex justify-center"
                            >
                                {/* Client Logo Card */}
                                <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 w-full max-w-48">
                                    {/* Client Logo */}
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 mx-auto"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F009A] to-[#6A00FF] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                                    {/* Client Name Tooltip */}
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                                        <div className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                                            {client.name}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {[
                        { number: '50+', label: 'Clients Served', icon: '👥' },
                        { number: '8+', label: 'Industries', icon: '🏢' },
                        { number: '5+', label: 'Years Experience', icon: '⭐' },
                        { number: '98%', label: 'Retention Rate', icon: '💫' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <div className="text-2xl lg:text-3xl font-bold text-[#0F009A] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                                Ready to Join Our Client Family?
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Partner with us to transform your business with innovative software solutions that deliver real results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-[#0F009A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Start Your Project
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0F009A] transition-all duration-300">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;