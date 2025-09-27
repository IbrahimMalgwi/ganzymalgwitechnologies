// src/components/sections/About.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { FaPlay, FaAward, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const stats = [
        { icon: FaAward, value: '5+', label: 'Years Experience' },
        { icon: FaUsers, value: '180+', label: 'Happy Clients' },
        { icon: FaRocket, value: '35+', label: 'Projects Completed' },
        { icon: FaShieldAlt, value: '24/7', label: 'Support' }
    ];

    const industries = [
        'Banks & Financial Services', 'FinTech', 'Healthcare', 'Start-ups',
        'Telecoms', 'Education', 'Retail & E-commerce', 'Insurance'
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#0F009A] opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full translate-x-40 translate-y-40"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#0F009A] opacity-3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <SectionTitle
                            tag="ABOUT JAVAPLUS"
                            title="Leading Software Solution Providers"
                            className="text-left"
                        />

                        {/* Main Description */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <span className="font-semibold text-[#0F009A]">Ganzy-Malgwi Technologies</span> is a premier software development and technology consulting firm with a mission to empower digital enterprises and help them operate more effectively through software engineering excellence.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                We design and develop fit-for-purpose solutions tailored to exceed customer expectations, combining innovative technology with deep industry expertise to deliver transformative results.
                            </p>

                            {/* Industries We Serve */}
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="w-2 h-6 bg-[#0F009A] rounded-full mr-3"></span>
                                    Industries We Serve
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {industries.map((industry, index) => (
                                        <div key={index} className="flex items-center text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-[#0F009A] rounded-full mr-2"></span>
                                            {industry}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                            <div className="text-[#0F009A] text-2xl mb-2 flex justify-center">
                                                <IconComponent />
                                            </div>
                                            <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-[#0F009A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0085] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0F009A]/25 flex items-center justify-center">
                                Learn More About Us
                            </button>
                            <button
                                onClick={() => setIsVideoPlaying(true)}
                                className="border-2 border-[#0F009A] text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-[#0F009A] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaPlay className="w-4 h-4" />
                                Watch Intro Video
                            </button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative">
                        {/* Main Image Grid */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="space-y-4 lg:space-y-6">
                                <div className="relative group">
                                    <img
                                        src="/assets/img/tile-gallery/a2.jpg"
                                        alt="Our Team at Work"
                                        className="w-full h-48 lg:h-56 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#0F009A] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                                </div>
                                <div className="bg-gradient-to-br from-[#0F009A] to-[#6A00FF] p-6 rounded-2xl text-white shadow-xl">
                                    <h4 className="font-bold text-lg mb-2">Innovation Driven</h4>
                                    <p className="text-sm opacity-90">Cutting-edge solutions powered by latest technologies</p>
                                </div>
                            </div>

                            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-800 mb-2">Quality First</h4>
                                    <p className="text-sm text-gray-600">Rigorous testing and quality assurance processes</p>
                                </div>
                                <div className="relative group">
                                    <img
                                        src="/assets/img/tile-gallery/470pic.jpg"
                                        alt="Our Development Process"
                                        className="w-full h-48 lg:h-56 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#0F009A] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float hidden lg:block"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-float animation-delay-1000 hidden lg:block"></div>

                        {/* Decorative Badge */}
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-2xl p-4 rotate-12 border-2 border-[#0F009A] hidden lg:block">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#0F009A]">2018</div>
                                <div className="text-xs text-gray-600">Founded</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
                    {[
                        {
                            title: "Mission",
                            description: "To empower digital enterprises through innovative software solutions that drive growth and efficiency.",
                            color: "from-[#0F009A] to-[#6A00FF]"
                        },
                        {
                            title: "Vision",
                            description: "To be the leading technology partner for businesses seeking digital transformation and innovation.",
                            color: "from-[#8B5CF6] to-[#C4B5FD]"
                        },
                        {
                            title: "Values",
                            description: "Excellence, Innovation, Integrity, and Customer Success guide everything we do.",
                            color: "from-[#06B6D4] to-[#22D3EE]"
                        }
                    ].map((item, index) => (
                        <div key={index} className="text-center group">
                            <div className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl mb-6 inline-block`}>
                                <div className="bg-white rounded-xl p-3">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto`}>
                                        <span className="text-white text-lg font-bold">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full p-6 relative">
                        <button
                            onClick={() => setIsVideoPlaying(false)}
                            className="absolute -top-4 -right-4 bg-[#0F009A] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0D0085] transition-colors duration-300"
                        >
                            ×
                        </button>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <FaPlay className="w-16 h-16 text-[#0F009A] opacity-50 mx-auto mb-4" />
                                <p className="text-gray-600">Company Introduction Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;